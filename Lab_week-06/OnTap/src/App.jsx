import { useReducer, useState, useEffect, useRef } from 'react'
import './index.css'

function App() {
  
  function reducer1(state, action) {
    switch (action.type) {
      case '+':
        return { ...state, count: state.count + 1 };
      case '-':
        return { ...state, count: state.count - 1 };
      default:
        return state;
    }
  }

  var [result, dispatch] = useReducer(reducer1, { count: 0 });
//reducer2 cho phan cong tru nhan chia 2 so nhap tu input


  const handleChange = (e) => {
    return e.target.value;
  }

  return (
    <>
      <h1>Tang giam 1 so</h1>
      <div className='w-screen'>
        <p className='text-green-500 text-3xl'>{result.count}</p>
        <button onClick={() => dispatch({ type: '+'})}>+</button>
        <button onClick={() => dispatch({ type: '-'})}>-</button>
      </div>
      <h1>Cong tru nhan chia 2 so</h1> <br />
      <div>
        <span>Nhap so a: </span>
        <input onChange={handleChange} type="number" className='bg-gray-800 border-gray-600 rounded-3xl'/> <br /> <br />
        <span>Nhap so b: </span>
        <input onChange={handleChange} type="number"  className='bg-gray-800 border-gray-600 rounded-3xl'/>
      </div>

    </>
  )
}

export default App