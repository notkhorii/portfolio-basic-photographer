import "./carousel.css";

export default function Carousel(){
    const images = ["/content/image(5).jpg", "/content/image(4).jpg", "/content/image(3).jpg", "/content/image(2).jpg", "/content/image(1).jpg", "/content/image.jpg"]
    return(
            <>
                <div className="grid gap-4 grid-cols-3 grid-rows-1 relative ">
                    {images.map((image, index) => (
                        <img key={index} src={image} alt="" />
                    ))}

                    <div className="absolute inset-0 bg-accent bg-opacity-50"></div>
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <h1 className="text-5xl font-bold text-white w-1/4 text-center">Explore my curated collection of photographs</h1>
                        <p className="py-6 w-1/3 text-center text-white">
                            Welcome to my portfolio, where every photograph tells a story. Each image captures a moment, a feeling, and a unique perspective that goes beyond the ordinary. Explore my work and discover the beauty in every frame. Highlighting the beauty and individuality of every subject.  My passion lies in highlighting the beauty and individuality of every subject, creating images that resonate, inspire, and stand the test of time. Let my lens bring your story to life.
                        </p>
                        <div>
                            <button className="btn btn-outline btn-secondary mx-2">See More</button>
                        </div>
                    </div>
                </div>
            </>
    )
}