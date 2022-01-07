import React, { useMemo, useEffect, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

function runFactorial(n) {
    console.log("run factorial");
    return factorial(n);
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [otherState, setOtherState] = useState(false);

    const buttonColor = otherState ? "primary" : "secondary";
    useEffect(() => {
        console.log("render button color");
    }, [buttonColor]);
    // const fact = runFactorial(value);
    const fact = useMemo(() => runFactorial(value), [value]);
    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>value {value}</p>
                <p>Результат {fact}</p>
                <button onClick={() => setValue(prevState => prevState + 10)} className="btn btn-primary ms-md-2">increment</button>
                <button onClick={() => setValue(prevState => prevState - 10)} className="btn btn-primary ms-md-2">decrement</button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button onClick={() => setOtherState(prevState => !prevState)} className={"btn ms-md-2 btn-" + buttonColor}>Изменить цвет</button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
