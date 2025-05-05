import './App.css';
import { useState } from 'react';
import { LC, NC, SC, UC } from './data/PassChar';




function App() {
  let [uppercase, setUppercase] = useState(false)
  let [lowercase, setLowercase] = useState(false)
  let [number, setNumber] = useState(false)
  let [symbol, setSymbol] = useState(false)
  let [passwordlength, setpasswordlength] = useState(10)
let  [fpass,setfpass] = useState('')
  let createPassword = () => {
    let finalpass =''
    let charSet = ''
    if (uppercase || lowercase || number || symbol) {
      if (uppercase) charSet += UC;
      if (lowercase) charSet += LC;
      if (number) charSet += NC;
      if (symbol) charSet += SC
       for(let i=0;i<passwordlength;i++)  {
        finalpass+=charSet.charAt(Math.floor(Math.random()*charSet.length))
       }
setfpass(finalpass)

    } else {
      alert('please select atleast one check box')
    }
  }
  let copybtn=()=>{
navigator.clipboard.writeText(fpass)
  }
  return (
    <>
      <div className='passwordBox'><h1> password generater</h1>
        <div className='passwordin'>
          <input type='text' value={fpass} readOnly /> <button onClick={copybtn}>copy</button>
        </div>
        <div className='passlength'>
          <label>password length </label>
          <input type='number' max={20} min={10} value={passwordlength} onChange={(event) => setpasswordlength(event.target.value)} />
        </div>

        <div className='passlength'>
          <label>Include Uppercase letters</label>
          <input type='checkbox' checked={uppercase} onChange={() => setUppercase(!uppercase)} />
        </div>

        <div className='passlength'>
          <label>Include Lowercase letters</label>
          <input type='checkbox' checked={lowercase} onChange={() => setLowercase(!lowercase)} />
        </div>

        <div className='passlength'>
          <label>Include Numbera</label>
          <input type='checkbox' checked={number} onChange={() => setNumber(!number)} />
        </div>

        <div className='passlength'>
          <label>Include Symbolks</label>
          <input type='checkbox' checked={symbol} onChange={() => setSymbol(!symbol)} />
        </div>

        <button className='genbutton' onClick={createPassword}>Generate Password</button>

      </div>
    </>
  );
}

export default App;
