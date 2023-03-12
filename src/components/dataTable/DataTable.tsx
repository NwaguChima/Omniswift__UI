import React from 'react';
import styles from './dataTable.module.scss';

interface DataTableProps {}

const DataTable: React.FC<DataTableProps> = () => {
  return (
    <section className={styles.dataTable}>
      <div>Hellooooooooooo</div>
    </section>
  );
};

export default DataTable;
