import React, {useState} from 'react';
import './style.css';
import Footer from './Footer';

 

function App(){

    let time = new Date().toLocaleTimeString();

    let [changeTime, setTime] = useState(time);

    let date = new Date().toLocaleDateString();
    let [ changeDate , setDate] = useState(date)
    function getDate(){
    
    let todayDate = new Date().toLocaleDateString()
    setDate(todayDate);
    }

setInterval( getTime, 1000)

    function getTime(){
        let currentTime = new Date().toLocaleTimeString()
        setTime(currentTime);
    }


    return (
        <div>
            <div className="section">
                <h1 onLoad={getTime}>{time}</h1>
                <h2 onLoad={getDate}>{date}</h2>
            </div>

           <Footer />

        </div>
    )
}

export default App;