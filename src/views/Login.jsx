import Button from "../components/Button.jsx";
import HomeNavHeader from "../components/Home/HomeNavHeader.jsx";
import {useState} from "react";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        let isValid = true;

        if (!email) {
            isValid = false;
            tempErrors["email"] = "Proszę wpisać email.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            isValid = false;
            tempErrors["email"] = "Email jest nieprawidłowy.";
        }

        if (!password) {
            isValid = false;
            tempErrors["password"] = "Proszę wpisać hasło.";
        } else if (password.length < 6) {
            isValid = false;
            tempErrors["password"] = "Hasło musi mieć conajmniej 6 znaków.";
        }

        setErrors(tempErrors);
        return isValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Formularz przesłany:', { email, password });
        }
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
                                type="email"
                                className="input_field"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <div className="error">{errors.email}</div>}
                        </div>

                        <div className="input_group">
                            <label>Hasło</label>
                            <input
                                type="password"
                                className="input_field"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errors.password && <div className="error">{errors.password}</div>}
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