import React, { useState } from 'react';
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
  const [isLoading, setIsLoading] = React.useState(false);
  const [value, setValue] = useState(undefined);

  return (
    <section className={styles.formFilter}>
      <h2>Filter Student Table By:</h2>
      <form>
        <CustomSelect
          options={getAgeOptions()}
          label="Age"
          onChange={() => {}}
          value={value}
          name="age"
          isLoading={isLoading}
          placeholder="select age"
        />
        <CustomSelect
          options={stateOptions}
          label="State"
          onChange={() => {}}
          //   value={stateOptions[0].value}
          name="state"
          isLoading={isLoading}
          placeholder="select state"
        />
        <CustomSelect
          options={levelOptions}
          label="Level"
          onChange={() => {}}
          value={levelOptions[0].value}
          name="level"
          isLoading={isLoading}
          placeholder="select level"
        />
        <CustomSelect
          options={genderOptions}
          label="Gender"
          onChange={() => {}}
          value={genderOptions[0].value}
          name="gender"
          isLoading={isLoading}
          placeholder="select gender"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default FormFilter;
