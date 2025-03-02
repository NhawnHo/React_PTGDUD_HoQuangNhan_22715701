import { useState } from 'react';

function Lab01() {
    let name = '';
    const [name2, setName2] = useState('');

    function handleOnClick() {
        setName2(name);
    }
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        name = event.target.value;
    }

    return (
        <>
            <input
                className="rounded-xl p-1 focus:outline-none focus:ring-2  focus:ring-green-600 hover:ring-2 hover:ring-green-200 transion duration-200"
                onChange={handleChange}
                type="text"
                placeholder="Enter your name..."
            />
            <br /> <br />
            <button className="bg-white text-black" onClick={handleOnClick}>
                {' '}
                Click
            </button>{' '}
            <br />
            <span>Hello: {name2}</span>
        </>
    );
}

export default Lab01;
