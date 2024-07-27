'use client'

import Papa from 'papaparse';
import { useEffect, useState } from "react"

export default function InputFiles({setFile, file, setTableHeaders, tableHeaders}:any) {

  function getFile(event:any) {
    const newFile = event.target.files[0]
    const teste = Papa.parse(newFile, {
      header: true,
      complete(results, file) {
        setFile(results.data)
        setTableHeaders(results.meta.fields)
        console.log(results);
      },
    })
  }

  function chamaConsole() {
    console.log(file)
    console.log(tableHeaders)
  }

  useEffect(() => {}, [])

  return (
    <div className="p-4 grid gap-2 w-[550px] h-max shadow-md bg-white rounded-md">
      <input type="file" className="w-full" onChange={getFile}/>
      <button className="bg-blue-500 p-2 rounded-lg w-full text-white font-medium" onClick={chamaConsole}>Enviar arquivo</button>
    </div>
  )
}