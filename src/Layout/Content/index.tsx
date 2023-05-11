import React from "react";
import TextPart from "../../components/TextPart";
import Slider from "../../components/Slider";
import sweatpants from "../../assets/images/1.png";
import sweatshirt from "../../assets/images/2.png";

const Content = () => {
    return (
        <div className='product product-detail'>
            <TextPart />
            <Slider
                products={[
                    {
                        src: sweatpants,
                        alt: "Image 1",
                        name: "Organic Skinny High Waist Raw",
                        price: "€36.95",
                        colors: ["#A6CC99", "#CC9999", "#ff0000", "#CB99CC"],
                    },
                    {
                        src: sweatshirt,
                        alt: "Image 2",
                        name: "Organic Skinny High Waist Jeans",
                        price: "€33.95",
                        colors: ["#A6CC99", "#CC9999", "#ff0000", "#CB99CC", "#0000ff"],
                    },
                    {
                        src: sweatpants,
                        alt: "Image 3",
                        name: "Organic Skinny High Waist Jeans",
                        price: "€33.95",
                        colors: ["#A6CC99", "#CC9999", "#CB99CC", "#0000ff"],
                    },
                    {
                        src: sweatshirt,
                        alt: "Image 4",
                        name: "Organic Skinny High Waist",
                        price: "€33.95",
                        colors: ["#A6CC99", "#ff0000", "#CB99CC", "#0000ff"],
                    },
                    {
                        src: sweatpants,
                        alt: "Image 5",

                        name: "Organic Skinny High Waist Raw",
                        price: "€33.95",
                        colors: ["#A6CC99", "#CB99CC", "#0000ff"],
                    },
                    {
                        src: sweatshirt,
                        alt: "Image 6",
                        name: "Organic Skinny High Waist Raw",
                        price: "€33.95",
                        colors: ["#A6CC99", "#CC9999", "#ff0000"],
                    },
                ]}
            />
        </div>
    );
};

export default Content;
