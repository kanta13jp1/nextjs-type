import { useState } from 'react';

import { TextFieldType } from '../../data';

export const TextField = ({
  label,
  type,
  classes,
  value,
  error,
  helperText,
  onChange,
}: {
  label: string;
  type?: TextFieldType;
  classes?: string[];
  value: string;
  error: boolean;
  helperText?: string;
  onChange: (...args: any[]) => any;
}): JSX.Element => {
  const className = ['block', ...(classes ? classes : [])].join(' ');
  const [val, setValue] = useState(value);

  const handleChange = (event: any): void => {
    setValue(event.target.value);
    onChange(event);
  };

  return (
    <label className={className}>
      <span className="text-sm text-gray-700">{label}</span>
      <input
        type={type ? type : TextFieldType.Text}
        className="mt-1 block w-full rounded-md border-gray-300 focus:border-indigo-600"
        value={val}
        onChange={handleChange}
      />
      {error && <p className="mt-2 text-xs text-red-500">{helperText}</p>}
    </label>
  );
};

export default TextField;
