import React from 'react';
import styles from './customSelect.module.scss';

interface CustomSelectProps {
  options: { value: string | number; label: string }[];
  label: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string | number;
  name: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  label,
  handleChange,
  value,
  name,
}) => {
  return (
    <div className={styles.select}>
      <fieldset>
        <legend>{label}</legend>
        <div className={styles.select__holder}>
          <select name={name} onChange={(e) => handleChange(e)}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
    </div>
  );
};

export default CustomSelect;
