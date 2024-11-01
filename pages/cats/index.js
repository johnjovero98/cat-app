import Navbar from "@/components/Navbar"
import CatCards from "@/components/CatCards"
import { getData } from "@/pages/api/http"
import Footer from "@/components/footer"

const BASE_URL = `https://api.thecatapi.com/v1/`
export async function getServerSideProps() {
    const urlQuery = `${BASE_URL}breeds`
    const catBreeds = await getData(urlQuery)
    return {
        props: { catBreeds }, // Pass data to the page as props
    };
}

export default function CatBreeds({ catBreeds }) {
    return <>
        <Navbar />
        <main className="container mx-auto p-8">
            <CatCards cats={catBreeds} />
        </main>
        <Footer/>
    </>

}

