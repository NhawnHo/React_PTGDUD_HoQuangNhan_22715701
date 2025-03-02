import { useState } from 'react';
import React from 'react';

function Lab01_2() {
    const [result, setResult] = useState(0);
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    function handleChangeA(event: React.ChangeEvent<HTMLInputElement>) {
        setA(Number(event.target.value));
    }
    function handleChangeB(event: React.ChangeEvent<HTMLInputElement>) {
        setB(Number(event.target.value));
    }
    function handleOnClick() {
        setResult(a + b);
    }

    return (
        <>
            <input
                className="rounded-xl p-1 focus:outline-none focus:ring-2  focus:ring-green-600 hover:ring-2 hover:ring-green-200 transion duration-200"
                onChange={handleChangeA}
                type="text"
                placeholder="Enter a..."
            />
            <br /> <br />
            <input
                className="rounded-xl p-1 focus:outline-none focus:ring-2  focus:ring-green-600 hover:ring-2 hover:ring-green-200 transion duration-200"
                onChange={handleChangeB}
                type="text"
                placeholder="Enter b..."
            />
            <br />
            <br />
            <button className="bg-white text-black" onClick={handleOnClick}>
                Calculation
            </button>
            <br />
            <br />
            <span>Result: {result}</span>
        </>
    );
}

export default Lab01_2;
