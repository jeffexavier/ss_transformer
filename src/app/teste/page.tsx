'use client'

import { useEffect, useState } from "react";

import InputFiles from "./inputFiles"
import Table from "./table"
import { headers } from "next/headers";
import { table } from "console";

export default function Teste() {

  const [file, setFile] = useState<unknown[]>([]);
  const [tableHeaders, setTableHeaders] = useState<[]>([])
  const teste = ['teste', 'teste', 'teste']


  useEffect(() => {
    console.log(tableHeaders)
  }, [])

  return (
  <div className="p-4 grid gap-4 justify-items-center content-center h-screen bg-slate-300 text-black" >
    <InputFiles setFile={setFile} setTableHeaders={setTableHeaders} file={file} tableHeaders={tableHeaders}/>
    <Table tableHeaders={tableHeaders}/>
  </div>
  )
}