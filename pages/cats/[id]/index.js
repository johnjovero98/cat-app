import Navbar from "@/components/Navbar";
import CatDetails from "@/components/CatDetails";
import Footer from "@/components/footer";
import { getData } from "@/pages/api/http";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";


export default function CatDetailPage() {
    const [catDetails, setCatDetails] = useState({});
    const router = useRouter();
    const postID = router.query.id;
    
    const BASE_URL = `https://api.thecatapi.com/v1/`;
    useEffect(() => {
        const getCatDetails = async () => {
            if (postID) { // Make sure postID is defined before fetching
                const urlQuery = `${BASE_URL}breeds/${postID}`;
                const catDetails = await getData(urlQuery);
                setCatDetails(catDetails);
            }
        };
        getCatDetails();
    }, [postID]); // Dependency array to run the effect only when postID changes

    return (
        <>
            <Navbar />
            <main className="container mx-auto p-8">
                <CatDetails details={catDetails} />
            </main>
            <Footer/>
        </>
    );
}
