import React, { useState } from 'react';
import { SingleValue } from 'react-select';
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
  const [data, setData] = useState<{
    age: string;
    state: string;
    level: string;
    gender: string;
  }>({
    age: '',
    state: '',
    level: '',
    gender: '',
  });

  function handleOption(
    option: SingleValue<{
      value: string | number;
      label: string;
      name: string | undefined;
    }>
  ) {
    setData({ ...data, [option?.name as string]: option?.value });
  }

  return (
    <section className={styles.formFilter}>
      <h2>Filter Student Table By:</h2>
      <form>
        <CustomSelect
          options={getAgeOptions()}
          label="Age"
          onChange={handleOption}
          value={data.age}
          name="age"
          isLoading={isLoading}
          placeholder="select age"
        />
        <CustomSelect
          options={stateOptions}
          label="State"
          onChange={handleOption}
          value={data.state}
          name="state"
          isLoading={isLoading}
          placeholder="select state"
        />
        <CustomSelect
          options={levelOptions}
          label="Level"
          onChange={handleOption}
          value={data.level}
          name="level"
          isLoading={isLoading}
          placeholder="select level"
        />
        <CustomSelect
          options={genderOptions}
          label="Gender"
          onChange={handleOption}
          value={data.gender}
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
