'use client'

import { useEffect, useState } from "react";

import InputFiles from "./inputFiles"
import TableItems from "./table"

export default function Teste() {

  const [file, setFile] = useState<unknown[]>([]);
  const [tableHeaders, setTableHeaders] = useState<[]>([])
  const salesTableHeaders = ['CNPJ*', 'ID da compra*', 'Valor total da compra*', 'Desconto Total da compra', 'Data e Hora da Compra*', 'CPF do consumidor', 'Nome do consumidor', 'Telefone do consumidor', 'E-mail do consumidor', 'Gênero do consumidor', 'Data de nascimento do consumidor', 'CEP do consumidor', 'Código do produto*', 'Nome do produto*', 'Quantidade do produto*', 'Valor do produto*', 'Desconto do produto', 'Observações']


  useEffect(() => {
    console.log(tableHeaders)
  }, [])

  return (
  <div className="grid pt-4 gap-2 justify-items-center content-center min-h-screen bg-slate-300 text-black" >
    <InputFiles setFile={setFile} setTableHeaders={setTableHeaders} file={file} tableHeaders={tableHeaders}/>
    <TableItems tableHeaders={tableHeaders} file={file} inputTableHeaders={salesTableHeaders}/>
  </div>
  )
}