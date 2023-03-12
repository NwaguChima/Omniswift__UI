import React from 'react';
import { useTable } from 'react-table';
import styles from './dataTable.module.scss';

interface DataTableProps {
  data: any;
  columns: any;
}

const DataTable: React.FC<DataTableProps> = ({ data, columns }) => {
  const tableInstance = useTable({
    data,
    columns,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <section className={styles.dataTable}>
      <table className={styles.dataTable__table} {...getTableProps()}>
        <thead className={styles.table__head}>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className={styles.table__body} {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);

            return (
              <tr className={''} {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default DataTable;
