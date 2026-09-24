
const Reserve = () => {

    return(
        <section className={`h-screen bg-accen flex flex-col items-center justify-start pt-20 gap-10`}>
            <h1 className={`text-5xl text-accent font-roxale-story-regular`}>Make A Reservation</h1>
            <p className={`text-lg text-neutral-700`}></p>
            <div className={`flex w-full h-full items-center justify-between lg:px-20`}>
                <div className={`flex lg:flex-row flex-col overflow-clip w-1/2 h-full bg-black`}>
                    <img src="/photo-1747856618531-dac44b50791f.avif" className={`object-cover w-full h-full`} alt=""/>
                </div>
                <div className={`text-white flex flex-col items-center justify-start  w-2/3 h-full gap-10`}>

                </div>
            </div>
        </section>
    )
}

export default Reserve