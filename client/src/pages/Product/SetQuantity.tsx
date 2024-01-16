import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const btnStyles = 'text-normal md:text-lg lg:text-xl';

const SetQuantity = () => {
  return (
    <div className="flex items-center gap-10 px-4 py-3 bg-gray-100 rounded-full lg:py-4 lg:px-5">
      <button className={btnStyles}>
        <FaMinus />
      </button>
      <div className="font-medium">1</div>
      <button className={btnStyles}>
        <FaPlus />
      </button>
    </div>
  );
};

export default SetQuantity;
