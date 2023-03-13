import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchStudentList,
  selectStudentList,
} from '../feature/student/studentSlice';
import DataTable from '../components/dataTable/DataTable';
import FormFilter from '../components/formFilter/FormFilter';
import { useGetStudentsQuery } from '../feature/api/apiSlice';
import { getTableColumns } from '../utils/columns';
import { dummyData } from '../utils/dummy';
import styles from './home.module.scss';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const dispatch = useDispatch();

  const {
    data: students,
    error,
    isLoading,
    isSuccess,
    isError,
  } = useGetStudentsQuery('');

  console.log('students---------->>>>>.', students);

  return (
    <div className={styles.home}>
      <header>
        <h1>Student Data Table</h1>
      </header>
      <main>
        <FormFilter />
        {!isLoading && !isError && (
          <DataTable data={students} columns={getTableColumns()} />
        )}
      </main>
    </div>
  );
};

export default Home;
