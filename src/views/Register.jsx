import Button from "../components/Button.jsx";
import HomeNavHeader from "../components/Home/HomeNavHeader.jsx";

export default function Register() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <HomeNavHeader />
            <div className="register_container">
                <div className="register_title">
                    <h2>Załóż konto</h2>
                    <img src="/src/assets/Decoration.svg" alt='decoration mark'/>
                </div>

                <div className="register_form">
                    <form onSubmit={handleSubmit}>
                        <div className="input_group">
                            <label>Email:</label>
                            <input
                                className="input_field " />
                        </div>

                        <div className="input_group">
                            <label>Hasło</label>
                            <input
                                className="input_field "
                                type="password" />
                        </div>

                        <div className="input_group">
                            <label>Powtórz hasło</label>
                            <input
                                className="input_field "
                                type="password" />
                        </div>

                        <div className="btn_register_login_container">
                            <Button type="submit" className="btn_register_login">Załóż konto</Button>
                            <Button type="submit" className="btn_register_login">Zaloguj się</Button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}