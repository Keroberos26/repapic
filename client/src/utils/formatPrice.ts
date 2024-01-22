const formatPrice = (amount: number) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount * 1000);
};

export default formatPrice;
