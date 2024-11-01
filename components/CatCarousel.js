import Image from "next/image"

export default function CatCarousel({ catImagesList }) {
    return <>
        <div className="carousel w-full">
            {
                catImagesList.map((image) => {
                    return <div id={image.id} className="carousel-item justify-center w-full">
                        <Image
                            width={500}
                            height={500}
                            quality={50}
                            key={image.id}
                            src={image.url}
                            className="aspect-[4/3] object-contain"
                        />
                    </div>
                })
            }
        </div>
        
        <div className="flex w-full justify-center gap-2 py-2">
            {
                catImagesList.map((image, index) => {
                    return <a key={index} href={`#${image.id}`} className="btn btn-xs">{index + 1}</a>
                })
            }
        </div>
    </>
}

// https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${id} end point