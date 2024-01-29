import Button from "../components/Button.jsx";
import HomeNavHeader from "../components/Home/HomeNavHeader.jsx";

export default function Login() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <HomeNavHeader />
            <div className="login_container">
                <div className="login_title">
                    <h2>Zaloguj się</h2>
                    <img src="/src/assets/Decoration.svg" alt='decoration mark'/>
                </div>

                <div className="login_form">
                    <form onSubmit={handleSubmit}>
                        <div className="input_group">
                            <label>Email</label>
                            <input
                                className="input_field " />
                        </div>

                        <div className="input_group">
                            <label>Hasło</label>
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