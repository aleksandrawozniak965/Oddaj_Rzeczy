import Button from "../Button.jsx";
import {useNavigate} from "react-router-dom";

export default function HomeSimpleSteps () {
    const navigate = useNavigate();

    function goToLoginPage() {
        navigate("/login");
    }

    return (
        <>
            <section id="homeSimpleSteps" className="simple_step_container">
                <div className="title">
                    <p>Wystarczą 4 proste kroki</p>
                    <img src="/src/assets/Decoration.svg" alt="decoration mark"/>
                </div>

                <div className="icons_container">
                    <div className="icon">
                        <img src="/src/assets/Icon-1.svg" alt="tshirt icon" />
                        <p className="step_name">Wybierz rzeczy</p>
                        <div className="border"></div>
                        <p className="step_text">ubrania, zabawki,<br/> sprzęt i inne</p>
                    </div>

                    <div className="icon">
                        <img src="/src/assets/Icon-2.svg" alt="bag icon" />
                        <p className="step_name">Spakuj je</p>
                        <div className="border"></div>
                        <p className="step_text">skorzystaj z <br/>  worków na śmieci</p>
                    </div>

                    <div className="icon">
                        <img src="/src/assets/Icon-3.svg" alt="magnifier icon" />
                        <p className="step_name">Zdecyduj komu<br/> chcesz pomóc</p>
                        <div className="border"></div>
                        <p className="step_text">wybierz zaufane <br/>  miejsce</p>
                    </div>

                    <div className="icon">
                        <img src="/src/assets/Icon-4.svg" alt="transport icon" />
                        <p className="step_name">Zamów kuriera</p>
                        <div className="border"></div>
                        <p className="step_text">kurier przyjedzie <br/>  w dogodnym terminie</p>
                    </div>
                </div>
            </section>

            <div className="simple_step_btn">
                <Button className="btn_simple_step" onClick={goToLoginPage}>Oddaj <br/> Rzeczy</Button>
            </div>
        </>
    )
}