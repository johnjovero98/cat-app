import Image from "next/image"

export default function HeroBanner() {
    return <div class="hero bg-white min-h-screen">
        <div class="hero-content flex-col lg:flex-row">
            <Image
                src="/img/bongo-cat.gif"
                width={500}
                height={500}
                className="m-8"
            />
            <div>
                <h2 class="text-5xl font-bold">Purrfection Awaits!</h2>
                <h2 class="text-4xl font-bold my-4">Discover everything about the internet's favourite critter</h2>
                <p class="my-4 max-w-lg">
                    Welcome to the ultimate cat lover’s paradise! Join our community of cat enthusiasts and discover a world made just for whiskers, purrs, and happy paws!
                </p>
                <a class="btn btn-primary" href="/cats">See more cats</a>
            </div>
        </div>
    </div>
}