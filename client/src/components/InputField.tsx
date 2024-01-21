import React, { FC } from 'react';
import CustomButton from './CustomButton';

interface InputFieldProps {
  type?: 'text' | 'email' | 'number';
  value?: string;
  placeholder?: string;
  className?: string;
  buttonTitle: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: FC<InputFieldProps> = ({
  type = 'text',
  className = '',
  buttonTitle,
  placeholder = '',
  value,
  onChange,
}) => {
  return (
    <div className={`py-2 pl-[25px] pr-[50px] overflow-hidden relative bg-white rounded-md ${className}`}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        className={`w-full tracking-wide text-black outline-none `}
        onChange={onChange}
      />
      <CustomButton color="main" className="absolute top-0 bottom-0 right-0 px-3">
        {buttonTitle}
      </CustomButton>
    </div>
  );
};

export default InputField;
