import React, { useState } from 'react'
import {CSVLink} from "react-csv"

function CsvFile() {
  const [number, setNumber] = useState([])
  const headers = [
  { label: "Team ID", key: "ıd" },
  { label: "Packet Count", key: "pcount" },
  { label: "Pressure", key: "pressure" }
  ]

  const addNumber = (ıd,pcount,pressure) => {  
        setNumber([...number, {
          ıd:1000,
          pcount: number.length,
          pressure:Math.floor(Math.random() * 10)
        }])
  }
  
  
  return (
    <div className='buttons-container'>
      <div className='button' onClick={addNumber}>Start Recording</div>
      {number.length > 2 && (
				<CSVLink className='button' data={number} headers={headers} filename={"Flight_<1018>_C.csv"}>Download CSV</CSVLink>
			)}
    </div>
  )
}

export default CsvFile;
