import React from 'react';
import './App.css';
import './index.css';

function App() {
    const [money, setMoney] = React.useState<number>(0);
    const [rate, setRate] = React.useState<number>(0);
    const [goal, setGoal] = React.useState<number>(0);
    const [yearsData, setYearsData] = React.useState<
        { year: number; money: number; rate: number; result: number }[]
    >([]);

    const handleChangeMoney = (e: React.ChangeEvent<HTMLInputElement>) =>
        setMoney(Number(e.target.value));
    const handleChangeRate = (e: React.ChangeEvent<HTMLInputElement>) =>
        setRate(Number(e.target.value));
    const handleChangeGoal = (e: React.ChangeEvent<HTMLInputElement>) =>
        setGoal(Number(e.target.value));

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let year = new Date().getFullYear(); // Năm hiện tại
        let total = money;
        const tempData = [];

        while (total < goal) {
            const newTotal = Math.round(total * (1 + rate / 100) * 1000) / 1000; // Lãi kép từng năm làm tròn 3 chữ số
            tempData.push({ year, money: total, rate, result: newTotal });
            total = newTotal;
            year++;
        }

        setYearsData(tempData);
    };

    return (
        <>
            <div className="bg-white p-10 rounded-3xl text-sky-700">
                <h1 className='font-bold'>Calculation Investment</h1>
                <br />
                <form className="te">
                    <label>Money </label>
                    <input
                        className="ml-1 rounded-xl p-1 focus:outline-none bg-gray-300 focus:ring-2 focus:ring-green-600 hover:ring-2 hover:ring-sky-700"
                        onChange={handleChangeMoney}
                        type="number"
                    />{' '}
                    <br /> <br />
                    <label className="">Rate </label>
                    <input
                        className=" ml-6 rounded-xl p-1 focus:outline-none bg-gray-300 focus:ring-2 focus:ring-green-600 hover:ring-2 hover:ring-sky-700"
                        onChange={handleChangeRate}
                        type="number"
                    />{' '}
                    <br /> <br />
                    <label className="">Goal </label>
                    <input
                        className=" ml-5 rounded-xl p-1 focus:outline-none bg-gray-300 focus:ring-2 focus:ring-green-600 hover:ring-2 hover:ring-sky-700"
                        onChange={handleChangeGoal}
                        type="number"
                    />{' '}
                    <br /> <br />
                    <button
                        className="text-white bg-sky-700 focus:outline-none"
                        onClick={handleClick}
                    >
                        Calculation
                    </button>
                </form>
                {/* thay cho câu đk yearsData.length > 0 ? <table>...</table> : null */}
                {yearsData.length > 0 && (
                    <table
                        className="ml-24 "
                        border={1}
                        style={{ marginTop: '20px' }}
                    >
                        <thead>
                            <tr className="border-b">
                                <th className="p-5 mr-5 border-r">Year</th>
                                <th className="p-5 mr-5 border-r">Money</th>
                                <th className="p-5 mr-5 border-r">Rate (%)</th>
                                <th className="p-5 mr-5 ">Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            {yearsData.map((item, index) => (
                                <tr key={index} className="text-xs">
                                    <td className="border-r">{item.year}</td>
                                    <td className="border-r">{item.money}</td>
                                    <td className="border-r">{item.rate} %</td>
                                    <td>{item.result}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
}

export default App;
