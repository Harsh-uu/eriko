"use client"
import React, { useEffect, useState } from "react";
import { GoHeartFill, GoStarFill } from "react-icons/go";
import { motion } from "framer-motion"
import Image from "next/image";
import { Product } from "@/types/productsApiTypings";
type CategoryProps = {
    products: Product[],
    category: string[],
}
function Category({products,category}:CategoryProps) {
    const [activeItem, setActiveItem] = useState("All");
    return (
        <div className=" lg:bg-white">
            <h1 className="font-abril pt-24 text-4xl text-center">Our category</h1>
            <div className="flex lg:gap-5 xl:gap-8  justify-evenly pt-6 pb-10 w-fit mx-auto ">
                {["All",...category].map((item, index) => (
                    <button
                        key={index}
                        className={` relative px-4 py-1 rounded-xl capitalize   `}
                        onClick={() => {
                            setActiveItem(item);
                            // listItems.filter((listItem) => listItem === item);
                        }}
                    >
                    <span className={`transition-colors delay-200 relative ${activeItem===item?" text-white ":" text-black "}  z-50`}>

                        {item}
                    </span>
                        {
                            activeItem === item && <motion.span layoutId="pill" 
                            style={
                                {
                                    borderRadius:99999
                                }
                            }
                            className="absolute inset-0 bg-black  "></motion.span>
                        }

                    </button>
                ))}
            </div>

            <div className="grid grid-cols-3 gap-3 lg:w-[62rem] xl:w-[78rem] mx-auto grid-rows-2">
                {products.map((product) => (
                    <Cards key={product.id} product={product} />
                ))}
            </div>
            
        </div>
    );
}

export default Category;

const Cards = ({ product }:{
    product:Product,
}) => {
    const [clicked, setClicked] = useState(false);
    const [active, setActive] = useState(false)
    const stars=Number(product.rating.rate.toFixed());
    function handleActive(){
        setActive(!active)
    }
    function handleClick() {
        setClicked(!clicked);
    }
    // const [stars,setStars]=useState(0);
    return (
        <div className="max-w-[90%] lg:mx-5 xl:mx-10 shadow-md border-black rounded-xl hover:shadow-xl p-4 mb-10">
            <div className="h-[70%] relative">
                <button onClick={handleClick} className=" w-fit block  ml-auto mr-3 mt-3">
                    <GoHeartFill
                        className={`hover:text-red-600  ${clicked ? "text-red-600" : "text-[#a2a2a2]"
                            }`}
                        
                    />
                </button>
                <Image width={500} height={300}
                    src={product.image}
                    alt={product.title}
                    className=" mx-auto w-[250px] h-[250px] object-scale-down "
                />
            </div>
            <div className="h-[20%]">
                <p className="mt-5 line-clamp-1">{product.title}</p>
                <p className="mt-3">${product.price}</p>
                <p className="mt-3 flex h-7 place-items-center">
                            {
                               
                                  
                               Array(5).fill(0).map((_,index)=>(
                                    <span key={index} onClick={()=>{
                                        
                                    }} className={` ${ index<=stars?" text-[#ffb545] ":" text-[#8e8e91] " } `}>
                                    <GoStarFill   className={`mr-1 `}  onClick={handleActive} />
                                    </span>
                                ))
                            }
                    ({product.rating.count} Review)
                </p>
            </div>
        </div>
    );
};
