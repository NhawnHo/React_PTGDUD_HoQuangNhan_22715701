import React from 'react';
import { useState } from 'react';


function Calculation() {
    const [result, setResult] = useState(0);
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [tb, setTb] = useState('');
    const [operation, setOperation] = useState('Cộng');

    function handleChangeA(event: React.ChangeEvent<HTMLInputElement>) {
        setA(parseInt(event.target.value));
    }
    function handleChangeB(event: React.ChangeEvent<HTMLInputElement>) {
        setB(parseInt(event.target.value));
    }

    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault(); // giúp tránh việc reload trang
        let resultab = 0;
        let thongbao = '';

        switch (operation) {
            case 'Cộng':
                resultab = a + b;
                break;
            case 'Trừ':
                resultab = a - b;
                break;
            case 'Nhân':
                resultab = a * b;
                break;
            case 'Chia':
                if (b !== 0) {
                    resultab = a / b;
                } else {
                    alert('Số b phải khác 0');
                    thongbao = 'Số b phải khác 0';
                }
                break;
            default:
                alert('Vui lòng chọn phép toán');
                thongbao = 'Vui lòng chọn phép toán';
        }
        setResult(resultab);
        setTb(thongbao);
    }
    return (
        <>
            <div>
                <form action="">
                    <label htmlFor="">Nhập a </label>
                    <input
                        className="rounded-xl p-1 focus:outline-none focus:ring-2 focus:ring-green-600 hover:ring-2 hover:ring-green-200 transion duration-200"
                        type="number"
                        onChange={handleChangeA}
                    />
                    <br />
                    <br />
                    <label htmlFor="">Nhập b </label>
                    <input
                        className="rounded-xl p-1 focus:outline-none focus:ring-2  focus:ring-green-600 hover:ring-2 hover:ring-green-200 transion duration-200"
                        type="number"
                        onChange={handleChangeB}
                    />
                    <br />
                    <br />
                    <div className="space-x-4 ">
                        {['Cộng', 'Trừ', 'Nhân', 'Chia'].map((opt) => (
                            <label key={opt}>
                                <input
                                    type="radio"
                                    name="operation"
                                    value={opt}
                                    checked={operation === opt}
                                    onChange={(e) =>
                                        setOperation(e.target.value)
                                    }
                                />
                                {opt}
                            </label>
                        ))}
                    </div>
                    <br />
                    <button
                        className="bg-blue-500 text-white"
                        onClick={handleClick}
                    >
                        Click me
                    </button>
                    <br />
                    <label className="font-bold text-green-500" htmlFor="">
                        Kết quả
                    </label>
                    <br />
                    <span>{result}</span> <br />
                    <span className="text-red-500 mt-2">{tb}</span>
                </form>
            </div>
        </>
    );
}

export default Calculation;
