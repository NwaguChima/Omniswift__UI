export function getAgeOptions() {
  const ageOptions = [];
  for (let i = 12; i <= 60; i++) {
    ageOptions.push({ value: i, label: `${i}`, name: 'age' });
  }
  return ageOptions;
}

export const levelOptions = [
  { value: '100', label: '100', name: 'level' },
  { value: '200', label: '200', name: 'level' },
  { value: '300', label: '300', name: 'level' },
  { value: '400', label: '400', name: 'level' },
  { value: '500', label: '500', name: 'level' },
  { value: '600', label: '600', name: 'level' },
  { value: '700', label: '700', name: 'level' },
];

export const genderOptions = [
  { value: 'male', label: 'Male', name: 'gender' },
  { value: 'female', label: 'Female', name: 'gender' },
];

// it is hardcode values, since they will not change anytime soon and it is not a good idea to make a request to the server for this data every time the component is mounted or re-rendered.
export const stateOptions = [
  { value: 'abia', label: 'Abia', name: 'state' },
  { value: 'adamawa', label: 'Adamawa', name: 'state' },
  { value: 'akwa-ibom', label: 'Akwa Ibom', name: 'state' },
  { value: 'anambra', label: 'Anambra', name: 'state' },
  { value: 'bauchi', label: 'Bauchi', name: 'state' },
  { value: 'bayelsa', label: 'Bayelsa', name: 'state' },
  { value: 'benue', label: 'Benue', name: 'state' },
  { value: 'borno', label: 'Borno', name: 'state' },
  { value: 'cross-river', label: 'Cross River', name: 'state' },
  { value: 'delta', label: 'Delta', name: 'state' },
  { value: 'ebonyi', label: 'Ebonyi', name: 'state' },
  { value: 'edo', label: 'Edo', name: 'state' },
  { value: 'ekiti', label: 'Ekiti', name: 'state' },
  { value: 'enugu', label: 'Enugu', name: 'state' },
  { value: 'gombe', label: 'Gombe', name: 'state' },
  { value: 'imo', label: 'Imo', name: 'state' },
  { value: 'jigawa', label: 'Jigawa', name: 'state' },
  { value: 'kaduna', label: 'Kaduna', name: 'state' },
  { value: 'kano', label: 'Kano', name: 'state' },
  { value: 'katsina', label: 'Katsina', name: 'state' },
  { value: 'kebbi', label: 'Kebbi', name: 'state' },
  { value: 'kogi', label: 'Kogi', name: 'state' },
  { value: 'kwara', label: 'Kwara', name: 'state' },
  { value: 'lagos', label: 'Lagos', name: 'state' },
  { value: 'nasarawa', label: 'Nasarawa', name: 'state' },
  { value: 'niger', label: 'Niger', name: 'state' },
  { value: 'ogun', label: 'Ogun', name: 'state' },
  { value: 'ondo', label: 'Ondo', name: 'state' },
  { value: 'osun', label: 'Osun', name: 'state' },
  { value: 'oyo', label: 'Oyo', name: 'state' },
  { value: 'plateau', label: 'Plateau', name: 'state' },
  { value: 'rivers', label: 'Rivers', name: 'state' },
  { value: 'sokoto', label: 'Sokoto', name: 'state' },
  { value: 'taraba', label: 'Taraba', name: 'state' },
  { value: 'yobe', label: 'Yobe', name: 'state' },
  { value: 'zamfara', label: 'Zamfara', name: 'state' },
  { value: 'fct', label: 'FCT', name: 'state' },
];

export interface OptionType {
  value: string | number;
  label: string;
  name: string;
}

export interface DataType {
  age: string;
  level: string;
  gender: string;
  state: string;
}

export const defaultData: DataType = {
  age: '',
  state: '',
  level: '',
  gender: '',
};

export function getTableColumns() {
  return [
    {
      Header: 'S/N',
      accessor: 'id',
    },
    {
      Header: 'Surname',
      accessor: 'surname',
    },
    {
      Header: 'First Name',
      accessor: 'first_name',
    },
    {
      Header: 'Age',
      accessor: 'age',
    },
    {
      Header: 'Gender',
      accessor: 'gender',
    },
    {
      Header: 'Level',
      accessor: 'level',
    },
    {
      Header: 'State',
      accessor: 'state',
    },
    {
      Header: 'Action',
      accessor: 'action',
      Cell: ({ row }: any) => {},
    },
  ];
}
