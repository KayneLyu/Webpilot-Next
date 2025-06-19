export default function Email() {
    const email = "sales@jinjiutech.com";
    const subject = "Business Collaboration Inquiry";
    const body = `Dear Team,
    
    I am interested in learning more about your products and potential collaboration opportunities. Please let me know how we can proceed.
    
    Best regards,
    `;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return (
        <>
            <div>
                <a href={mailtoLink} className="cursor-pointer underline font-bold">sales@jinjiutech.com</a>
            </div>
        </>
    )
}
