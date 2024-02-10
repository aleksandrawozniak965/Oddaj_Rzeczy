import supabase from "/src/utilis/supabase.js";
import {useEffect, useState} from "react";
import Pagination from "../Pagination.jsx";
import PropTypes from "prop-types";

export default function Partners ({type}) {
    const [partners, setPartners] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage= 3;

    useEffect(() => {
        const fetchPartners = async () => {
            try {
                const {data, error} = await supabase
                    .from(type)
                    .select('*')

                if(error) {
                    console.error('Error fetching partners:', error.message);
                } else {
                    setPartners(data);
                }
            } catch (error) {
                console.error('Error fetching partners:', error.message);
            }
        }

        fetchPartners();
    }, [type]);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = partners.slice(firstPostIndex, lastPostIndex);


    return (
        <div className="partners_container">
            {currentPosts.map((partner) => (
                <div key={partner.id} className="partner_item">
                    <div className="left_column">
                        <p className="name">{partner.name}</p>
                        <p className="aim">{partner.aim}</p>
                    </div>

                    <div className="right_column">
                        <p className="needs">{partner.needs}</p>
                    </div>
                </div>
            ))}

            <Pagination totalPosts={partners.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage}/>
        </div>
    )
}

Partners.propTypes = {
    type: PropTypes.string.isRequired,
};