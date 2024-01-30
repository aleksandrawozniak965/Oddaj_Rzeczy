import Button from "../components/Button.jsx";
import HomeNavHeader from "../components/Home/HomeNavHeader.jsx";
import {useState} from "react";

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
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

        // Walidacja powtórzenia hasła
        if (password !== confirmPassword) {
            isValid = false;
            tempErrors["confirmPassword"] = "Hasła nie są takie same.";
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
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="input_field " />
                            {errors.email && <div className="error">{errors.email}</div>}
                        </div>

                        <div className="input_group">
                            <label>Hasło</label>
                            <input
                                className="input_field "
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errors.password && <div className="error">{errors.password}</div>}
                        </div>

                        <div className="input_group">
                            <label>Powtórz hasło</label>
                            <input
                                className="input_field "
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
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