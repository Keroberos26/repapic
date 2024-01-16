import React, { ReactElement } from 'react';

interface FieldProps {
  icon: ReactElement;
  placeholder: string;
  className?: string;
  value?: string | number;
  type?: 'email' | 'text' | 'number' | 'password';
  onChange?: React.ChangeEventHandler;
}

const Field: React.FC<FieldProps> = ({ icon, placeholder, className = '', value, type = 'text', onChange }) => {
  return (
    <div className={`px-[16px] py-[12px] h-[48px] bg-gray-100 rounded-full inline-flex items-center ${className}`}>
      <div className="mr-[12px] text-opacity-40 text-black">{icon}</div>
      <div className="flex-grow">
        <input
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Field;
