"use client"
import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
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


import ReCAPTCHA from 'react-google-recaptcha'

const FormSchema = z.object({
    name: z.string().min(1, { message: '请输入姓名' }),
    lastName: z.string().min(1, { message: '请输入姓名' }),
    email: z.string().email({ message: '请输入有效的邮箱地址' }),
    message: z.string().min(5, { message: '请输入至少5个字的留言内容' }),
})

export default function Letter() {
    const [captchaToken, setCaptchaToken] = useState<string | null>(null)

    const t = useTranslations()

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
            lastName: '',
        },
    })


    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast("Tips:", {
            description: (
                <div className="text-black text-[16px] mt-2 w-[320px] rounded-md bg-white p-2">
                    <p >{t("tips.sendSuccess")} !</p>
                </div>
            ),
        })

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
                                        <Input className='h-[40px] md:h-[50px]' placeholder={t("tips.name")}  {...field} />
                                    </FormControl>
                                    <FormMessage />
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
                                    <FormMessage />
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
                                    <Input className='h-[40px] md:h-[50px]' placeholder={t("tips.email")} type="email" {...field} />
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
                                <FormLabel className='text-[14px] md:text-[18px]'>{t("tips.message")}</FormLabel>
                                <FormControl>
                                    <Textarea
                                        className='h-[100px] md:h-[200px]'
                                        placeholder={t("tips.message")}
                                        rows={5}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="bg-6 cursor-pointer hover:bg-3 py-6 px-18" size={"lg"}>{t("contact.send")}</Button>
                </form>
            </Form>
        </>
    )
}
