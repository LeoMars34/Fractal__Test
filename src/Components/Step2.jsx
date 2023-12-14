import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Step2() {
    const navigate = useNavigate();
    const [checkbox, setCheckbox] = useState([1, 2, 3]);
    const [checkboxOn, setCheckboxOn] = useState(() => {
        if (localStorage.getItem('checkbox')) {
            return localStorage.getItem('checkbox').split(',');
        } else {
            return [];
        }
    });
    const [advantages, setAdvantages] = useState(() => {
        if (localStorage.getItem('advantages')) {
            return localStorage.getItem('advantages').split(',');
        } else {
            return ['', '', ''];
        }
    });

    function navigateToStep3() {
        let advantagesAll = document.querySelectorAll('.input__step');
        let advantagesArray = [];
        for (let i = 0; i < advantagesAll.length; i++) {
            if (advantagesAll[i].value) {
                advantagesArray.push(advantagesAll[i].value);
            }
        }
        localStorage.setItem('advantages', advantagesArray);

        // let checkboxAll = document.querySelectorAll('.checkbox');
        // let checkboxArray = [];
        // for (let i = 0; i < checkboxAll.length; i++) {
        //     if (checkboxAll[i].checked) {
        //         checkboxArray.push(checkboxAll[i].name);
        //     }
        // }
        // setCheckboxOn(checkboxArray);
        // localStorage.setItem('checkbox', checkboxArray);
        navigate('/Step3');
    }
    function back() {
        navigate(-1);
    }
    function addAdvantages() {
        setAdvantages((prevState) => [...prevState, '']);
    }
    function btnDelete(e) {
        e.currentTarget.parentNode.remove();
    }
    function changeCheckBox(e, i) {
        console.log(e);
        console.log(i);
        if (e.target.checked && !checkboxOn.includes(i)) {
            setCheckboxOn((prevState) => {
                const newState = [...prevState, i];
                return newState;
            });
        } else if (!e.target.checked && checkboxOn.includes(i)) {
            setCheckboxOn((prevState) => {
                const index = prevState.indexOf(i);
                const newState = prevState.splice(index, 1);
                return newState;
            });
        }
        console.log(checkboxOn);
        localStorage.setItem('checkbox', checkboxOn);
    }

    return (
        <div className="container__step">
            <div className="progress">
                <progress id="my-progress" max="100" value="50"></progress>
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
                        className="span__target span__target_middle"
                        style={{ color: ' #5558fa' }}
                    >
                        <ion-icon name="ellipse"></ion-icon>
                        <span className="target">&#8226;</span>
                        <p style={{ color: ' #5558fa' }}>2</p>
                    </span>
                    <span className="span__gray">
                        <ion-icon name="ellipse"></ion-icon>
                        <p style={{ textAlign: 'center' }}>3</p>
                    </span>
                </div>
            </div>
            <div className="content">
                <div className="advantages">
                    Преимущества
                    {advantages.map((i) => (
                        <div key={i.id}>
                            <input
                                className="input__step"
                                type="text"
                                defaultValue={i}
                            />
                            <button
                                onClick={(e) => {
                                    btnDelete(e);
                                }}
                                className="btnDelete"
                            >
                                <ion-icon name="trash-outline"></ion-icon>
                            </button>
                        </div>
                    ))}
                </div>
                <button onClick={addAdvantages} className="btnAdd">
                    +
                </button>

                <div className="group">
                    Checkbox группа
                    {checkbox.map((i) => (
                        <div key={i.id}>
                            {checkboxOn.includes(i) ? (
                                <input
                                    name={i}
                                    onChange={(e) => {
                                        changeCheckBox(e, i);
                                    }}
                                    className="checkbox"
                                    type="checkbox"
                                    checked
                                />
                            ) : (
                                <input
                                    name={i}
                                    onChange={(e) => {
                                        changeCheckBox(e, i);
                                    }}
                                    className="checkbox"
                                    type="checkbox"
                                />
                            )}
                            <span>{i}</span>
                        </div>
                    ))}
                    Radio группа
                    <div className="">
                        <input name="1" type="radio" /> <span>1</span>
                    </div>
                    <div className="">
                        <input name="1" type="radio" /> <span>2</span>
                    </div>
                    <div className="">
                        <input name="1" type="radio" /> <span>3</span>
                    </div>
                </div>
            </div>
            <div className="container__button">
                <button className="buttonMain" onClick={back}>
                    Назад
                </button>
                <button className="buttonMain" onClick={navigateToStep3}>
                    Далее
                </button>
            </div>
        </div>
    );
}
