"use client"
import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast, Toaster } from "sonner"
import { z } from "zod"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from '@/components/ui/textarea'
import { Button } from "@/components/ui/button"
import { useTranslations } from 'next-intl'
import Link from 'next/link';
import { Loader2Icon } from "lucide-react"

export default function Letter() {
    const t = useTranslations()

    // const [captchaToken, setCaptchaToken] = useState<string | null>(null)

    const [loading, setLoading] = useState(false);
    const FormSchema = z.object({
        name: z.string().min(1),
        email: z.string().email(),
        message: z.string().min(2),
        checked: z.boolean().refine(value => value, {
            message: t("tips.privacy"),
        }),
    })

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
            checked: false
        },
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        setLoading(true);
        try {
            const res = await fetch('/api/contact', {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(data),
            });
            const result = await res.json();
            setLoading(false);
            if (result.success) {
                toast.success(t("tips.sendSuccess"));
                form.reset()
            } else {
                toast.error(result.error || t("tips.sendFail"));
            }
        } catch (error) {
            setLoading(false);
        }
    }

    return (
        <>
            <Toaster position='top-center' />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className='w-[50%]'>
                                <FormLabel>{t("contact.name")}</FormLabel>
                                <FormControl>
                                    <Input placeholder={t("tips.name")} {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t("contact.email")}</FormLabel>
                                <FormControl>
                                    <Input placeholder={t("tips.email")} type="email" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t("tips.message")}</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder={t("tips.message")}
                                        rows={5}
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="checked"
                        render={({ field }) => (
                            <FormItem>
                                <Label>
                                    <Checkbox
                                        checked={field.value}     // 控制 checkbox 的状态
                                        onCheckedChange={field.onChange}  // 当 checkbox 改变时，触发 zod 校验
                                        id="toggle-2"
                                        className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                                    />
                                    <div className="grid gap-1.5 font-normal">
                                        <p className="text-sm leading-none font-medium">
                                            {t("tips.agree")}
                                            <Link href={"/privacy-policy"} className='underline'>{t("tips.policy")}</Link>
                                        </p>
                                    </div>
                                </Label>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" disabled={loading} className="bg-6 cursor-pointer hover:bg-3 py-6 px-18" size={"lg"}>
                        {loading && <Loader2Icon className="animate-spin mr-2" />}
                        {t("contact.send")}
                    </Button>
                </form>
            </Form>
        </>
    )
}
