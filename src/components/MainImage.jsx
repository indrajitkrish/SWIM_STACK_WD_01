import img from "./product-main-img.jpeg";

export function MainImage()
{
    return(
        <section className="relative">
            <img className="w-full h-2/5" src={img} alt="main-content"></img>
            <div className="absolute top-1/2 left-38 w-1/2 text-center items-center">
                <h1 className="text-blue-600 text-5xl font-black pb-5">A meal kit build for your lifestyle</h1>
                <p className="p-2 bg-orange-500 text-white w-28 ml-80 self-center font-semibold">Get Started</p>
            </div>
        </section>
    )
}