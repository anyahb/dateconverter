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

    const cities = [
        {
            city: "Moscow",
            offset: 7
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
    const [currentConvertedCity, setCurrentConvertedCity] = useState("Moscow") // текущий город в который комментируем
    const [lond, modified] = useState('')


    const offsetMoscow = 7
    const offsetLondon = 5
    const offsetTokyo = 14
    const offsetParis = 6
    const offsetKiev = 7
    const offsetBeijing = 13

    /* useEffect(() => {
         console.log('counter changed')
     },[])*/


    const moscowTime = function () {
        const valMoscow = currentTime
        const moscva = valMoscow.split(':')
        if (moscva[0] < 17) {
            setConvertedTime(parseInt(moscva[0]) + offsetMoscow + ":" + moscva[1])
        } else {
            setConvertedTime(offsetMoscow - (24 - parseInt(moscva[0])) + ":" + moscva[1])

        }
    }


    const londonTime = function () {
        const valLondon = convertedTime
        const london = valLondon.split(':')
        if (london[0] < 17) {
            modified(parseInt(london[0]) + offsetLondon + ":" + london[1])
        } else {
            modified(offsetLondon - (24 - parseInt(london[0])) + ":" + london[1])
        }

    }

    const kievTime = function () {
        const valKiev = convertedTime
        const kiev = valKiev.split(':')
        if (kiev[0] < 17) {
            modified(parseInt(kiev[0]) + offsetKiev + ":" + kiev[1])
        } else {
            modified(offsetKiev - (24 - parseInt(kiev[0])) + ":" + kiev[1])
        }

    }


    const tokyoTime = function () {
        const valTokyo = convertedTime
        const tokyo = valTokyo.split(':')
        if (tokyo[0] < 17) {
            modified(parseInt(tokyo[0]) + offsetLondon + ":" + tokyo[1])
        } else {
            modified(offsetTokyo - (24 - parseInt(tokyo[0])) + ":" + tokyo[1])
        }
    }

    const parisTime = function () {
        const valParis = convertedTime
        const paris = valParis.split(':')
        if (paris[0] < 17) {
            modified(parseInt(paris[0]) + offsetLondon + ":" + paris[1])
        } else {
            modified(offsetTokyo - (24 - parseInt(paris[0])) + ":" + paris[1])
        }
    }

    const beijingTime = function () {
        const valBeiging = convertedTime
        const beijing = valBeiging.split(':')
        if (beijing[0] < 17) {
            modified(parseInt(beijing[0]) + offsetBeijing + ":" + beijing[1])
        } else {
            modified(offsetBeijing - (24 - parseInt(beijing[0])) + ":" + beijing[1])
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

            if (city === "Tokyo") {

                if (splittedTime[0] <= 17) {
                    setConvertedTime(parseInt(splittedTime[0]) + offsetTokyo + ":" + splittedTime[1])
                } else {
                    setConvertedTime(offsetTokyo - (24 - parseInt(splittedTime[0])) + ":" + splittedTime[1])
                }
            }

            if (city === "Paris") {

                if (splittedTime[0] <= 17) {
                    setConvertedTime(parseInt(splittedTime[0]) + offsetParis + ":" + splittedTime[1])
                } else {
                    setConvertedTime(offsetParis - (24 - parseInt(splittedTime[0])) + ":" + splittedTime[1])
                }
            }

            if (city === "Kiev") {

                if (splittedTime[0] <= 17) {
                    setConvertedTime(parseInt(splittedTime[0]) + offsetKiev + ":" + splittedTime[1])
                } else {
                    setConvertedTime(offsetKiev - (24 - parseInt(splittedTime[0])) + ":" + splittedTime[1])
                }
            }


            if (city === "Beijing") {

                if (splittedTime[0] <= 17) {
                    setConvertedTime(parseInt(splittedTime[0]) + offsetBeijing + ":" + splittedTime[1])
                } else {
                    setConvertedTime(offsetBeijing - (24 - parseInt(splittedTime[0])) + ":" + splittedTime[1])
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

        if (hour < 24 && minute < 60) {
            if (value.length === 5 || (!isNaN(hour) && !isNaN(minute))) {

                cities.forEach((item, index) => {
                    if (conv === item.city) {
                        if (splittedTime[0] <= (24 - item.offset)) {
                            setConvertedTime(parseInt(splittedTime[0]) + item.offset + ":" + splittedTime[1])
                        } else {
                            setConvertedTime(item.offset - (24 - parseInt(splittedTime[0])) + ":" + splittedTime[1])
                        }
                    }
                })

                // if (conv === "Moscow") {
                //     if (splittedTime[0] <= (24 - offsetMoscow)) {
                //         setConvertedTime(parseInt(splittedTime[0]) + offsetMoscow + ":" + splittedTime[1])
                //     } else {
                //         setConvertedTime(offsetMoscow - (24 - parseInt(splittedTime[0])) + ":" + splittedTime[1])
                //     }
                // }

                // if (conv === "London") {
                //     if (splittedTime[0] <= (24 - offsetLondon)) {
                //         setConvertedTime(parseInt(splittedTime[0]) + offsetLondon + ":" + splittedTime[1])
                //     } else {
                //         setConvertedTime(offsetLondon - (24 - parseInt(splittedTime[0])) + ":" + splittedTime[1])
                //     }
                // }
            }

        }
    }


    return (
        <div className="container">
            <p className="container__title">Time in Washington DC, United States</p>

            <input className="input" placeholder={'type your time:'} onInput={inputHandler}/>

            <div className="buttons">

            <button className="buttons__button" onClick={() => converting("Moscow")}>Moscow</button>
            <button className="buttons__button" onClick={() => converting("London")}>London</button>
            <button className="buttons__button" onClick={() => converting("Tokyo")}>Tokyo</button>
            <button className="buttons__button" onClick={() => converting("Paris")}>Paris</button>
            <button className="buttons__button" onClick={() => converting("Kiev")}>Kiev</button>
            <button className="buttons__button" onClick={() => converting("Beijing")}>Beijing</button>
            </div>

            <div className="container__diplay">
            <h1>{currentConvertedCity}</h1>
            <h1>{convertedTime}</h1>
            </div>


            <Main/>
        </div>
    )
}


export default Search
