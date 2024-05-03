import './App.css';
import { useState ,useEffect} from 'react';

function App() {
  const [length,setLength] = useState(8)
  const [upper,setUpper] = useState(false)
  const [special,setSpecial] = useState(false)
  const [numbers,setNumbers] = useState(false)
  const [password,setPassword] = useState("")

  useEffect(()=>{
    function generateRandomString(length) {
      var charset = 'abcdefghijklmnopqrstuvwxyz';
      const specialChar = '@#$*'
      const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      const Numbers = '0123456789'
      if(special) charset+=specialChar
      if(numbers) charset+=Numbers
      if(upper) charset+=upperCase
      let randomString = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        randomString += charset[randomIndex];
      }
      return randomString;
    }

    const password = generateRandomString(length)
    setPassword(password)
  },[length,special])

  return (
    <div className="App flex justify-center items-center h-screen bg-slate-600">
      <div className='w-80 h-96 bg-black flex justify-center items-center flex-col'>
      <div>
          <input type='range' min="8" max="16" value={length} onChange={(e)=>setLength(e.target.value)}></input>
        </div>
        <div>
          <input type='text' value={password} readOnly></input>
        </div>
        <div className='my-3 flex gap-2'>
          <label htmlFor='include_upperCase' className='text-white'>Include uppercase</label>
          <input type='checkbox' id='include_upperCase' className='w-5' onChange={()=>setUpper(!upper)}></input>
        </div>
        <div className='my-3 flex gap-2'>
          <label htmlFor='include_special' className='text-white'>Include special</label>
          <input type='checkbox' id='include_special' className='w-5' onChange={()=>setSpecial(!special)}></input>
        </div>
        <div className='my-3 flex gap-2'>
          <label htmlFor='include_upperCase' className='text-white'>Include numbers</label>
          <input type='checkbox' id='include_upperCase' className='w-5' onChange={()=>setNumbers(!numbers)}></input>
        </div>
      </div>
    </div>
  );
}

export default App;
