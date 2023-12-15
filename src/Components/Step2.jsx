import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Step2() {
    const navigate = useNavigate();
    const [advantages, setAdvantages] = useState(() => {
        if (localStorage.getItem('advantages')) {
            return localStorage.getItem('advantages').split(',');
        } else {
            return ['', '', ''];
        }
    });
    const initialArray = [1, 2, 3];
    const [checkboxes, setCheckboxes] = useState(() => {
        if (localStorage.getItem('checkboxes')) {
            return JSON.parse(localStorage.getItem('checkboxes'));
        } else {
            return false;
        }
    });
    const handleCheckboxChange = (index) => {
        const updatedCheckboxes = [...checkboxes];
        updatedCheckboxes[index] = !updatedCheckboxes[index];
        setCheckboxes(updatedCheckboxes);
    };
    useEffect(() => {
        localStorage.setItem('checkboxes', JSON.stringify(checkboxes));
    }, [checkboxes]);

    useEffect(() => {
        const savedCheckboxes = JSON.parse(localStorage.getItem('checkboxes'));
        setCheckboxes(savedCheckboxes || []);
    }, []);

    function navigateToStep3() {
        let advantagesAll = document.querySelectorAll('.input__step');
        let advantagesArray = [];
        for (let i = 0; i < advantagesAll.length; i++) {
            if (advantagesAll[i].value) {
                advantagesArray.push(advantagesAll[i].value);
            }
        }
        localStorage.setItem('advantages', advantagesArray);
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
    const [selectedValue, setSelectedValue] = useState('');
    const handleRadioChange = (event) => {
        setSelectedValue(event.target.value);
    };
    useEffect(() => {
        const savedValue = localStorage.getItem('radioValue');
        if (savedValue) {
            setSelectedValue(savedValue);
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('radioValue', selectedValue);
    }, [selectedValue]);

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
                    {advantages.map((i, index) => (
                        <label key={index}>
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
                        </label>
                    ))}
                </div>
                <button onClick={addAdvantages} className="btnAdd">
                    +
                </button>

                <div className="group">
                    <div className="group__flex">
                        Checkbox группа
                        {initialArray.map((number, index) => (
                            <label className="checkbox" key={index}>
                                <input
                                    style={{ marginRight: '10px' }}
                                    type="checkbox"
                                    checked={checkboxes[index] || false}
                                    onChange={() => handleCheckboxChange(index)}
                                />
                                {number}
                            </label>
                        ))}
                    </div>
                    <div className="group__flex">
                        Radio группа
                        <label>
                            <input
                                className="checkbox"
                                type="radio"
                                name="radioGroup"
                                value="option1"
                                checked={selectedValue === 'option1'}
                                onChange={handleRadioChange}
                            />
                            1
                        </label>
                        <label>
                            <input
                                className="checkbox"
                                type="radio"
                                name="radioGroup"
                                value="option2"
                                checked={selectedValue === 'option2'}
                                onChange={handleRadioChange}
                            />
                            2
                        </label>
                        <label>
                            <input
                                className="checkbox"
                                type="radio"
                                name="radioGroup"
                                value="option3"
                                checked={selectedValue === 'option3'}
                                onChange={handleRadioChange}
                            />
                            3
                        </label>
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
