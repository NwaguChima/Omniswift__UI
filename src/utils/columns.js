import styles from '../components/dataTable/dataTable.module.scss';

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
        return (
          <a href="" className={styles.action}>
            Download Result
          </a>
        );
      },
    },
  ];
}
