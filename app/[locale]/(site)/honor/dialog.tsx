'use client'
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import Image from 'next/image';
export default function CaseModal({ item, onClose }: { item: string, onClose: any }) {
    return (
        <Dialog open={!!item} onOpenChange={onClose}>
            <DialogContent className="md:max-w-[900px] max-h-[90vh] p-0 bg-transparent ">
                <DialogTitle className="sr-only"></DialogTitle>
                <DialogDescription className="sr-only"></DialogDescription>

                <div className="w-full h-full overflow-hidden">
                    <Image
                        width={1800}
                        height={1800}
                        src={item}
                        alt="automatic air ring company"
                        className="w-full h-full object-contain"
                    />
                </div>
            </DialogContent>
        </Dialog>
    )
}
