
import logo1 from "@/assets/ecommerce/logo1.png";
import logo2 from "@/assets/ecommerce/logo2.png";
import logo3 from "@/assets/ecommerce/logo3.png";
import logo4 from "@/assets/ecommerce/logo4.png";
import logo5 from "@/assets/ecommerce/logo5.png";
import logo6 from "@/assets/ecommerce/logo6.png";
import logo7 from "@/assets/ecommerce/logo7.png";
import logo8 from "@/assets/ecommerce/logo8.png";
import logo9 from "@/assets/ecommerce/logo9.png";
import logo10 from "@/assets/ecommerce/logo10.png";
import categorieImg1 from "@/assets/ecommerce/categorie1.png";
import categorieImg2 from "@/assets/ecommerce/categorie2.png";
import categorieImg3 from "@/assets/ecommerce/categorie3.png";
import categorieImg4 from "@/assets/ecommerce/categorie4.png";


const FeatureProduct = () => {

    const images = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10];
    const categoriesArr = [
        { img: categorieImg1, name: "Electronics" },
        { img: categorieImg2, name: "Fashion" },
        { img: categorieImg3, name: "Home" },
        { img: categorieImg4, name: "Sports" },
    ];

    return (
        <>
            <div className="px-4 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="bg-gray-300 rounded-xl p-6 flex flex-col justify-center">
                        <h2 className="uppercase font-semibold">featured brands</h2>
                        <div className="grid grid-cols-5 gap-5 items-center pt-4">
                            {
                                images.map((img, index) => (<img src={img} key={index} className="object-contain" />))
                            }
                        </div>
                    </div>

                    <div className="bg-gray-300 rounded-xl p-6 flex flex-col justify-center">
                        <h2 className="uppercase font-semibold">Top Categories</h2>
                        <div className="grid grid-cols-4 gap-5 items-center pt-4">
                            {
                                categoriesArr.map((item, index) => (
                                    <>
                                        <div className="flex flex-col items-center gap-2">
                                            <img src={item.img} key={index} className="object-contain" />
                                            <p className="font-semibold">{item.name}</p>
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default FeatureProduct