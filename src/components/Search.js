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
    console.log(createDate(date));
    const [test, test2] = [1,2]
    const [time,setTime] = useState('')
    const [counter,setCounter] = useState(0)
    const [count, changed] = useState(date.toTimeString())

    useEffect(() => {
        console.log('counter changed')
    },[])
    const inputHandler = (event) => {
        console.log(event)
        const value = event.target.value
        setCounter(counter+1)
        setTime(value)
    }


   /* const offset = +7*/
    return (
        <div>
            <input onInput={inputHandler}/>
            <h1>time: {time}</h1>
            <h1>counter: {counter}</h1>

            <p>Washington DC, United States</p>
            {count}
            <hr/>
            <div>Moscow, Russia</div>
            <button onClick={() => {
            changed()
            }}>click</button>
            <Main/>
        </div>
    )
}



export default Search
