import { FC } from 'react';
import { GoSearch } from 'react-icons/go';
import CustomButton from './CustomButton';

interface InputFieldProps {
  value?: string;
  placeholder?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: FC<InputFieldProps> = ({ className = '', placeholder = '', value, onChange }) => {
  return (
    <div className="py-2 pl-[25px] pr-[50px] overflow-hidden relative bg-white rounded-md">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        className={`w-full tracking-wide text-black outline-none ${className}`}
        onChange={onChange}
      />
      <CustomButton color="main" className="absolute top-0 bottom-0 right-0 px-3">
        <GoSearch />
      </CustomButton>
    </div>
  );
};

export default InputField;
