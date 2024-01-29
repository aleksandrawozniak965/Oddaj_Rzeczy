import supabase from "../../utilis/supabase.js";
import {useState, useEffect} from "react";
import Pagination from "../Pagination.jsx";

export default function Organizations () {
    const [organizations, setOrganizations] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(3);

    useEffect(() => {
        const fetchOrganizations = async () => {
            try {
                const {data, error} = await supabase
                    .from('Organizacje')
                    .select('*')

                if (error) {
                    console.error('Error fetching organizations:', error.message);
                } else {
                    setOrganizations(data);
                }
            } catch (error) {
                console.error('Error fetching organizations:', error.message);
            }
        }

        fetchOrganizations();
    }, []);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = organizations.slice(firstPostIndex, lastPostIndex);

    return (
        <div className="partners_container">
            {currentPosts.map((organization) => (
                <div key={organization.id} className="partner_item">
                    <div className="left_column">
                        <p className="name">{organization.name}</p>
                        <p className="aim">{organization.aim}</p>
                    </div>

                    <div className="right_column">
                        <p className="needs">{organization.needs}</p>
                    </div>
                </div>
            ))}

            <Pagination totalPosts={organizations.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
        </div>
    )
}
