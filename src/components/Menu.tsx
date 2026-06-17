import {useState} from "react";
import {BsDash} from "react-icons/bs";
import { motion } from "framer-motion";

const Menu = () => {
    interface MenuItem{
        name: string;
        category: string;
        price: number;
        imgUrl: string;
    }
    const menuCategories :string[] = [
        "All",
        "Appetizers",
        "Main Dishes",
        "Desserts",
        "Drinks"
    ]

    const menuItems: MenuItem[] = [
        {
            name: "Lamb & Veg",
            category: "Appetizers",
            price: 75,
            imgUrl: "/hanxiao-xu-j0b21DkvNzI-unsplash.jpg"
        },{
            name: "PassionFruit Delight",
            category: "Desserts",
            price: 120,
            imgUrl: "/fernando-andrade-LAowPy8tyLo-unsplash.jpg"
        },{
            name: "Grilled Hake",
            category: "Appetizers",
            price: 65,
            imgUrl: "/rodrigo-ortiz-M9v1SoMd3ak-unsplash.jpg"
        },{
            name: "Garlic Butter Shrimp & Prawns",
            category: "Main Dishes",
            price: 350,
            imgUrl: "/photo-1758972572427-fc3d4193bbd2.avif"
        },{
            name: "Mussels & Fries",
            category: "Main Dishes",
            price: 500,
            imgUrl: "/photo-1715249792920-bfe1a3b9d79e.avif"
        },{
            name: "Shell-Baked Shrimp Pie",
            category: "Main Dishes",
            price: 200,
            imgUrl: "/photo-1761314037182-8ea3363cf3a3.avif"
        },{
            name: "Grilled Hake",
            category: "Appetizers",
            price: 65,
            imgUrl: "/rodrigo-ortiz-M9v1SoMd3ak-unsplash.jpg"
        },{
            name: "Garlic Butter Shrimp & Prawns",
            category: "Main Dishes",
            price: 350,
            imgUrl: "/photo-1758972572427-fc3d4193bbd2.avif"
        },{
            name: "Mussels & Fries",
            category: "Main Dishes",
            price: 500,
            imgUrl: "/photo-1715249792920-bfe1a3b9d79e.avif"
        },{
            name: "Shell-Baked Shrimp Pie",
            category: "Main Dishes",
            price: 200,
            imgUrl: "/photo-1761314037182-8ea3363cf3a3.avif"
        }
    ]

    const [ filteredMenuItems, setFilteredMenuItems ] = useState<MenuItem[]>(menuItems);
    const [ selectedMenuCategory, setSelectedMenuCategory ] = useState<string>("All");
    const [ hoveredMenuItem, setHoveredMenuItem ] = useState<string>("");

    const filterMenu = (category: string) => {
        setSelectedMenuCategory(category);
        if(selectedMenuCategory === "All"){
            setFilteredMenuItems(menuItems);
        }
        else{
            setFilteredMenuItems(menuItems.filter((menuItem) => menuItem.category === selectedMenuCategory));
        }
    }

    return (
        <section id="menu" className={`min-h-screen pb-50 pt-0 flex items-center justify-start flex-col py-20`}>
            <h1 className={`text-6xl text-black font-extrabold font-roxale-story-regular`}>Our Menu</h1>
            <p className={`lg:w-1/3 text-center pt-5 text-neutral-500`}>Experience a symphony of flavors with our carefully curated menu. Each dish is designed to delight your senses and leave.</p>
            <div className={`pt-30 px-5 lg:w-full lg:px-30 h-full flex lg:flex-row flex-col lg:items-start items-center justify-between lg:gap-0 gap-15`}>
                <motion.div initial={{opacity: 0, x: -100}} whileInView={{opacity:1.5, x:0}} transition={{duration: 1, ease: "easeInOut"}} className={`lg:w-1/4 w-full h-full flex-col lg:items-start items-center justify-start gap-5`}>
                    <h2 className={`text-2xl text-accent pb-20 `}>Categories</h2>
                    <div className={`overflow-hidden px-30 lg:px-0 flex flex-col items-start justify-start gap-5`}>
                        {menuCategories.map((menuCat, index) => (
                            <span onClick={() => filterMenu(menuCat)} className={`relative cursor-pointer ${selectedMenuCategory === menuCat ? "translate-x-10 text-accent" : "text-neutral-700"} hover:scale-105 transition-all duration-300 ease-in-out font-roxale-story-regular font-bold text-4xl`} key={index}>
                            {menuCat}
                                <BsDash className={`text-2xl absolute top-1/5 left-[-20px]`}/>
                        </span>
                        ))}

                    </div>
                </motion.div>
                <div className={`lg:w-3/4 min-h-full lg:grid lg:grid-cols-3 gap-5 `}>
                    {(selectedMenuCategory === "All" ? menuItems : menuItems.filter((menuItem) => menuItem.category === selectedMenuCategory)).map((menuItem, index) => (
                        <div onMouseEnter={() => setHoveredMenuItem(menuItem.name)} onMouseLeave={() => setHoveredMenuItem("")} key={index} className={`lg:w-fit w-full h-fit flex flex-col items-start justify-start gap-5`}>
                            <div className={`overflow-hidden h-70 rounded-3xl flex flex-col items-center justify-center`}>
                                <img src={menuItem.imgUrl} alt={""} className={`${hoveredMenuItem === menuItem.name ? "scale-115 opacity-100 rotate-0" : "scale-100 opacity-95"} transition-all duration-300 ease-in-out`}/>
                            </div>
                            <div className={`text-lg font-semibold flex items-center justify-between w-full h-fit pr-10`}>
                                <h3 >{menuItem.name}</h3>
                                <span className={`text-accent`}>{`R${menuItem.price}`}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Menu