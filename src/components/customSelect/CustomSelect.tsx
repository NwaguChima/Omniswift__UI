import React from 'react';
import Select, { GroupBase, SingleValue, StylesConfig } from 'react-select';
import { OptionType } from '../../utils/utils';
import styles from './customSelect.module.scss';

interface CustomSelectProps {
  options: OptionType[];
  label: string;
  onChange: (e: SingleValue<OptionType>) => void;
  value?: string | number;
  name: string;
  isLoading?: boolean;
  placeholder: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  label,
  onChange,
  value,
  name,
  isLoading,
  placeholder,
}) => {
  const defaultValue = (
    options: OptionType[],
    value: string | number | undefined
  ) => {
    return options ? options.find((option) => option.value === value) : '';
  };

  const selectStyles: StylesConfig<OptionType, false, GroupBase<OptionType>> = {
    control: (base, state) => ({
      ...base,
      width: '100%',
      color: '#7a869a',
      background: 'transparent',
      border: state.isFocused ? 'none' : 'none',
      fontSize: '14px',
      borderRadius: '3px',
      marginTop: '-5px',
      boxShadow: state.isFocused ? 'none' : 'none',
    }),
    option: (base: any, state: any) => ({
      ...base,
      color: '#7a869a',
      background:
        state.isFocused || state.isSelected ? '#e5e5e5' : 'transparent',
      fontSize: '14px',
      padding: '10px',
      cursor: 'pointer',
    }),

    singleValue: (base: any, state: any) => ({
      ...base,
      color: '#7a869a',
      fontSize: '14px',
      background: 'transparent',
    }),

    placeholder: (base: any, state: any) => ({
      ...base,
      color: '#adb7be',
      fontSize: '14px',
    }),

    valueContainer: (base: any, state: any) => ({
      ...base,
      padding: '0 10px',
    }),

    input: (base: any, state: any) => ({
      ...base,
      color: '#7a869a',
      fontSize: '14px',
    }),

    noOptionsMessage: (base: any, state: any) => ({
      ...base,
      color: '#7a869a',
      fontSize: '14px',
    }),

    menuList: (base: any, state: any) => ({
      ...base,
      padding: '0',
    }),

    container: (base: any, state: any) => ({
      ...base,
      width: '100%',
    }),
  };

  return (
    <div className={styles.select}>
      <fieldset>
        <legend>{label}</legend>
        <div className={styles.select__holder}>
          <Select
            value={defaultValue(options, value) || null}
            onChange={(value) => onChange(value)}
            options={options}
            isSearchable={true}
            isLoading={isLoading}
            isDisabled={isLoading}
            components={{
              IndicatorSeparator: () => null,
            }}
            placeholder={placeholder}
            styles={selectStyles}
          />
        </div>
      </fieldset>
    </div>
  );
};

export default CustomSelect;
