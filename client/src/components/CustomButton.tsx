import { CircularProgress } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

interface CustomButtonProps {
  children: React.ReactNode;
  color: 'primary' | 'secondary' | 'main';
  outline?: boolean;
  to?: string;
  size?: 'small' | 'large';
  className?: string;
  block?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  loading?: boolean;
  justify?: 'center' | 'between' | 'start' | 'end';
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  color,
  outline,
  to,
  size,
  className,
  rounded,
  block,
  disabled,
  loading,
  justify = 'center',
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) => {
  let Comp: any = 'button';

  const props: any = { onClick, ...passProps };

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = disabled ? '#' : to;
    Comp = Link;
  }

  if (to) {
    Comp = Link;
  }

  let customClass: string = className || '';

  // Size
  customClass += ' inline-flex items-center transition-all duration-300 border-2 font-medium select-none gap-1';
  customClass += ' justify-' + justify;

  if (size === 'small') {
    customClass += ' py-1 px-5 text-sm';
  } else if (size === 'large') {
    customClass += ' py-3 px-16 text-lg';
  } else {
    customClass += ' py-2 px-10';
  }

  // Type and color
  if (outline) {
    customClass += ' bg-transparent hover:text-white';
    if (color === 'primary') {
      customClass += ' border-primary hover:bg-primary text-primary';
    }
    if (color === 'secondary') {
      customClass += ' border-secondary hover:bg-secondary text-secondary';
    }
    if (color === 'main') {
      customClass += ' border-main hover:bg-main text-main';
    }
  } else {
    customClass += '';
    if (color === 'primary') {
      customClass += ' border-primary bg-primary hover:bg-sub hover:border-sub text-white';
    }
    if (color === 'secondary') {
      customClass += ' border-secondary bg-secondary hover:bg-main hover:border-main text-white';
    }
    if (color === 'main') {
      customClass += ' border-main bg-main hover:bg-secondary hover:border-secondary text-primary hover:text-white';
    }
  }

  // Rounded
  customClass += rounded ? ' rounded-full' : '';

  //Disabled
  customClass += disabled || loading ? '  opacity-50 pointer-events-none cursor-not-allowed' : '';

  //Block
  customClass += block ? ' w-full' : '';

  return (
    <Comp className={customClass} {...props} disabled={disabled}>
      {loading ? (
        <CircularProgress
          size={size === 'small' ? 20 : size === 'large' ? 28 : 24}
          sx={{ color: `var(--${color}-color)` }}
        />
      ) : (
        <>
          {leftIcon && <span>{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span>{rightIcon}</span>}
        </>
      )}
    </Comp>
  );
};

export default CustomButton;
