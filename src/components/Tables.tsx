import React from 'react'

const Tables = ({columns, renderRow, data}: {
    columns: { header: string; accessor: string; className?: string }[];
    renderRow: (item: any) => React.ReactNode;
    data: any[];
  }) => {
  return (
 <table className='table-auto w-full mt-4'>
    <thead>
        <tr className="text-left text-gray-500 text-sm">
            {columns.map((column)=>(
                <th key={column.accessor} className={column.className}>{column.header}</th>
            ))}
        </tr>
    </thead>
    <tbody>
    {data.map((item) => renderRow(item))}
    </tbody>
 </table>
  )
}

export default Tables