import { useEffect, useState } from 'react';
import { IMask } from 'react-imask';
import { useNavigate } from 'react-router-dom';

export function Main() {
    const navigate = useNavigate();
    const [userPhone, setUserPhone] = useState();
    const [userEmail, setUserEmail] = useState();
    useEffect(() => {
        const phoneInput = document.getElementById('phoneNumber');
        const mask = new IMask(phoneInput, {
            mask: '+7(000)000-00-00',
        });
        setUserPhone(localStorage.getItem('phone'));
        setUserEmail(localStorage.getItem('email'));
    }, []);

    function validateEmail(e) {
        let email = e.target;
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (email.value.match(pattern)) {
            email.classList.remove('red_border');
        } else {
            email.classList.add('red_border');
        }
        if (email.value === '') {
            email.classList.remove('red_border');
        }
        setUserEmail(e.target.value);
    }
    function createUser() {
        let number = document.getElementById('phoneNumber');
        let email = document.getElementById('email');
        if (number.value.length !== 16) {
            alert('Неверно заполнены поля');
            number.classList.add('red_border');
            return;
        } else {
            number.classList.remove('red_border');
        }
        if (email.classList.contains('red_border') || email.value === '') {
            alert('Неверно заполнены поля');
            email.classList.add('red_border');
            return;
        } else {
            let phone = document.getElementById('phoneNumber').value;
            let email = document.getElementById('email').value;

            localStorage.setItem('phone', phone);
            localStorage.setItem('email', email);
            navigate('/Step1');
        }
    }

    return (
        <div className="container__main ">
            Номер телефона
            <input
                onInput={(e) => {
                    setUserPhone(e.target.value);
                }}
                value={userPhone}
                className="input__main"
                type="text"
                id="phoneNumber"
                placeholder="+7 999 999-99-99"
            />
            Email
            <input
                onInput={(e) => {
                    validateEmail(e);
                }}
                value={userEmail}
                id="email"
                className="input__main"
                type="text"
                placeholder="webstudio.fractal@example.com"
            />
            <button
                className="buttonMain"
                style={{ marginTop: '30px' }}
                onClick={createUser}
            >
                Начать
            </button>
        </div>
    );
}
