import React, { useCallback, useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import prevState from "../useRef/prevState";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withOutCallback = useRef(0);
    const withCallback = useRef(0);
    const handleChange = ({ target }) => {
        setData({ ...prevState, [target.name]: target.value });
    };
    // WithOutCallback
    const validateWithOutCallback = (data) => {
        console.log(data);
    };
    useEffect(() => {
        withOutCallback.current++;
    }, [validateWithOutCallback]);
    // WithCallback
    const validateWithCallback = useCallback((data) => {
        console.log(data);
    }, []);
    useEffect(() => {
        withCallback.current++;
    }, [validateWithCallback]);
    useEffect(() => {
        validateWithOutCallback(data);
        validateWithCallback(data);
    }, [data]);
    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>render withOutCallback: {withOutCallback.current}</p>
            <p>render withCallback: {withCallback.current}</p>
            <label htmlFor="email" className="form-label">Email</label>
            <input onChange={handleChange} value={data.email || ""} type="email" name="email" className="form-control" id="email"/>
        </CardWrapper>
    );
};

export default UseCallBackExample;
