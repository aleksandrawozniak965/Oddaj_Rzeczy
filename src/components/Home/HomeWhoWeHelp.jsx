import Button from "../Button.jsx";
import {useState} from "react";
import Partners from "./Partners.jsx";

export default function HomeWhoWeHelp () {
    const [activeSection, setActiveSection] = useState('foundations');

    function handleToggleSection (section) {
        setActiveSection(section)
    }

    return (
            <section id="homeWhoWeHelp" className="home_help_container">
                <div className="title_section">
                    <h3>Komu pomagamy?</h3>
                    <img src="/src/assets/Decoration.svg" alt="decoration mark" />
                </div>

                <div className="btn_help_container">
                    <Button className="btn_help" onClick={() => handleToggleSection('foundations')}>Fundacjom</Button>
                    <Button className="btn_help" onClick={() => handleToggleSection('organizations')}>Organizacjom <br/> pozarządowym</Button>
                    <Button className="btn_help" onClick={() => handleToggleSection('collections')}>Lokalnym <br/> zbiórką</Button>
                </div>

                <div className="text_section">
                    <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z <br/>
                        którymi współpracujemy. Możesz sprawdzić czym się zajmują, <br/>
                        komu pomagają i czego potrzebują.</p>
                </div>
            {activeSection === 'foundations' && <Partners type='Fundacje' />}
            {activeSection === 'organizations' && <Partners type='Organizacje' />}
            {activeSection === 'collections' && <Partners type='Zbiórki'/>}
            </section>
    )
}