import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
    const prevState = useRef("");
    const [otherState, setOtherState] = useState("false");

    useEffect(() => {
        prevState.current = otherState;
    }, [otherState]);
    const handelToggleOtherState = () => {
        setOtherState(prevState => prevState === "false" ? "true" : "false");
    };
    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <p>prev state: {prevState.current}</p>
            <p>current state: {otherState}</p>
            <button className='btn btn-primary' onClick={handelToggleOtherState}>Кнопка</button>
        </CardWrapper>
    );
};

export default PrevStateExample;
