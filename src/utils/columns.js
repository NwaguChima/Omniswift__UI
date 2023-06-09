import styles from '../components/dataTable/dataTable.module.scss';
import ResultWrapper from '../components/resultWrapper/ResultWrapper.tsx';

export function getTableColumns() {
  return [
    {
      Header: 'S/N',
      accessor: 'id',
    },
    {
      Header: 'Surname',
      accessor: 'surname',
    },
    {
      Header: 'First Name',
      accessor: 'firstname',
    },
    {
      Header: 'Age',
      accessor: 'age',
    },
    {
      Header: 'Gender',
      accessor: 'gender',
    },
    {
      Header: 'Level',
      accessor: 'level',
      Cell: ({ row }) => {
        let value = row.original.level;
        if (typeof value === 'number') {
          value = `${value}00 Level`;
        }

        return value;
      },
    },
    {
      Header: 'State',
      accessor: 'state',
    },
    {
      Header: 'Action',
      accessor: '',
      Cell: ({ row }) => {
        let id = row.original.id;
        return <ResultWrapper id={id} />;
      },
    },
  ];
}

export function getResColumns() {
  return [
    {
      Header: 'S/N',
      accessor: 'id',
    },
    {
      Header: 'Course Code',
      accessor: 'coursecode',
    },
    {
      Header: 'Course Title',
      accessor: 'title',
    },
    {
      Header: 'Unit',
      accessor: 'credit_unit',
    },
    {
      Header: 'Grade',
      accessor: 'grade',
    },
    {
      Header: 'Total Point',
      accessor: 'total_point',
    },
  ];
}

// export const resCols = [
//   {
//     Header: 'S/N',
//     accessor: 'id',
//   },
//   {
//     Header: 'Course Code',
//     accessor: 'courseCode',
//   },
//   {
//     Header: 'Course Title',
//     accessor: 'courseTitle',
//   },
//   {
//     Header: 'Unit',
//     accessor: 'unit',
//   },
//   {
//     Header: 'Grade',
//     accessor: 'grade',
//   },
//   {
//     Header: 'Total Point',
//     accessor: 'totalPoint',
//   },
// ];
