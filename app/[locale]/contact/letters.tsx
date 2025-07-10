"use client"
import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import {
    Form,
    FormControl,
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
import Links from "@/components/common/Links";
import { Loader2Icon } from "lucide-react"

// import ReCAPTCHA from 'react-google-recaptcha'
export default function Letter() {
    const [captchaToken, setCaptchaToken] = useState<string | null>(null)
    const [loading, setLoading] = useState(false);
    const t = useTranslations()


    const FormSchema = z.object({
        name: z.string().min(1),
        lastName: z.string().min(0),
        email: z.string().email(),
        phone: z.string().min(1),
        message: z.string().min(2),
        checked: z.boolean().refine(value => value, {
            message: t("tips.privacy"),
        }),
    })

    let form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
            lastName: '',
            phone: '',
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
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 text-white">
                    <div className='flex'>
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className='w-[48%]'>
                                    <FormLabel className='text-[14px] md:text-[18px]'>{t("contact.name")} </FormLabel>
                                    <FormControl>
                                        <Input className='h-[40px] md:h-[50px]' placeholder={`*${t("tips.name")}`}  {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem className='w-[48%] ml-[4%]'>
                                    <FormLabel className='text-[14px] md:text-[18px]'>{t("contact.lastName")}</FormLabel>
                                    <FormControl>
                                        <Input className='h-[40px] md:h-[50px]' placeholder={t("tips.last")} {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-[14px] md:text-[18px]'>{t("contact.email")}</FormLabel>
                                <FormControl>
                                    <Input className='h-[40px] md:h-[50px]' placeholder={`*${t("tips.email")}`} type="email" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-[14px] md:text-[18px]'>{t("contact.phone")}</FormLabel>
                                <FormControl>
                                    <Input className='h-[40px] md:h-[50px]' placeholder={"*Phone / WhatsApp / WeChat"}  {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-[14px] md:text-[18px]'>{t("tips.message")}</FormLabel>
                                <FormControl>
                                    <Textarea
                                        className='h-[100px] md:h-[200px]'
                                        placeholder={`*${t("tips.message")}`}
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
                                            <Links href="/privacy-policy" className='underline'>{t("tips.policy")}</Links>
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
