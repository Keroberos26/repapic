import React, { useEffect, useRef, useState } from 'react';
import { Button, Link, OutlinedInput } from '../../components';
import config from '../../config';
import { useDocumentTitle, useLoading } from '../../hooks';
import { FormHelperText } from '@mui/material';

const Verify = () => {
  useDocumentTitle('Xác nhận email');
  const inputsRef = useRef([]);
  const [error, setError] = useState('');
  const { setProgress } = useLoading();

  useEffect(() => {
    setProgress(0);
    inputsRef.current[0].focus();
    setProgress(100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event) => {
    const value = event.target.value;
    const nextElementSibling = event.target.parentElement?.nextElementSibling?.firstChild;

    setError('');
    inputsRef.current.forEach((el) => {
      if (!el.value) {
        setError('Mã xác nhận phải gồm 6 chữ số');
        return;
      }
    });

    if (value.length > 1) {
      event.target.value = value.charAt(0);
      nextElementSibling?.focus();
    } else {
      if (value.match('[0-9]{1}')) {
        nextElementSibling?.focus();
      } else {
        event.target.value = '';
      }
    }
  };

  const handleKeyDown = (event) => {
    const { target, key } = event;
    const previousElementSibling = target.parentElement?.previousElementSibling?.firstChild;
    if (key === 'Backspace') {
      target.value = '';
      previousElementSibling?.focus();
      event.preventDefault();
    }
  };

  const handleFocus = (event) => {
    event.target.select();
  };

  const handlePaste = (event) => {
    event.preventDefault();
    const pastedValue = event.clipboardData.getData('Text');
    if (pastedValue.match('[0-9]{6}')) {
      for (let i = 0; i < pastedValue.length; i++) {
        inputsRef.current[i].value = pastedValue.charAt(i);
      }
      setError('');
    }
  };

  return (
    <div className="max-w-[420px] w-full bg-white rounded-2xl py-10 px-6 shadow-sm">
      <div className="h-24">
        <svg className="h-full mx-auto" fill="none" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_di_1870_133886)">
            <path
              fill="#FFD666"
              fillRule="evenodd"
              d="M16 20.01v19.82c0 2.618 1.272 5.067 3.463 6.502C26.233 50.768 41.16 60.01 48 60.01s21.767-9.242 28.537-13.678C78.727 44.897 80 42.448 80 39.83V20.01c0-6.628-5.373-12-12-12H28c-6.627 0-12 5.372-12 12zm15 0a3 3 0 000 6h18a3 3 0 000-6H31zm0 14a3 3 0 000 6h30a3 3 0 000-6H31z"
              clipRule="evenodd"
            ></path>
          </g>
          <g filter="url(#filter1_i_1870_133886)" style={{ mixBlendMode: 'overlay' }}>
            <path
              fill="#fff"
              fillOpacity="0.04"
              fillRule="evenodd"
              d="M16 20.01v19.82c0 2.618 1.272 5.067 3.463 6.502C26.233 50.768 41.16 60.01 48 60.01s21.767-9.242 28.537-13.678C78.727 44.897 80 42.448 80 39.83V20.01c0-6.628-5.373-12-12-12H28c-6.627 0-12 5.372-12 12zm15 0a3 3 0 000 6h18a3 3 0 000-6H31zm0 14a3 3 0 000 6h30a3 3 0 000-6H31z"
              clipRule="evenodd"
            ></path>
          </g>
          <path
            fill="#B76E00"
            d="M28 23.01a3 3 0 013-3h18a3 3 0 010 6H31a3 3 0 01-3-3zM28 37.01a3 3 0 013-3h30a3 3 0 010 6H31a3 3 0 01-3-3z"
          ></path>
          <path
            fill="#00A76F"
            d="M16 25.014a266.095 266.095 0 00-5.284 4.026c-2.408 1.883-3.918 4.66-4.121 7.71C6.317 40.9 6 47.868 6 58.01c0 9.591.568 16.343 1.098 20.558.438 3.476 2.765 6.232 6.196 6.94 5.5 1.136 16.005 2.502 34.706 2.502 18.701 0 29.206-1.366 34.706-2.502 3.431-.708 5.758-3.464 6.196-6.94C89.432 74.353 90 67.601 90 58.01c0-10.142-.317-17.11-.595-21.26-.203-3.05-1.713-5.827-4.12-7.71A266.095 266.095 0 0080 25.014V39.83c0 2.619-1.272 5.067-3.463 6.502C69.767 50.768 54.84 60.01 48 60.01s-21.767-9.242-28.537-13.678C17.273 44.897 16 42.45 16 39.83V25.014z"
          ></path>
          <g filter="url(#filter2_i_1870_133886)" style={{ mixBlendMode: 'overlay' }}>
            <path
              fill="#fff"
              fillOpacity="0.04"
              d="M16 25.014a266.095 266.095 0 00-5.284 4.026c-2.408 1.883-3.918 4.66-4.121 7.71C6.317 40.9 6 47.868 6 58.01c0 9.591.568 16.343 1.098 20.558.438 3.476 2.765 6.232 6.196 6.94 5.5 1.136 16.005 2.502 34.706 2.502 18.701 0 29.206-1.366 34.706-2.502 3.431-.708 5.758-3.464 6.196-6.94C89.432 74.353 90 67.601 90 58.01c0-10.142-.317-17.11-.595-21.26-.203-3.05-1.713-5.827-4.12-7.71A266.095 266.095 0 0080 25.014V39.83c0 2.619-1.272 5.067-3.463 6.502C69.767 50.768 54.84 60.01 48 60.01s-21.767-9.242-28.537-13.678C17.273 44.897 16 42.45 16 39.83V25.014z"
            ></path>
          </g>
          <defs>
            <filter
              id="filter0_di_1870_133886"
              width="80"
              height="68"
              x="12"
              y="4.01"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              ></feColorMatrix>
              <feOffset dx="4" dy="4"></feOffset>
              <feGaussianBlur stdDeviation="4"></feGaussianBlur>
              <feColorMatrix values="0 0 0 0 0.717647 0 0 0 0 0.431373 0 0 0 0 0 0 0 0 0.16 0"></feColorMatrix>
              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1870_133886"></feBlend>
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1870_133886" result="shape"></feBlend>
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              ></feColorMatrix>
              <feOffset dx="-1" dy="-1"></feOffset>
              <feGaussianBlur stdDeviation="1"></feGaussianBlur>
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite>
              <feColorMatrix values="0 0 0 0 0.717647 0 0 0 0 0.431373 0 0 0 0 0 0 0 0 0.48 0"></feColorMatrix>
              <feBlend in2="shape" result="effect2_innerShadow_1870_133886"></feBlend>
            </filter>
            <filter
              id="filter1_i_1870_133886"
              width="66"
              height="54"
              x="14"
              y="6.01"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              ></feColorMatrix>
              <feOffset dx="-2" dy="-2"></feOffset>
              <feGaussianBlur stdDeviation="2"></feGaussianBlur>
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite>
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"></feColorMatrix>
              <feBlend in2="shape" result="effect1_innerShadow_1870_133886"></feBlend>
            </filter>
            <filter
              id="filter2_i_1870_133886"
              width="86"
              height="64.996"
              x="4"
              y="23.014"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              ></feColorMatrix>
              <feOffset dx="-2" dy="-2"></feOffset>
              <feGaussianBlur stdDeviation="2"></feGaussianBlur>
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite>
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"></feColorMatrix>
              <feBlend in2="shape" result="effect1_innerShadow_1870_133886"></feBlend>
            </filter>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col gap-2 mt-6 mb-10 text-center">
        <h3 className="text-2xl md:text-3xl lg:text-[2rem] font-bold">Kiểm tra email của bạn!</h3>
        <p className="text-sm text-fade">
          Chúng tôi đã gửi mã xác nhận gồm 6 chữ số tới acb@domain qua email, vui lòng nhập mã vào ô bên dưới để xác
          minh email của bạn.
        </p>
      </div>
      <form className="flex flex-col gap-6">
        <div className="grid grid-cols-6 gap-3">
          {Array.from(Array(6).keys()).map((i) => (
            <OutlinedInput
              error={!!error}
              color="default"
              key={i}
              placeholder="-"
              type="tel"
              inputProps={{
                maxLength: 1,
                style: { textAlign: 'center' },
              }}
              inputRef={(el) => {
                inputsRef.current[i] = el;
              }}
              onKeyDown={handleKeyDown}
              onFocus={handleFocus}
              onInput={handleChange}
              onPaste={handlePaste}
            />
          ))}
        </div>
        {error && (
          <FormHelperText className="px-4" error={!!error}>
            {error}
          </FormHelperText>
        )}
        <Button type="submit" size="large" color="default">
          Xác thực
        </Button>
        <p className="text-sm text-center">
          Bạn chưa nhận được mã?{' '}
          <Link bold underline="hover">
            Gửi lại mã
          </Link>
        </p>
        <div className="text-sm text-center">
          <Link to={config.routes.login} color="inherit" bold underline="hover" className="text-sm text-center">
            Trở về đăng nhập
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Verify;
