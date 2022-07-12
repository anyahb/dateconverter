import React, {useState, useEffect} from "react";
import Main from "./Main"

export const Search = () => {

    const date = new Date()
    const createDate = function (d) {
        const hour = d.getHours()
        const minutes = d.getMinutes()
        const result = `${hour}:${minutes}`
        return result
    }
    /*console.log(createDate(date));
    const [test, test2] = [1,2]*/
    const [currentTime, setCurrentTime] = useState('')
    const [convertedTime, setConvertedTime] = useState('')
    const [currentConvertedCity, setCurrentConvertedCity] = useState("Moscow") // текущий город в который комментируем
    const [lond, modified] = useState('')

    const offsetMoscow = 7
    const offsetLondon = 5

    /* useEffect(() => {
         console.log('counter changed')
     },[])*/



    const moscowTime = function () {
        const valMoscow = currentTime
        const moscva = valMoscow.split(':')
        if (moscva[0] <= 17) {
            setConvertedTime(parseInt(moscva[0]) + offsetMoscow + ":" + moscva[1])
        } else {
            setConvertedTime(offsetMoscow - (24 - parseInt(moscva[0])) + ":" + moscva[1])
        }
    }


    const londonTime = function () {
        const valLondon = convertedTime
        const london = valLondon.split(':')
        if (london[0] <= 17) {
            modified(parseInt(london[0]) + offsetLondon + ":" + london[1])
        } else {
            modified(offsetLondon - (24 - parseInt(london[0])) + ":" + london[1])
        }

    }

    const converting = function (city) { // Moscow
        setCurrentConvertedCity(city)
        if (city === "Moscow") {
            const moscva = currentTime.split(':')
            if (moscva[0] <= 17) {
                setConvertedTime(parseInt(moscva[0]) + offsetMoscow + ":" + moscva[1])
            } else {
                setConvertedTime(offsetMoscow - (24 - parseInt(moscva[0])) + ":" + moscva[1])
            }
        }
        if (city === "London") {
            const london = currentTime.split(':')
            if (london[0] <= 17) {
                setConvertedTime(parseInt(london[0]) + offsetLondon + ":" + london[1])
            } else {
                setConvertedTime(offsetLondon - (24 - parseInt(london[0])) + ":" + london[1])
            }
        }

    }

    const inputHandler = (event) => {
        const value = event.target.value
        const conv = currentConvertedCity
        if (conv === "Moscow"){
            const moscva = value.split(':')
            if (moscva[0] <= 17) {
                setCurrentTime(parseInt(moscva[0]) + offsetMoscow + ":" + moscva[1])
            } else {
                setCurrentTime(offsetMoscow - (24 - parseInt(moscva[0])) + ":" + moscva[1])
            }
        }

        if (conv === "London"){
            const london = value.split(':')
            if (london[0] <= 17) {
                setCurrentTime(parseInt(london[0]) + offsetLondon + ":" + london[1])
            } else {
                setCurrentTime(offsetLondon - (24 - parseInt(london[0])) + ":" + london[1])
            }
        }

    }


    return (
        <div>
            <p>Washington DC, United States</p>

            <input placeholder={'type your time:'} onInput={inputHandler}/>

            <h1>{currentTime}</h1>

            <button onClick={() => converting("Moscow")}>Moscow</button>
            <button onClick={() => converting("London")}>London</button>

            <h1>{currentConvertedCity}</h1>
            <h1>{convertedTime}</h1>


            <Main/>
        </div>
    )
}


export default Search
