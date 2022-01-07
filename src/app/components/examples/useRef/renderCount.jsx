import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const RenderCountExample = () => {
    const renderCount = useRef(0);
    const [otherState, setOtherState] = useState(false);
    useEffect(() => {
        renderCount.current++;
    });
    const handelToggleOtherState = () => {
        setOtherState(!otherState);
        console.log(125);
    };
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количесва рендеров</SmallTitle>
            <p>render count: {renderCount.current}</p>
            <button className='btn btn-primary' onClick={handelToggleOtherState}>Кнопка</button>
        </CardWrapper>
    );
};

export default RenderCountExample;
