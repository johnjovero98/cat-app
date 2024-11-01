import Image from "next/image"

export default function HeroBanner() {
    return <div className="hero bg-white min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
            <Image
                src="/img/bongo-cat.gif"
                width={500}
                height={500}
                quality={100}
                className="m-8"
                alt="hero banner gif of bongo cat"
            />
            <div>
                <h2 className="text-5xl font-bold">Purrfection Awaits!</h2>
                <h2 className="text-4xl my-4">Discover everything about the internet's favourite critter</h2>
                <p className="my-4 max-w-lg">
                    Join our community of cat enthusiasts and discover a world made just for whiskers, purrs, and happy paws!
                </p>
                <a className="btn btn-primary" href="/cats">See more cats</a>
            </div>
        </div>
    </div>
}


