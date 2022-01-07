import React from 'react';

const SimpleComponent = ({onLogOut, onLogin}) => {
    const isLogin = localStorage.getItem("user");
    return (
        <>
            {isLogin ?
                <button className="btn btn-primary" onClick={onLogOut}>Выйти из системы</button>
                :
                <button className="btn btn-primary" onClick={onLogin}>Войти</button>
            }
        </>
    );
};

export default SimpleComponent;