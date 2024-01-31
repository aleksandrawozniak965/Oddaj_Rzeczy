import Button from "../Button.jsx";
import {useNavigate} from "react-router-dom";

export default function HomeBanner () {
    const navigate = useNavigate();

    function goToLoginPage() {
        navigate("/login");
    }

    return (
        <>
            <section className='home'>
                <div className='banner'/>
                <div className='banner-description'>
                    <h1>Zacznij pomagać! <br></br>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img src="/src/assets/Decoration.svg" alt='decoration icon' className='decoration_img'/>
                    <div className='btn_home_banner_container'>
                        <Button className="btn_home_banner" onClick={goToLoginPage}>ODDAJ <br/> RZECZ</Button>
                        <Button className="btn_home_banner" onClick={goToLoginPage}>ZORGANIZUJ ZBIÓRKĘ</Button>
                    </div>
                </div>
            </section>
        </>
    );
}

