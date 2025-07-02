'use client'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import Image from 'next/image';
export default function CaseModal({ item, onClose }: { item: any, onClose: any }) {
    return (
        <Dialog open={!!item} onOpenChange={onClose}>
            <DialogContent className="w-full md:w-[60vw] max-h-[100vh] p-0 bg-black">
                <DialogTitle className="sr-only"></DialogTitle>
                <DialogDescription className="sr-only"></DialogDescription>

                <div className="w-full h-full overflow-hidden">
                    {item.type === 'video' ? (
                        <video controls autoPlay className="w-full h-auto">
                            <source src={item.src} type="video/mp4" />
                        </video>
                    ) : (
                        <Image
                            width={1800}
                            height={1800}
                            src={item.src}
                            alt={item.title}
                            className="w-full h-auto object-contain"
                        />
                    )}
                </div>
            </DialogContent>
        </Dialog>
    )
}
