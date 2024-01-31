import Button from "../Button.jsx";
import Foundations from "./Foundations.jsx";
import Organizations from "./Organizations.jsx";
import Collections from "./Collections.jsx";
import {useState} from "react";

export default function HomeWhoWeHelp () {
    const [showFoundations, setShowFoundations] = useState(true);
    const [showOrganizations, setShowOrganizations] = useState(false);
    const [showCollections, setShowCollections] = useState(false);

    function handleToggleFoundations () {
        setShowFoundations(prevState => !prevState);
        setShowOrganizations(false);
        setShowCollections(false);
    }

    function handleToggleOrganizations () {
        setShowOrganizations(prevState => !prevState);
        setShowFoundations(false);
        setShowCollections(false);
    }

    function handleToggleCollections() {
        setShowCollections(prevState => !prevState);
        setShowFoundations(false);
        setShowOrganizations(false);
    }

    return (
            <section id="homeWhoWeHelp" className="home_help_container">
                <div className="title_section">
                    <h3>Komu pomagamy?</h3>
                    <img src="/src/assets/Decoration.svg" alt="decoration mark" />
                </div>

                <div className="btn_help_container">
                    <Button className="btn_help" onClick={handleToggleFoundations}>Fundacjom</Button>
                    <Button className="btn_help" onClick={handleToggleOrganizations}>Organizacjom <br/> pozarządowym</Button>
                    <Button className="btn_help" onClick={handleToggleCollections}>Lokalnym <br/> zbiórką</Button>
                </div>

                <div className="text_section">
                    <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z <br/>
                        którymi współpracujemy. Możesz sprawdzić czym się zajmują, <br/>
                        komu pomagają i czego potrzebują.</p>
                </div>
            {showFoundations && <Foundations />}
            {showOrganizations && <Organizations />}
            {showCollections && <Collections />}
            </section>
    )
}