import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Modal } from './Modal';

export function Step3() {
    const navigate = useNavigate();
    const [count, setCount] = useState();
    const [message, setMessage] = useState();
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
    function backToMain() {
        setMessage(true);
    }

    return (
        <div className="container__step container__step_step3">
            {message ? <Modal /> : null}
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
            <div className="textArea">
                О себе
                <textarea
                    onInput={countLength}
                    id="textarea"
                    cols="100"
                    rows="10"
                ></textarea>
                <span className="count">{count}</span>
            </div>
            <div className="container__button">
                <button className="buttonMain" onClick={back}>
                    Назад
                </button>
                <button onClick={backToMain} className="buttonMain">
                    Отправить
                </button>
            </div>
        </div>
    );
}
