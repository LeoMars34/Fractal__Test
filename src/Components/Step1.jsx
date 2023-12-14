import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Step1() {
    const navigate = useNavigate();
    const [nickname, setNikname] = useState();
    const [name, setName] = useState();
    const [sername, setSername] = useState();
    const [sex, setSex] = useState();

    useEffect(() => {
        setNikname(localStorage.getItem('nickname'));
        setName(localStorage.getItem('name'));
        setSername(localStorage.getItem('sername'));
        setSex(localStorage.getItem('sex'));
    }, []);
    function navigateToStep2() {
        let inputs = document.querySelectorAll('.input__step');
        for (let i = 0; i < inputs.length; i++) {
            if (
                inputs[i].value === '' ||
                inputs[i].classList.contains('red_border')
            ) {
                alert('Неверно заполнены поля');
                inputs[i].classList.add('red_border');
                return;
            } else {
                inputs[i].classList.remove('red_border');
            }
        }
        let nickname = document.getElementById('nickname').value;
        let name = document.getElementById('name').value;
        let sername = document.getElementById('sername').value;
        let sex = document.getElementById('sex').value;
        localStorage.setItem('nickname', nickname);
        localStorage.setItem('name', name);
        localStorage.setItem('sername', sername);
        localStorage.setItem('sex', sex);
        navigate('/Step2');
    }
    function back() {
        navigate(-1);
    }
    function validateNickName(e) {
        let nickName = e.target;
        let pattern = /^[a-zA-Zа-яёА-ЯЁ0-9]{1,30}$/;
        if (nickName.value.length >= 30) {
            nickName.value = nickName.value.slice(0, 30);
        }
        if (nickName.value.match(pattern)) {
            nickName.classList.remove('red_border');
        } else {
            nickName.classList.add('red_border');
        }
        if (nickName.value === '') {
            nickName.classList.remove('red_border');
        }
        setNikname(e.target.value);
    }
    function validateName(e) {
        let name = e.target;
        let pattern = /^[a-zA-Zа-яёА-ЯЁ]{1,50}$/;
        if (name.value.length >= 50) {
            name.value = name.value.slice(0, 50);
        }
        if (name.value.match(pattern)) {
            name.classList.remove('red_border');
        } else {
            name.classList.add('red_border');
        }
        if (name.value === '') {
            name.classList.remove('red_border');
        }
        setName(e.target.value);
    }
    function validateSerName(e) {
        let name = e.target;
        let pattern = /^[a-zA-Zа-яёА-ЯЁ]{1,50}$/;
        if (name.value.length >= 50) {
            name.value = name.value.slice(0, 50);
        }
        if (name.value.match(pattern)) {
            name.classList.remove('red_border');
        } else {
            name.classList.add('red_border');
        }
        if (name.value === '') {
            name.classList.remove('red_border');
        }
        setSername(e.target.value);
    }
    function sexChange(e) {
        if (e.target.value) {
            e.target.classList.remove('red_border');
        }
    }

    return (
        <div className="container__step">
            <div className="progress">
                <progress id="my-progress" max="100" value=""></progress>
                <div className="span">
                    <span
                        className="span__target"
                        style={{ color: ' #5558fa' }}
                    >
                        <ion-icon name="ellipse"></ion-icon>
                        <span className="target">&#8226;</span>
                        <p style={{ color: ' #5558fa' }}>1</p>
                    </span>
                    <span className="span__gray">
                        <ion-icon name="ellipse"></ion-icon>
                        <p style={{ textAlign: 'center' }}>2</p>
                    </span>
                    <span className="span__gray">
                        <ion-icon name="ellipse"></ion-icon>
                        <p style={{ textAlign: 'center' }}>3</p>
                    </span>
                </div>
            </div>
            <div className="content">
                Никнейм
                <input
                    onInput={(e) => {
                        validateNickName(e);
                    }}
                    className="input__step"
                    type="text"
                    id="nickname"
                    value={nickname}
                />
                Имя
                <input
                    onInput={(e) => {
                        validateName(e);
                    }}
                    className="input__step"
                    type="text"
                    id="name"
                    value={name}
                />
                Фамилия
                <input
                    onInput={(e) => {
                        validateSerName(e);
                    }}
                    className="input__step"
                    type="text"
                    id="sername"
                    value={sername}
                />
                Пол
                <select
                    id="sex"
                    onChange={(e) => sexChange(e)}
                    className="input__step"
                    onInput={(e) => {
                        setSex(e.target.value);
                    }}
                    name=""
                    value={sex}
                >
                    <option value=""></option>
                    <option value="man">man</option>
                    <option value="woman">woman</option>
                </select>
            </div>
            <div className="container__button">
                <button className="buttonMain" onClick={back}>
                    Назад
                </button>
                <button className="buttonMain" onClick={navigateToStep2}>
                    Далее
                </button>
            </div>
        </div>
    );
}
