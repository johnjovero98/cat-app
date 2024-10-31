import Navbar from "@/components/Navbar"
import { useRouter } from "next/router"

export default function catDetails() {
    const router = useRouter()
    const postID = router.query.id
    console.log(postID)
    return <>
        <Navbar/>
        <main className="container mx-auto">
            <h2>Cat Details</h2>
            <p>Cat ID: {router.query.id}</p>
        </main>
    </>
}