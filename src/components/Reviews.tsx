import {FaStar} from "react-icons/fa";

const Reviews = () => {
    interface Review {
        name: string;
        description: string;
        origin: string;
        rating: number;
        color: string;
    }

    const reviews: Review[] = [
        {
            name: "Anna Rodriguez",
            description: "Food here is absolutely outstanding! Every dish bursts with so much flavor and authenticity. Friendly staff, great food, and exceptional service makes dining here an unforgettable experience. Highly recommend!",
            origin: "Google Reviews",
            rating: 5,
            color: "bg-yellow-400"
        },{
            name: "David Liu",
            description: "Immaculate, delicious, flavourful. I’m pretty picky with Filipino food (grew up with my parents cooking) but their food makes me feel comforted",
            origin: "yelp",
            rating: 4,
            color: "bg-blue-400"
        },{
            name: "David Liu",
            description: "The food was horrible, The chicken was barely cooked",
            origin: "yelp",
            rating: 1,
            color: "bg-green-400"
        },{
            name: "Patrick McGhee",
            description: "I got salmonella from their sushi",
            origin: "Google Reviews",
            rating: 0,
            color: "bg-pink-400"
        }
    ]

    return(
        <section className="h-screen flex justify-start items-center flex-col py-20">
            <h1 className={`text-6xl font-roxale-story-regular font-bold pb-20`}>What Our Customers Say</h1>
            <div className={`w-full h-full lg:grid lg:grid-cols-4 lg:gap-5 px-20 `}>
                {reviews.map((review, index) => (<div
                    key={index}
                    className={`w-full bg-neutral-400 rounded-2xl h-fit flex flex-col items-start justify-start gap-5`}>
                    <div className={`w-full flex items-center justify-start h-fit py-3`}>
                        {
                            <FaStar/>
                        }
                        <h2 className={`size-10 flex items-center justify-center font-bold text-neutral-800 rounded-full mx-4 ${review.color}`}>{review.name.charAt(0).toUpperCase()}</h2>
                        <h2>{review.name}</h2>
                    </div>
                </div>))}
            </div>
        </section>
    )
}

export default Reviews