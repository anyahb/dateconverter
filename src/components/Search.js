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
        const splittedTime = currentTime.split(":")
        const hour = parseInt(splittedTime[0])
        const minute = parseInt(splittedTime[1])

        if (currentTime.length === 5 || (!isNaN(hour) && !isNaN(minute))) {
            if (city === "Moscow") {

                if (splittedTime[0] <= 17) {
                    setConvertedTime(parseInt(splittedTime[0]) + offsetMoscow + ":" + splittedTime[1])
                } else {
                    setConvertedTime(offsetMoscow - (24 - parseInt(splittedTime[0])) + ":" + splittedTime[1])
                }
            }
            if (city === "London") {

                if (splittedTime[0] <= 17) {
                    setConvertedTime(parseInt(splittedTime[0]) + offsetLondon + ":" + splittedTime[1])
                } else {
                    setConvertedTime(offsetLondon - (24 - parseInt(splittedTime[0])) + ":" + splittedTime[1])
                }
            }
        }
    }

    const inputHandler = (event) => {
        const value = event.target.value
        setCurrentTime(value)
        const conv = currentConvertedCity
        const splittedTime = value.split(":")
        const hour = parseInt(splittedTime[0])
        const minute = parseInt(splittedTime[1])
        if (value.length === 5 || (!isNaN(hour) && !isNaN(minute))){
            if (conv === "Moscow"){
                if (splittedTime[0] <= 17) {
                    setConvertedTime(parseInt(splittedTime[0]) + offsetMoscow + ":" + splittedTime[1])
                } else {
                    setConvertedTime(offsetMoscow - (24 - parseInt(splittedTime[0])) + ":" + splittedTime[1])
                }
            }

            if (conv === "London"){
                if (splittedTime[0] <= 17) {
                    setConvertedTime(parseInt(splittedTime[0]) + offsetLondon + ":" + splittedTime[1])
                } else {
                    setConvertedTime(offsetLondon - (24 - parseInt(splittedTime[0])) + ":" + splittedTime[1])
                }
            }
        }

    }


    return (
        <div>
            <p>Washington DC, United States</p>

            <input placeholder={'type your time:'} onInput={inputHandler}/>


            <button onClick={() => converting("Moscow")}>Moscow</button>
            <button onClick={() => converting("London")}>London</button>

            <h1>{currentConvertedCity}</h1>
            <h1>{convertedTime}</h1>


            <Main/>
        </div>
    )
}


export default Search
