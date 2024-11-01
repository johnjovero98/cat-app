import Image from "next/image"


export default function CatCards({ cats }) {
    return <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {cats.map((cat) => {
            return <div key={cat.id} className="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <Image
                        width={500}
                        height={500}
                        quality={75}
                        className="aspect-[4/3] object-cover object-top"
                        src={
                            !cat.hasOwnProperty('reference_image_id') || cat.reference_image_id === 'O3btzLlsO' || cat.reference_image_id === '4RzEwvyzz' || cat.reference_image_id === 'DbwiefiaY'
                                ?
                                "/img/placeholder.png"
                                :
                                `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`}

                        alt={`picture of a cat breed called ${cat.name}`} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{cat.name}</h2>
                    <p><span className="font-bold">Temperament: </span> {cat.temperament}</p>
                    <div className="card-actions justify-end">
                        <a href={`cats/${cat.id}`} className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        })}
    </div>
}

