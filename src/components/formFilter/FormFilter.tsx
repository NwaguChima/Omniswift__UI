import React from 'react';
import {
  genderOptions,
  getAgeOptions,
  levelOptions,
  stateOptions,
} from '../../utils/utils';
import CustomSelect from '../customSelect/CustomSelect';
import styles from './formFilter.module.scss';

interface FormFilterProps {}
const FormFilter: React.FC<FormFilterProps> = () => {
  return (
    <section className={styles.formFilter}>
      <h2>Filter Student Table By:</h2>
      <form>
        <CustomSelect
          options={getAgeOptions()}
          label="Age"
          handleChange={() => {}}
          value={getAgeOptions()[0].value}
          name="age"
        />
        <CustomSelect
          options={stateOptions}
          label="State"
          handleChange={() => {}}
          value={stateOptions[0].value}
          name="state"
        />
        <CustomSelect
          options={levelOptions}
          label="Level"
          handleChange={() => {}}
          value={levelOptions[0].value}
          name="level"
        />
        <CustomSelect
          options={genderOptions}
          label="Gender"
          handleChange={() => {}}
          value={genderOptions[0].value}
          name="gender"
        />
        <button>Search</button>
      </form>
    </section>
  );
};

export default FormFilter;
