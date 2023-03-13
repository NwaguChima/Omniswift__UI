import React from 'react';
import { useTable } from 'react-table';
// import { useGetStudentsQuery } from '../../feature/api/apiSlice';
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

  // const {
  //   data: students,
  //   error,
  //   isLoading,
  //   isSuccess,
  //   isError,
  // } = useGetStudentsQuery();

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <section className={styles.table__container}>
      <div className={styles.table__wrapper}>
        <table className={styles.table} {...getTableProps()}>
          <thead className={styles.table__head}>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => {
                  let actionStyle = column?.Header === 'Action' ? 'center' : '';
                  return (
                    <th
                      className={styles[actionStyle]}
                      {...column.getHeaderProps()}
                    >
                      {column.render('Header')}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody className={styles.table__body} {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);

              return (
                <tr {...row.getRowProps()}>
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
      </div>
    </section>
  );
};

export default DataTable;
