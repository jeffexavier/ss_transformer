export default function Table({tableHeaders}:any) {

  return (
    <div>
      <div className="flex gap-4 bg-yellow-200">
        {tableHeaders.map((item:any, index:number)=>(
          <div>
            {item}
          </div>
        ))}
      </div>
      <div className="flex gap-4 bg-red-400">
        {tableHeaders.map((item:any, index:number)=>(
          <div>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}