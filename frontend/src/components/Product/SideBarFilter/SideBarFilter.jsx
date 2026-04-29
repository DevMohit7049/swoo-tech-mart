import { useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import envato from '@/assets/BrandLogo/envato.png';
import codecanyon from '@/assets/BrandLogo/codecanyon.png';
import microlancer from '@/assets/BrandLogo/microlancer.png';
import photodune from '@/assets/BrandLogo/photodune.png';
import videohive from '@/assets/BrandLogo/videohive.png';
import { useSelector } from "react-redux";
import { selectCatalogProducts } from "@/features/products/productSelectors";

const SideBarFilter = ({ products, setFilteredProducts }) => {

    // const products = useSelector(selectCatalogProducts);


    const brandArr = [
        { name: "envato", logo: envato },
        { name: "codecanyon", logo: codecanyon },
        { name: "microlancer", logo: microlancer },
        { name: "photodune", logo: photodune },
        { name: "videohive", logo: videohive },
    ];

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(100000);


    useEffect(() => {
        if (!products?.length) return;

        const timer = setTimeout(() => {
            const filtered = products.filter((item) => {
                const price = Number(item.price.replace(/[^0-9.]/g, ""));
                return price >= minPrice && price <= maxPrice;
            });
            setFilteredProducts(filtered);
        }, 200);
        return () => clearTimeout(timer);

    }, [products, minPrice, maxPrice]);



    return (
        <>
            <div
                className="rounded-xl col-span-1 row-span-2 h-full px-5 py-6 " style={{ backgroundColor: "#EEEFF6" }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input type="text" placeholder="price" className="p-2 rounded w-full" />
                    <input type="text" placeholder="range" className="p-2 rounded w-full" />
                    <input type="text" placeholder="color" className="p-2 rounded w-full" />
                    <input type="text" placeholder="size" className="p-2 rounded w-full" />
                </div>

                <div className="h-auto mt-4">
                    <div className="flex flex-col gap-5">
                        <h2 className="font-semibold">By Brand</h2>
                        <input type="text" placeholder="search" className="p-2 rounded w-full" />
                    </div>
                </div>

                <div className="flex flex-col gap-2 py-4">
                    {
                        brandArr.map((item, index) => (
                            <div key={item.name + index}>
                                <div className="flex gap-4">
                                    <input type="radio" />
                                    <img src={item.logo} alt="" className="h-6" />
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="border border-gray-300 w-full"></div>

                <div className="h-auto mt-4">
                    <div className="flex flex-col gap-5">
                        <h2 className="font-semibold">By Price</h2>
                        <div className="relative">

                            <Slider
                                range
                                min={0}
                                max={100000}
                                value={[minPrice, maxPrice]}
                                onChange={(value) => {
                                    setMinPrice(value[0]);
                                    setMaxPrice(value[1]);
                                }}

                                styles={{
                                    track: { backgroundColor: "#1ABA1A" },
                                    rail: { backgroundColor: "#ddd" },
                                    handle: { borderColor: "#1ABA1A", backgroundColor: "#1ABA1A" }
                                }}
                            />
                        </div>



                        <div className="flex justify-between mt-4 text-sm">
                            <span>₹{minPrice}</span>
                            <span>₹{maxPrice}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SideBarFilter;