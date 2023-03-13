import React from 'react';
import { useTable } from 'react-table';
import LOGO from '../../assets/logo.svg';
import PASSPORT from '../../assets/passport.svg';
import styles from './result.module.scss';

interface ResultProps {
  data: any;
  columns: any;
}

const Result: React.FC<ResultProps> = ({ data, columns }) => {
  const tableInstance = useTable({
    data,
    columns,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div className={styles.result}>
      <header>
        <img src={LOGO} alt="logo" className={styles.result__logo} />
        <div>
          <h1>FREMONT COLLEGE OF EDUCATION</h1>
          <p>
            <span>No.5 Raymond Osuman Street, PMB 2191</span>
            <span>Maitama, Abuja, Nigeria.</span>
          </p>
          <h2>Post Graduate Diploma in Education</h2>
          <p>Student First Semester Statement Of Result</p>
        </div>
        <img
          src={PASSPORT}
          alt="passport"
          className={styles.result__passport}
        />
      </header>
      <main className={styles.resultBody}>
        <div className={styles.resultBody__top}>
          <div className={styles.resultBody__top__left}>
            <div>
              <p>Matric No:</p>
              <span>Chukwuma James Nnamdi</span>
            </div>
            <div>
              <p>Level:</p>
              <span>100 level</span>
            </div>
          </div>
          <div className={styles.resultBody__top__right}>
            <div>
              <p>Reg No:</p>
              <span>FCE/PGDE/2021/002</span>
            </div>
            <div>
              <p>Session:</p>
              <span>2022/2023</span>
            </div>
          </div>
        </div>

        <div className={styles.resultBody__bottom}>
          <div className={styles.table__wrapper}>
            <table className={styles.table} {...getTableProps()}>
              <thead className={styles.table__head}>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => {
                      return (
                        <th {...column.getHeaderProps()}>
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
                        let actionStyle = '';
                        if (
                          cell?.column?.Header === 'Unit' ||
                          cell?.column?.Header === 'Grade' ||
                          cell?.column?.Header === 'Total Point'
                        ) {
                          actionStyle = 'center';
                        }
                        return (
                          <td
                            className={styles[actionStyle]}
                            {...cell.getCellProps()}
                          >
                            {cell.render('Cell')}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className={styles.average}>
            <div className={styles.average__top}>
              <p>UNTS</p>
              <p>UNTD</p>
              <p>GPTS</p>
              <p>GPTD</p>
              <p>GPATS</p>
              <p>GPATD</p>
            </div>
            <div className={styles.average__bottom}>
              <p>028</p>
              <p>028</p>
              <p>067</p>
              <p>067</p>
              <p>2.71</p>
              <p>2.71</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Result;
