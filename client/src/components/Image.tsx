import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  loading?: 'lazy' | 'eager';
  className?: string;
  rounded?: number;
}

const Image: React.FC<ImageProps> = ({ src, alt, loading, className = '', rounded }) => {
  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      className={`object-cover select-none ${className}`}
      style={{ borderRadius: rounded }}
    />
  );
};

export default Image;
