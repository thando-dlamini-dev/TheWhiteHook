import {useState} from "react";

const Faq = () => {
    interface Faq{
        title: string;
        description: string;
    }

    const faqs: Faq[] = [
        {
            title: "Do you have hypertension friendly meals",
            description: "At TheWhiteHook we also serve hypertension friendly meals that have the right amount of salt, the healthy type of oil and the correct portions to ensure that you keep your blood pressure low."
        },{
            title: "Are pets allowed at TheWhiteHook?",
            description: "No pets are allowed."
        },{
            title: "What is the dress code at theWhiteHook?",
            description: "TheWhiteHook maintains a smart casual dress code to uphold the elegant ambiance of our restaurant. We recommend business casual attire, but formal wear is also welcome for those seeking a truly luxurious dining."
        },{
            title: "How can I make a reservation?",
            description: "With our booking system, you can make a reservation for any day, number of guests, time and meals likely to be ordered.",
        }
    ]

    const [ activeFaq, setActiveFaq ] = useState<Faq>();

    return (
        <section className={`h-screen flex lg:flex-row flex-col items-center gap-20 justify-center lg:px-40`}>
            <div className={`w-1/3 text-black flex flex-col items-start justify-center gap-10`}>
                <h3 className={`text-accent uppercase text-2xl`}>faq</h3>
                <h1 className={`font-roxale-story-regular font-bold text-5xl`}>Answers For Questions</h1>
            </div>
            <div className={`w-1/2 flex flex-col items-start justify-center gap-10`}>
                {faqs.map((faq, index) => (
                    <div onClick={() => setActiveFaq(faq)} key={index} className={`w-full cursor-pointer h-fit ${activeFaq?.title === faq.title ? "border-b-2" : "border-b-1"} pb-3 border-black`}>
                        <span className={`text-3xl font-roxale-story-regular ${activeFaq?.title === faq.title ? "mb-5 text-accent" : "text-black"}`}>{faq.title}</span>
                        <p className={`transition-all duration-500 ease-in-out ${activeFaq?.title === faq.title ? "text-xl py-5" : "text-[0px] py-0"}`}>{faq.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Faq