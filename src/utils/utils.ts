export interface OptionType {
  value: string | number;
  label: string;
  name: string;
}

export interface IFilters {
  age: string | number;
  level: string;
  gender: string;
  state: string;
}

export const defaultFilterData: IFilters = {
  age: '',
  state: '',
  level: '',
  gender: '',
};

export interface ISetFilterPayload {
  name: keyof IFilters;
  value: string | number;
}
