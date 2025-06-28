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
import { Input } from "@/components/ui/input"
import { Textarea } from '@/components/ui/textarea'
import { Button } from "@/components/ui/button"
import { useTranslations } from 'next-intl'

const FormSchema = z.object({
    name: z.string().min(1, { message: '请输入姓名' }),
    email: z.string().email({ message: '请输入有效的邮箱地址' }),
    message: z.string().min(1, { message: '请输入至少5个字的留言内容' }),
})

export default function Letter() {
    const t = useTranslations()

    const [captchaToken, setCaptchaToken] = useState<string | null>(null)

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast(t("tips.sendSuccess"))
    }

    return (
        <>
            <Toaster position='top-center'/>
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
                                <FormMessage />
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
                                <FormMessage />
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
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="bg-6 cursor-pointer hover:bg-3" size={"lg"}>{t("contact.send")}</Button>
                </form>
            </Form>
        </>
    )
}
