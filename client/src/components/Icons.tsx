import React, { FC } from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

const InfoIcon: FC<IconProps> = ({ width = '1em', height = '1em', className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m1 14a1 1 0 0 1-2 0v-5a1 1 0 0 1 2 0Zm-1-7a1 1 0 1 1 1-1a1 1 0 0 1-1 1"
      ></path>
    </svg>
  );
};

export { InfoIcon };
