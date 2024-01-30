import {useState} from "react";

export default function HomeContact() {
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const validateForm = (formData) => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.name.trim()) {
            errors.name = "Imię jest wymagane.";
        } else if (formData.name.split(" ").length > 1) {
            errors.name = "Imię powinno być jednym wyrazem.";
        }

        if (!formData.email) {
            errors.email = "Email jest wymagany.";
        } else if (!emailRegex.test(formData.email)) {
            errors.email = "Email jest niepoprawny.";
        }

        if (!formData.message) {
            errors.message = "Wiadomość jest wymagana.";
        } else if (formData.message.length < 120) {
            errors.message = "Wiadomość musi mieć co najmniej 120 znaków.";
        }
        return errors;
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = validateForm(formData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            try {
                const response = await fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    setFormData({name: '', email: '', message: ''});
                    alert('Formularz został wysłany poprawnie.');

                } else {
                    const errorResult = await response.json();
                    console.error(errorResult);
                }
            } catch (error) {
                console.error('Wystąpił błąd przy wysyłaniu formularza:', error);
            }
        }
    };

    return (
        <>
            <section id="homeContact" className="contact">
                <div className="home_contact_container">
                    <form className="home_contact_form" onSubmit={handleSubmit}>
                        <h3>Skontaktuj się z nami</h3>
                        <img src="/src/assets/Decoration.svg" alt="decoration mark"/>
                        <div className="home_contact_name_email">
                            <label>
                                Wpisz swoje imię
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Krzysztof"
                                    value={formData.name}
                                    onChange={handleChange}/>
                                {errors.name && <p className="error">{errors.name}</p> }
                            </label>

                            <label>
                                Wpisz swój mail
                                <input
                                    placeholder="abc@xyz.pl"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}/>
                                {errors.email && <p className="error">{errors.email}</p>}
                            </label>
                        </div>

                        <label className="home_contact_msg">
                            Wpisz swoją wiadomość
                            <textarea
                                name="message"
                                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                />
                            {errors.message && <p className="error">{errors.message}</p>}
                        </label>

                        <div className="btn_home_contact">
                            <button type="submit">Wyślij</button>
                        </div>

                        <footer>
                            <a href='https://www.facebook.com'>
                                <img src="/src/assets/Facebook.svg" alt="facebook-icon" />
                            </a>

                            <a href="'https://www.instagram.com'">
                                <img src="/src/assets/Instagram.svg" alt="instagram-icon" />
                            </a>
                        </footer>
                    </form>
                </div>
            </section>
        </>
    )
}
