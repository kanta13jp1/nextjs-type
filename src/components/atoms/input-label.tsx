export const InputLabel = ({
  value,
  fullWidth = false,
  classes = [],
}: {
  value: string | number;
  fullWidth?: boolean;
  classes?: string[];
}): JSX.Element => {
  return (
    <input
      disabled
      type="text"
      className={`block rounded-md border-gray-300 bg-gray-100/25 text-gray-500 ${classes.join(
        ' ',
      )} ${fullWidth && 'w-full'}`}
      value={value}
    />
  );
};

export default InputLabel;
