import React from 'react';

const WithLogin2 = (Component) => (props) => {
    const handleOnLogOut = () => {
        localStorage.removeItem("user");
        window.location.reload()
    }
    const handleOnLogin = () => {
        localStorage.setItem("user", "auth");
        window.location.reload()
    }
    return (
        <>
            <Component onLogOut={handleOnLogOut} onLogin={handleOnLogin} {...props} />
        </>
    );
};

export default WithLogin2;