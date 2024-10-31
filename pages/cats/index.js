import Navbar from "@/components/Navbar"
import CatCards from "@/components/CatCards"
import { getData } from "@/pages/api/http"

const BASE_URL = `https://api.thecatapi.com/v1/`
export async function getServerSideProps() {
    const urlQuery = `${BASE_URL}breeds`
    const data = await getData(urlQuery)

    return {
        props: { data }, // Pass data to the page as props
    };
}

export default function Cats({ data }) {
    return <>
        <Navbar />
        <main className="container mx-auto p-4">
            <CatCards cats={data} />
        </main>
    </>

}

