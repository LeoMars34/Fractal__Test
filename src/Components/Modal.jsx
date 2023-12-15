import { useNavigate } from 'react-router-dom';

export function Modal({ sucsses }) {
    console.log(sucsses);
    const navigate = useNavigate();
    function navigateToMain() {
        localStorage.clear();
        navigate('/Main');
    }
    return (
        <div className="container__modal">
            <div className="content__modal">
                <div className="content__modal_sucsess">
                    {sucsses ? (
                        <h2>Форма успешно отправлена</h2>
                    ) : (
                        <h2>Ошибка</h2>
                    )}
                    {sucsses ? (
                        <div className="sucsess">
                            <ion-icon name="checkmark-circle"></ion-icon>
                        </div>
                    ) : (
                        <div className="error">
                            <ion-icon name="close-circle"></ion-icon>
                        </div>
                    )}

                    <button onClick={navigateToMain} className="buttonMain">
                        На главную
                    </button>
                </div>
            </div>
        </div>
    );
}
