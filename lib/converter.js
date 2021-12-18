export const toFahrenheit = (celsius) => {
    return celsius * (9 / 5) + 32
  }
  export const toCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * (5 / 9)
  }
  export  const converter = (tempValue,convertTo) => {
     const input = parseFloat(tempValue);
     
     if(Number.isNaN(input)){
         return ""
     }
     const outPut = convertTo(input)/1000*1000
     return outPut;
  
   }