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
import ReCAPTCHA from 'react-google-recaptcha'

const FormSchema = z.object({
    name: z.string().min(1, { message: '请输入姓名' }),
    email: z.string().email({ message: '请输入有效的邮箱地址' }),
    message: z.string().min(5, { message: '请输入至少5个字的留言内容' }),
})

export default function Letter() {
    const [captchaToken, setCaptchaToken] = useState<string | null>(null)

    // const FormSchema = z.object({
    //     username: z.string().min(2, {
    //         message: "Username must be at least 2 characters.",
    //     }),
    // })

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast("You submitted the following values", {
            description: (
                <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem className='w-[50%]'>
                            <FormLabel>姓名</FormLabel>
                            <FormControl>
                                <Input placeholder="请输入您的姓名" {...field} />
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
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="请输入您的邮箱" type="email" {...field} />
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
                            <FormLabel>Content</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="请填写您的留言内容"
                                    rows={5}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                    onChange={(token:string) => setCaptchaToken(token)}
                    className="mx-auto"
                />

                <Button type="submit" className="bg-6 cursor-pointer" size={"lg"}>提交</Button>
            </form>
        </Form>
    )
}
