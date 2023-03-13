import React, { useState } from 'react';
import { SingleValue } from 'react-select';
import {
  genderOptions,
  getAgeOptions,
  ISetFilterPayload,
  levelOptions,
  OptionType,
  stateOptions,
} from '../../utils/utils';
import CustomSelect from '../customSelect/CustomSelect';
import styles from './formFilter.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter, setFilter } from '../../feature/filter/filterSlice';

interface FormFilterProps {}
const FormFilter: React.FC<FormFilterProps> = () => {
  const [isLoading, setIsLoading] = useState(false);
  const filters = useSelector(selectFilter);
  const dispatch = useDispatch();

  function handleOption(option: SingleValue<OptionType>) {
    dispatch(setFilter(option as ISetFilterPayload));
  }

  console.log('filters', filters);

  return (
    <section className={styles.formFilter}>
      <h2>Filter Student Table By:</h2>
      <form>
        <CustomSelect
          options={getAgeOptions()}
          label="Age"
          onChange={handleOption}
          value={filters.age}
          isLoading={isLoading}
          placeholder="select age"
        />
        <CustomSelect
          options={stateOptions}
          label="State"
          onChange={handleOption}
          value={filters.state}
          isLoading={isLoading}
          placeholder="select state"
        />
        <CustomSelect
          options={levelOptions}
          label="Level"
          onChange={handleOption}
          value={filters.level}
          isLoading={isLoading}
          placeholder="select level"
        />
        <CustomSelect
          options={genderOptions}
          label="Gender"
          onChange={handleOption}
          value={filters.gender}
          isLoading={isLoading}
          placeholder="select gender"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default FormFilter;
