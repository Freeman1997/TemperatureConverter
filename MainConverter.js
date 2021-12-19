import React, { useState } from 'react'
import { converter, toCelsius, toFahrenheit } from './lib/converter'
import TempConverter from './TempConverter'
import "./converter.css"

export default function MainConverter() {
    const [tempValue, setTempValue] = useState('')
    const [scaled, setScaled] = useState('c')

    const onChangeHandler = (e, scale) => {
        setTempValue(e.target.value)
        setScaled(scale)
    }

    const celsius = scaled === 'f' ? converter(tempValue, toCelsius) : tempValue    
    const fahrenheit = scaled === 'c' ? converter(tempValue, toFahrenheit) : tempValue

    return (
        <>  
            <h1 className="convertTitle">Temperature Converter</h1>
            <TempConverter scale="c" onChangeHandler={onChangeHandler} temp={celsius} />
            <TempConverter scale="f" onChangeHandler={onChangeHandler} temp={fahrenheit}/>
            
        </>
    )
}
