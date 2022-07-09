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
    const [lond,modified] = useState('')
    /*const [counter,setCounter] = useState(0)
    const [count, changed] = useState(date.toTimeString())*/
    const offsetMoscow = 7
    const offsetLondon = 5

   /* useEffect(() => {
        console.log('counter changed')
    },[])*/
    const inputHandler = (event) => {
        const value = event.target.value
        setTime(value)
        /*const moscow = value.split(':')


        if (moscow[0] <= 17){
            changed(parseInt(moscow[0]) + offset + ":" + moscow[1])
        } else{
        changed(offset - (24 - parseInt(moscow[0])) + ":" + moscow[1])
        }*/
    }

    const moscowTime = function (){
        const valMoscow = time
        const moscva = valMoscow.split(':')
       if (moscva[0] <= 17){
           changed(parseInt(moscva[0]) + offsetMoscow + ":" + moscva[1])
       } else{
       changed(offsetMoscow - (24 - parseInt(moscva[0])) + ":" + moscva[1])
       }
    }

    /*const washingtonTime = function (){

    }*/

    const londonTime = function (){
        const valLondon = city
        const london = valLondon.split(':')
        if (london[0] <= 17){
            modified(parseInt(london[0]) + offsetLondon + ":" + london[1])
        } else{
            modified(offsetLondon - (24 - parseInt(london[0])) + ":" + london[1])
        }

    }





    /* const offset = +7*/
    return (
        <div>
            <p>Washington DC, United States</p>

            <input onInput={inputHandler}/>

           {/* <button onClick={washingtonTime}>Washington</button>*/}


           <h1>{time}</h1>
            <hr/>
            <p>Moscow, Russia</p>

            <button onClick={moscowTime}>Moscow</button>

            <h1>{city}</h1>

            <hr/>

            <p>London, England</p>

            <h1>{lond}</h1>
            <button onClick={londonTime}>London</button>


            <Main/>
        </div>
    )
}



export default Search
