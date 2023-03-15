import { useEffect, useRef, useState } from 'react';
import { useTable } from 'react-table';
import styles from './result.module.scss';
import { PDFExport } from '@progress/kendo-react-pdf';
let testD = [
  {
    id: 1,
    coursecode: 'PDE 701',
    title: 'Measurement and Evaluation',
    credit_unit: 3,
    grade: 'A',
    total_point: 9,
  },
  {
    id: 1,
    coursecode: 'PDE 701',
    title: 'Measurement and Evaluation',
    credit_unit: 3,
    grade: 'A',
    total_point: 9,
  },
];

const Result = ({ data, columns, rowsData }) => {
  const [editedData, setEditedData] = useState([]);
  useEffect(() => {
    const newData = rowsData.map((row, index) => {
      return { ...row, id: index + 1 };
    });
    setEditedData(newData);
  }, [rowsData]);

  const pdfExportComponent = useRef(null);

  const tableInstance = useTable({
    data: editedData,
    columns,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  const handleExportWithComponent = (event) => {
    pdfExportComponent.current?.save();
  };

  return (
    <PDFExport ref={pdfExportComponent}>
      <div className={styles.result}>
        <header>
          <img src={data.logo} alt="logo" className={styles.result__logo} />
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
            src={data.profile_picture}
            alt="passport"
            className={styles.result__passport}
          />
        </header>
        <main className={styles.resultBody}>
          <div className={styles.resultBody__top}>
            <div className={styles.resultBody__top__left}>
              <div>
                <p>Name:</p>
                <span>{data.data.firstname + ' ' + data.data.surname}</span>
              </div>
              <div>
                <p>Level:</p>
                <span>{data.data.level}</span>
              </div>
            </div>
            <div className={styles.resultBody__top__right}>
              <div>
                <p>Reg No:</p>
                <span>{data.data.reg_no}</span>
              </div>
              <div>
                <p>Session:</p>
                <span>{data.data.session}</span>
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
                <p>{data.data.cummulative?.unts}</p>
                <p>{data.data.cummulative?.untd}</p>
                <p>{data.data.cummulative?.gpts}</p>
                <p>{data.data.cummulative?.gptd}</p>
                <p>{data.data.cummulative?.gpats}</p>
                <p>{data.data.cummulative?.gpatd}</p>
              </div>
            </div>

            <p className={styles.remarks} onClick={handleExportWithComponent}>
              <span>Remark:</span>
              <span>{data.data.cummulative?.remarks}</span>
            </p>

            <div className={styles.signature}>
              <span>_________________________</span>
              <p>Registrar</p>
            </div>
          </div>
        </main>
      </div>
    </PDFExport>
  );
};

export default Result;
