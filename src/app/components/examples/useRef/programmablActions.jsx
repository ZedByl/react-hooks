import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammablActionsExample = () => {
    const inputRef = useRef();
    const handleClick = () => {
        alert(inputRef.current.value);
        inputRef.current.focus();
        inputRef.current.value = "";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <label htmlFor="email" className="form-label">Email</label>
            <input ref={inputRef} type="email" className="form-control" id="email"/>
            <button className="btn btn-primary" onClick={handleClick}>Кнопка</button>
        </CardWrapper>
    );
};

export default ProgrammablActionsExample;
