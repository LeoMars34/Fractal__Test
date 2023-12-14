import { useNavigate } from 'react-router-dom';

export function Modal() {
    const navigate = useNavigate();
    function navigateToMain() {
        localStorage.clear();
        navigate('/Main');
    }
    return (
        <div className="container__modal">
            <div className="content__modal">
                <div className="content__modal_sucsess">
                    <h2>Форма успешно отправлена</h2>
                    <div className="sucsess">
                        <ion-icon name="checkmark-circle"></ion-icon>
                    </div>
                    <button onClick={navigateToMain} className="buttonMain">
                        На главную
                    </button>
                </div>
            </div>
        </div>
    );
}
