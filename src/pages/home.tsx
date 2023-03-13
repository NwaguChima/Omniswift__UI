import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectStudentError,
  selectStudentList,
  selectStudentStatus,
} from '../feature/student/studentSlice';
import DataTable from '../components/dataTable/DataTable';
import FormFilter from '../components/formFilter/FormFilter';
import { getTableColumns } from '../utils/columns';
import styles from './home.module.scss';
import Spinner from '../components/spinner/Spinner';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const data = useSelector(selectStudentList);
  const status = useSelector(selectStudentStatus);
  const error = useSelector(selectStudentError);

  let content;

  if (status === 'failed') {
    console.log('error');
    content = <div className={styles.error}>Error: {`${error}`}</div>;
  } else if (status === 'loading' || status === 'idle') {
    content = (
      <div className={styles.loadingText}>
        <Spinner />
      </div>
    );
  } else if (status === 'success') {
    content = <DataTable data={data} columns={getTableColumns()} />;
  }

  return (
    <div className={styles.home}>
      <header>
        <h1>Student Data Table</h1>
      </header>
      <main>
        <FormFilter />
        {content}
      </main>
    </div>
  );
};

export default Home;
