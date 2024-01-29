import {useEffect, useState} from "react";
import supabase from "../../utilis/supabase.js";

export default function Collections () {
    const [collections, setCollections] = useState([]);

    useEffect(() => {
        const fetchCollections = async () => {
            try {
                const {data, error} = await supabase
                    .from('Zbiórki')
                    .select('*')

                if (error) {
                    console.error('Error fetching collections:', error.message);
                } else {
                    setCollections(data)
                }
            } catch (error) {
                console.error('Error fetching collections:', error.message);
            }
        }

        fetchCollections();
    }, []);

    return (
        <div className="partners_container">
            {collections.map((collection) => (
                <div key={collection.id} className="partner_item">
                    <div className="left_column">
                        <p className="name">{collection.name}</p>
                        <p className="aim">{collection.aim}</p>
                    </div>

                    <div className="right_column">
                        <p className="needs">{collection.needs}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}