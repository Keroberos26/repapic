import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  rounded?: number;
}

const Image: React.FC<ImageProps> = ({ src, alt, className, rounded }) => {
  return (
    <img src={src} alt={alt} className={`object-cover select-none ${className}`} style={{ borderRadius: rounded }} />
  );
};

export default Image;
