import supabase from "/src/utilis/supabase.js";
import {useEffect, useState} from "react";
import Pagination from "../Pagination.jsx";

export default function Foundations() {
    const [foundations, setFoundations] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage= 3;

    useEffect(() => {
        const fetchFoundations = async () => {
            try {
                const {data, error} = await supabase
                    .from('Fundacje')
                    .select('*');

                if (error) {
                    console.error('Error fetching foundations:', error.message);
                } else {
                    setFoundations(data);
                }
            } catch (error) {
                console.error('Error fetching foundations:', error.message);
            }
        }

        fetchFoundations();
    }, []);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = foundations.slice(firstPostIndex, lastPostIndex);

    return (
        <div className="partners_container">
            {currentPosts.map((foundation) => (
                <div key={foundation.id} className="partner_item">
                    <div className="left_column">
                        <p className="name">{foundation.name}</p>
                        <p className="aim">{foundation.aim}</p>
                    </div>

                    <div className="right_column">
                        <p className="needs">{foundation.needs}</p>
                    </div>
                </div>
            ))}

            <Pagination totalPosts={foundations.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage}/>
        </div>
    )
}