import React from 'react';
import CustomSelect from '../customSelect/CustomSelect';
import styles from './formFilter.module.scss';

interface FormFilterProps {}
const FormFilter: React.FC<FormFilterProps> = () => {
  return (
    <section className={styles.formFilter}>
      <h2>Filter Student Table By:</h2>
      <form>
        <CustomSelect
          options={[
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
          ]}
          label="Gender"
          handleChange={() => {}}
          value="male"
          name="gender"
        />
        <CustomSelect
          options={[
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
          ]}
          label="Gender"
          handleChange={() => {}}
          value="male"
          name="gender"
        />
        <CustomSelect
          options={[
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
          ]}
          label="Gender"
          handleChange={() => {}}
          value="male"
          name="gender"
        />
        <CustomSelect
          options={[
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
          ]}
          label="Gender"
          handleChange={() => {}}
          value="male"
          name="gender"
        />
        <CustomSelect
          options={[
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
          ]}
          label="Gender"
          handleChange={() => {}}
          value="male"
          name="gender"
        />
      </form>
    </section>
  );
};

export default FormFilter;
