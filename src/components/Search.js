import React, {useState,useEffect} from "react";
import Main from "./Main"

export const Search = () => {
    const date = new Date()
    const createDate = function(d){
        const hour = d.getHours()
        const minutes = d.getMinutes()
        const result = `${hour}:${minutes}`
        return result
    }
    /*console.log(createDate(date));
    const [test, test2] = [1,2]*/
    const [time,setTime] = useState('')
    const [city,changed] = useState('')
    /*const [counter,setCounter] = useState(0)
    const [count, changed] = useState(date.toTimeString())*/
    const offset = 7

   /* useEffect(() => {
        console.log('counter changed')
    },[])*/
    const inputHandler = (event) => {
        const value = event.target.value
        setTime(value)
        const moscow = value.split(':')

        if(moscow[0].length > 2 || moscow[1].length > 2){
            alert("You entered more than 5 symbols! Try again!")
            window.location.reload()
        }

        if (moscow[0] <= 17){
            changed(parseInt(moscow[0]) + offset + ":" + moscow[1])
        } else{
        changed(offset - (24 - parseInt(moscow[0])) + ":" + moscow[1])
        }



    }





   /* const offset = +7*/
    return (
        <div>

            {/*<h1>counter: {counter}</h1>*/}

            <p>Washington DC, United States</p>
            {/*{count}*/}
            <input onInput={inputHandler}/>
            <h1>time: {time}</h1>
            <hr/>
            <div>Moscow, Russia</div>
            <h1>time: {city}</h1>
            {/*<button onClick={() => {
            changed()
            }}>click</button>*/}
            <Main/>
        </div>
    )
}



export default Search
