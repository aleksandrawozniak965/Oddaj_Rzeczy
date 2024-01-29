import Button from "../components/Button.jsx";
import HomeNavHeader from "../components/Home/HomeNavHeader.jsx";

export default function Logout() {
    return (
        <>
            <HomeNavHeader />
            <div className="logout_container">
                <div className="logout_title">
                    <h2>Wylogowanie nastąpiło <br/> pomyślnie!</h2>
                    <img src="/src/assets/Decoration.svg" alt='decoration mark'/>
                </div>
            </div>

            <div className="btn_logout_container">
                <Button type="submit" className="btn_logout">Strona główna</Button>
            </div>
        </>
    )
}