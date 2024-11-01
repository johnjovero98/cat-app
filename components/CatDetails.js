import CatCarousel from "./CatCarousel"

export default function CatDetails({ details }) {
    return <>
        <div className="grid md:grid-cols-2 gap-8">
            <div >
                <CatCarousel /> 
            </div>

            <div>
                <h2 className="text-3xl font-bold mb-4">{details.name}</h2>
                <p className="mb-4" >{details.description}</p>
                <p className="mb-4" > <span className="font-bold">Lifespan:</span> {details.life_span} years old</p>
                <p className="mb-4" > <span className="font-bold">Origin:</span> {details.origin}</p>

                <div className="mb-4">
                    <p className="font-bold">Adaptability:</p>
                    <input type="range" min={0} max="5" value={details.adaptability} className="range" step="1" />
                    <div className="flex w-full justify-between px-2 text-xs">
                        <span>Not Adaptable</span>
                        <span>Very Adaptable</span>
                    </div>
                </div>

                
                <div className="mb-4">
                    <p className="font-bold">Affection Level:</p>
                    <input type="range" min={0} max="5" value={details.affection_level} className="range" step="1" />
                    <div className="flex w-full justify-between px-2 text-xs">
                        <span>Will ignore you most of the time</span>
                        <span>Will cuddle you lots</span>
                    </div>
                </div>

                
                <div className="mb-4">
                    <p className="font-bold">Child Friendliness:</p>
                    <input type="range" min={0} max="5" value={details.child_friendly} className="range" step="1" />
                    <div className="flex w-full justify-between px-2 text-xs">
                        <span>Will scratch your child</span>
                        <span>Will play with your child</span>
                    </div>
                </div>

                
                <div className="mb-4">
                    <p className="font-bold">Dog Friendliness</p>
                    <input type="range" min={0} max="5" value={details.dog_friendly} className="range" step="1" />
                    <div className="flex w-full justify-between px-2 text-xs">
                        <span>Does not tolerate puppers</span>
                        <span>Does well around puppers</span>
                    </div>
                </div>

                
                <div className="mb-4">
                    <p className="font-bold">Stranger Friendliness:</p>
                    <input type="range" min={0} max="5" value={details.stranger_friendly} className="range" step="1" />
                    <div className="flex w-full justify-between px-2 text-xs">
                        <span>Will hide from strangers</span>
                        <span>Will say hello to strangers</span>
                    </div>
                </div>
            </div>
        </div>
    </>
}   