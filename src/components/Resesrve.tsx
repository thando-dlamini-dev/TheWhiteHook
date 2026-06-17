import { useState } from "react";
import {ArrowDown} from "lucide-react";

const Reserve = () => {
    interface Selection{
        count: number;
        date: string;
        time: string;
    }

    // const selections = {
    //     dates: [
    //         ""
    //     ]
    // }

    const [ reservationData, ] = useState<Selection>({
        count: 1,
        date: "",
        time: "",
    })

    return(
        <section className={`min-h-screen bg-black flex flex-col items-center justify-start py-20 gap-20`}>
            <h1 className={`text-5xl text-accent font-roxale-story-regular`}>Make A Reservation</h1>
            <p className={`text-lg text-neutral-700`}></p>
            <div className={`flex w-full items-center justify-between lg:px-30`}>
                <div className={`flex lg:flex-row flex-col overflow-clip w-1/3 h-full`}>
                    <img src="/photo-1502998070258-dc1338445ac2.avif" className={`object-cover h-full`} alt=""/>
                </div>
                <div className={`text-white flex flex-col items-center justify-start  w-2/3 h-full gap-10`}>
                    <div className={`w-fit h-fit flex items-start justify-between gap-15 `}>
                        {reservationData.count === 1 ? `${reservationData.count} Person` : `${reservationData.count === 0 ? "Select 1 or more" : `${reservationData.count} People`}`}
                        <ArrowDown/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reserve