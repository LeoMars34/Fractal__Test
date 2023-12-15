import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Modal } from './Modal';
import { sendProfile } from './Api';

export function Step3() {
    const navigate = useNavigate();
    const [count, setCount] = useState();
    const [message, setMessage] = useState(false);
    const [sucsses, setSucsses] = useState(false);
    function back() {
        navigate(-1);
    }
    function countLength() {
        let length = document.getElementById('textarea').value;

        length = length.replace(/\s/g, '').length;
        if (length >= 200) {
            document.getElementById('textarea').value = document
                .getElementById('textarea')
                .value.substring(0, length - 1);
        }
        setCount(length);
    }
    function send() {
        if (count === undefined || count === 0) {
            document.getElementById('textarea').classList.add('red_border');
            alert('Обязательное для заполнение поле');
            return;
        } else {
            document.getElementById('textarea').classList.remove('red_border');
            let formData = new FormData();
            let email = localStorage.getItem('email');
            formData.append('email', email);
            formData.append('phone', localStorage.getItem('phone'));
            formData.append('nickname', localStorage.getItem('nickname'));
            formData.append('name', localStorage.getItem('name'));
            formData.append('sername', localStorage.getItem('sername'));
            formData.append('sex', localStorage.getItem('sex'));
            formData.append('advantages', localStorage.getItem('advantages'));
            formData.append('checkboxes', localStorage.getItem('checkboxes'));
            formData.append('radioValue', localStorage.getItem('radioValue'));
            formData.append('about', document.getElementById('textarea').value);
            // sendProfile(formData).then((response) => {
            //     if (response.error) {
            //         setMessage(true);
            //         setSucsses(false);
            //     } else {
            //         setMessage(true);
            //         setSucsses(true);
            //     }
            // });
            setSucsses(true);
            setTimeout(() => {
                setMessage(true);
            }, 1000);
        }
    }
    return (
        <div className="container__step container__step_step3">
            {message !== false ? <Modal sucsses={sucsses} /> : null}
            <div className="progress">
                <progress
                    className="progress__end"
                    id="my-progress"
                    max="100"
                    value="97"
                ></progress>
                <div className="span">
                    <span
                        className="span__target"
                        style={{ color: ' #5558fa' }}
                    >
                        <ion-icon name="ellipse"></ion-icon>
                        <span className="target__done">&#10004;</span>
                        <p style={{ color: ' #5558fa' }}>1</p>
                    </span>
                    <span
                        className="span__target"
                        style={{ color: ' #5558fa' }}
                    >
                        <ion-icon name="ellipse"></ion-icon>
                        <span className="target__done">&#10004;</span>
                        <p style={{ color: ' #5558fa' }}>2</p>
                    </span>
                    <span
                        className="span__target span__target_middle"
                        style={{ color: ' #5558fa' }}
                    >
                        <ion-icon name="ellipse"></ion-icon>
                        <span className="target">&#8226;</span>
                        <p style={{ color: ' #5558fa' }}>3</p>
                    </span>
                </div>
            </div>
            <div>
                <p>О себе</p>
                <textarea
                    onInput={countLength}
                    id="textarea"
                    cols=""
                    rows=""
                ></textarea>
                <span className="count">{count}</span>
            </div>
            <div className="container__button">
                <button className="buttonMain" onClick={back}>
                    Назад
                </button>
                <button onClick={send} className="buttonMain">
                    Отправить
                </button>
            </div>
        </div>
    );
}
