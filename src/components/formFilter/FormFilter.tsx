import React from 'react';
import { SingleValue } from 'react-select';
import { ISetFilterPayload, OptionType } from '../../utils/utils';
import CustomSelect from '../customSelect/CustomSelect';
import styles from './formFilter.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter, setFilter } from '../../feature/filter/filterSlice';
import {
  useGetAgesOptionsQuery,
  useGetGenderOptionsQuery,
  useGetLevelsOptionsQuery,
  useGetStatesOptionsQuery,
} from '../../feature/api/apiSlice';

interface FormFilterProps {}
const FormFilter: React.FC<FormFilterProps> = () => {
  const filters = useSelector(selectFilter);
  const dispatch = useDispatch();

  function handleOption(option: SingleValue<OptionType>) {
    dispatch(setFilter(option as ISetFilterPayload));
  }

  console.log('filters', filters);
  const {
    data: ages,
    isLoading: agesIsLoading,
    isError: agesIsError,
  } = useGetAgesOptionsQuery('');

  const {
    data: states,
    isLoading: statesIsLoading,
    isError: statesIsError,
  } = useGetStatesOptionsQuery('');

  const {
    data: genderOptions,
    isLoading: genderIsLoading,
    isError: genderIsError,
  } = useGetGenderOptionsQuery('');

  const {
    data: levelsOptions,
    isLoading: levelsIsLoading,
    isError: levelsIsError,
  } = useGetLevelsOptionsQuery('');

  if (agesIsError || statesIsError || genderIsError || levelsIsError) {
    console.log('error');
  }

  return (
    <section className={styles.formFilter}>
      <h2>Filter Student Table By:</h2>
      <form>
        <CustomSelect
          options={ages}
          label="Age"
          onChange={handleOption}
          value={filters.age}
          isLoading={agesIsLoading}
          placeholder="select age"
        />
        <CustomSelect
          options={states}
          label="State"
          onChange={handleOption}
          value={filters.state}
          isLoading={statesIsLoading}
          placeholder="select state"
        />
        <CustomSelect
          options={levelsOptions}
          label="Level"
          onChange={handleOption}
          value={filters.level}
          isLoading={levelsIsLoading}
          placeholder="select level"
        />
        <CustomSelect
          options={genderOptions}
          label="Gender"
          onChange={handleOption}
          value={filters.gender}
          isLoading={genderIsLoading}
          placeholder="select gender"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default FormFilter;
