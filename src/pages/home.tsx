import React from 'react';
import DataTable from '../components/dataTable/DataTable';
import FormFilter from '../components/formFilter/FormFilter';
import { getTableColumns } from '../utils/columns';
import { dummyData } from '../utils/dummy';
import styles from './home.module.scss';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className={styles.home}>
      <header>
        <h1>Student Data Table</h1>
      </header>
      <main>
        <FormFilter />
        <DataTable data={dummyData} columns={getTableColumns()} />
      </main>
    </div>
  );
};

export default Home;
