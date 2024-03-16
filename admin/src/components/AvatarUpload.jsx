import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CameraPlus } from './Icons';

const AvatarUpload = ({ size, className, onChange, error = false }) => {
  const uploadRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const styled = classNames(className, 'p-2 border rounded-full border-dashed select-none', {
    'size-36': !size,
    'size-32': size === 'small',
    'size-40': size === 'large',
    'opacity-75': isDragging,
    'border-error': error,
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageSrc(URL.createObjectURL(file));
      onChange && onChange(e);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
    const hasFiles = Array.from(e.dataTransfer.types).some((type) => type === 'Files');
    if (hasFiles) {
      e.dataTransfer.dropEffect = 'copy';
    } else {
      e.dataTransfer.dropEffect = 'none';
    }
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setImageSrc(URL.createObjectURL(file));
      onChange && onChange(file);
    }
  };

  return (
    <div className={styled}>
      <input type="file" accept="image/*" id="avatar" className="hidden" ref={uploadRef} onChange={handleFileChange} />
      <div
        className="relative w-full h-full bg-[#919eab14] rounded-full"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="w-full h-full overflow-hidden rounded-full">
          {imageSrc && <img src={imageSrc} alt="Avatar" className="object-cover w-full h-full aspect-square" />}
        </div>
        <div
          className={classNames(
            'absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center gap-2 transition-opacity duration-200 rounded-full cursor-pointer text-fader hover:opacity-[0.72]',
            { 'opacity-0 hover:bg-[#161c24a3] hover:opacity-100 text-white': !!imageSrc },
          )}
          onClick={() => uploadRef.current.click()}
        >
          <CameraPlus width={32} height={32} />
          <span className="text-xs">Upload photo</span>
        </div>
      </div>
    </div>
  );
};

AvatarUpload.propTypes = {
  size: PropTypes.oneOf(['small', 'large']),
  className: PropTypes.string,
  onUpload: PropTypes.func,
  error: PropTypes.bool,
};

export default AvatarUpload;
