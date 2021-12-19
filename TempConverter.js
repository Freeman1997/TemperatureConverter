import React from 'react'

export default function TempConverter({ scale, onChangeHandler, temp }) {
    const parameter = { c: 'Celsius', f: 'Fahrenheit' }
    return (
        <>
        <fieldset className="convert">
        <legend>Enter temperature below in {parameter[scale]}:</legend>
        <input
          type="text"
          className="convert"
          value={temp}
          onChange={(e) => onChangeHandler(e, scale)}
        />
      </fieldset>
            
        </>
    )
}
