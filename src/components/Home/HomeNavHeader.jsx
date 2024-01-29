import {useNavigate} from "react-router-dom";
import { scroller } from 'react-scroll';
import Button from "../Button.jsx";

export default function HomeNavHeader() {
    const navigate = useNavigate();

    function goToRegisterPage(){
        navigate("/register");
    }

    function goToLoginPage() {
        navigate("/login");
    }

    function handleButtonClick (elementId) {
        scroller.scrollTo(elementId, {
            duration: 1400,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    }

    return (
        <>
            <section className="btn_menu_container">
                <div>
                    <Button className="btn_registration" onClick={goToLoginPage} >Zaloguj</Button>
                    <Button className="btn_registration" onClick={goToRegisterPage}>Załóż konto</Button>
                </div>

                <div>
                    <Button className="btn_menu">Start</Button>
                    <Button className="btn_menu" onClick={() => handleButtonClick('homeSimpleSteps')}>O co chodzi?</Button>
                    <Button className="btn_menu" onClick={() => handleButtonClick('homeAboutUs')}>O nas</Button>
                    <Button className="btn_menu" onClick={() => handleButtonClick('homeWhoWeHelp')}>Fundacja i organizacje</Button>
                    <Button className="btn_menu" onClick={() => handleButtonClick('homeContact')}>Kontakt</Button>
                </div>
            </section>
        </>
    )
}