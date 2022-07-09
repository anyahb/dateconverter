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


        if (moscow[0] <= 17){
            changed(parseInt(moscow[0]) + offset + ":" + moscow[1])
        } else{
        changed(offset - (24 - parseInt(moscow[0])) + ":" + moscow[1])
        }




    }

    const moscowTime = function (){
      console.log("moscow")
    }

    const washingtonTime = function (){
        console.log("washington")
    }

    const londonTime = function (){
        console.log("london")
    }





    /* const offset = +7*/
    return (
        <div>
            <p>Washington DC, United States</p>

            <input onInput={inputHandler}/>

            <button onClick={washingtonTime}>Washington</button>


           <h1>{time}</h1>
            <hr/>
            <p>Moscow, Russia</p>

            <button onClick={moscowTime}>Moscow</button>

            <h1>{city}</h1>

            <hr/>

            <p>London, England</p>

            <button onClick={londonTime}>London</button>


            <Main/>
        </div>
    )
}



export default Search
