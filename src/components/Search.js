import React, {useState, useEffect} from "react";
import Main from "./Main"

export const Search = () => {

    const cities = [
        {
            city: "Moscow",
            offset: 8
        },
        {
            city: "London",
            offset: 5
        },
        {
            city: "Tokyo",
            offset: 14
        },
        {
            city: "Paris",
            offset: 6
        },
        {
            city: "Kiev",
            offset: 7
        },
        {
            city: "Beijing",
            offset: 13
        }

    ]

    const [currentTime, setCurrentTime] = useState('')
    const [convertedTime, setConvertedTime] = useState('')
    const [currentConvertedCity, setCurrentConvertedCity] = useState("")
    const [background, setBackground] = useState('clocks')
    const [containerBackground, setContainerBackground] = useState('')


    const requireImg = (background) => {
        return require(`../img/${background}.jpg`)
    }

    useEffect(() => {


        document.body.style.backgroundImage = `url(${requireImg(background)})`
    }, [background])


    useEffect(() => {
        document.querySelector(".container__display").style.background = containerBackground
    }, [containerBackground])




    const inputHandler = (event) => {

        const value = event.target.value
        setCurrentTime(value)
        const convertedCityVal = currentConvertedCity
        const splitTime = value.split(":")
        const hour = parseInt(splitTime[0])
        const minute = parseInt(splitTime[1])

        if (hour < 24 && minute < 60) {
            if (value.length === 5 && (!isNaN(hour) && !isNaN(minute))) {

                cities.forEach((item) => {
                    if (convertedCityVal === item.city) {
                        if (splitTime[0] < (24 - item.offset)) {
                            setConvertedTime(parseInt(splitTime[0]) + item.offset + ":" + splitTime[1])
                        } else {
                            setConvertedTime(item.offset - (24 - parseInt(splitTime[0])) + ":" + splitTime[1])
                        }
                    }
                })
            }

        }
    }


    const converting = function (city) { // Moscow
        const splitTime = currentTime.split(":")
        const hour = parseInt(splitTime[0])
        const minute = parseInt(splitTime[1])
        setCurrentConvertedCity(city)

        if (hour < 24 && minute < 60 && (currentTime.length === 5 && (!isNaN(hour) && !isNaN(minute)))) {

                cities.forEach((item) => {

                    if (city === item.city) {
                        if (hour < (24 - item.offset)) {
                            setConvertedTime(parseInt(splitTime[0]) + item.offset + ":" + splitTime[1])
                        } else {
                            setConvertedTime(item.offset - (24 - parseInt(splitTime[0])) + ":" + splitTime[1])
                        }
                    }
                })

                console.log(currentTime.length)
        } else {
            setCurrentConvertedCity("Wrong Format")
            setConvertedTime("")
        }
    }




    const changeCity = (convertedCity, imgName, background) => {
        converting(convertedCity)
        setBackground(imgName)
        setContainerBackground(background)
    }


    return (
        <div className="container">

            <p className="container__title">Time in Washington DC, United States</p>

            <input className="container__input" placeholder={'type your time:'} onInput={inputHandler}/>

            <div className="container__buttons buttons">

                <button className="buttons__button"
                        onClick={() => changeCity("Moscow", "moscow", "rgba(1,1,1,0.5)")}>Moscow
                </button>

                <button className="buttons__button"
                        onClick={() => changeCity("London", "london", "rgba(1,1,1,0.5)")}>London
                </button>


                <button className="buttons__button"
                        onClick={() => changeCity("Tokyo", "tokyo", "rgba(1,1,1,0.5)")}>Tokyo
                </button>

                <button className="buttons__button"
                        onClick={() => changeCity("Paris", "Paris", "rgba(1,1,1,0.5)")}>Paris
                </button>

                <button className="buttons__button"
                        onClick={() => changeCity("Kiev", "kiev", "rgba(1,1,1,0.5)")}>Kiev
                </button>


                <button className="buttons__button"
                        onClick={() => changeCity("Beijing", "Beijing", "rgba(1,1,1,0.5)")}>Beijing
                </button>


            </div>


            <div className="container__display">
                <h1>{currentConvertedCity}</h1>
                <h1>{convertedTime}</h1>
            </div>

            <Main/>
        </div>
    )
}


export default Search
