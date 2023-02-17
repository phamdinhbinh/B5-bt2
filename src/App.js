import logo from './logo.svg';
import './App.css';
import React, {useEffect,useState} from 'react';



function App() {
 const [date, setDate] = useState( Date() );

 useEffect(() => {
  setTimeout(() => {
    setDate(Date() );
    console.log(date)
  },5000);

},); 

  return (
    <div className="App">
    <div  > {date} </div>
    </div>
  );
}

export default App;
