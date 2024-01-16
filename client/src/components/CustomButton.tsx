import React from 'react';
import { Link } from 'react-router-dom';

interface CustomButtonProps {
  children: React.ReactNode;
  color: 'primary' | 'secondary';
  outline?: boolean;
  to?: string;
  size?: 'small' | 'large';
  className?: string;
  block?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  onClick?: () => void;
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
  customClass += ' inline-flex items-center justify-center transition-all border-2 font-medium select-none';
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
  } else {
    customClass += ' text-white';
    if (color === 'primary') {
      customClass += ' border-primary bg-primary hover:bg-sub hover:border-sub';
    }
    if (color === 'secondary') {
      customClass += ' border-secondary bg-secondary hover:bg-main hover:border-main';
    }
  }

  // Rounded
  customClass += rounded ? ' rounded-full' : '';

  //Disabled
  customClass += disabled ? '  opacity-50 pointer-events-none' : '';

  //Block
  customClass += block ? ' w-full' : '';

  return (
    <Comp className={customClass} {...props} disabled={disabled}>
      {leftIcon && <span>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span>{rightIcon}</span>}
    </Comp>
  );
};

export default CustomButton;
