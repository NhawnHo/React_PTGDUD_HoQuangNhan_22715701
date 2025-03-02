import React, { useState } from 'react';
function TodoApp() {
    const [input, setInput] = useState('');
    const [todo, setTodo] = useState<string[]>([]);
    const newarr = todo.map((item, index) => {
        return (
            <li key={index}>
                {' '}
                {item}
                <button value={item} onClick={handClickItem}>
                    Remove
                </button>
                <br />
            </li>
        );
    });
    function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInput(event.target.value);
    }

    function handleOnClick() {
        setTodo([...todo, input]);
    }
    function handClickItem(event: React.MouseEvent<HTMLButtonElement>) {
        const itemId = (event.target as HTMLButtonElement).value;
        setTodo(todo.filter((item) => item !== itemId));
    }
    return (
        <>
            <input
                className="rounded-xl p-1 focus:outline-none focus:ring-2  focus:ring-green-600 hover:ring-2 hover:ring-green-200 transion duration-200"
                onChange={handleOnChange}
                type="text"
            />{' '}
            <br /> <br />
            <button onClick={handleOnClick}>Add</button>
            <ol>{newarr}</ol>
        </>
    );
}
export default TodoApp;
