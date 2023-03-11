import React from 'react';
import FormFilter from '../components/formFilter/FormFilter';
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
      </main>
    </div>
  );
};

export default Home;
