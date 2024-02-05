import React, { useCallback, useState } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';
import Container from '../../components/Container';
import Filter from './Filter';
import Box from '../../components/Box';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
} from '@mui/material';
import { IoGridOutline } from 'react-icons/io5';
import { CiBoxList } from 'react-icons/ci';
import { useDebounce, useFetch } from '../../hooks';
import { ProductType } from '../../types';
import ProductCard, { ProductCardSkeleton } from '../../components/ProductCard';

const Collections = () => {
  const total = 12;
  const [display, setDisplay] = useState<'grid' | 'list'>('grid');
  const [sort, setSort] = useState('');
  const [page, setPage] = useState(1);
  const [price, setPrice] = useState<number[]>([0, 1_000_000]);
  const priceDebounce = useDebounce<number[]>(price, 500);
  const { data, loading } = useFetch(`/products?limit=${total}&skip=${(page - 1) * total}&min=${priceDebounce[0]}`);

  const handlePriceChange = useCallback((event: Event, newValue: number | number[]) => {
    setPrice(newValue as number[]);
  }, []);

  const handleDisplay = (event: React.MouseEvent<HTMLElement>, newDisplay: 'grid' | 'list') => {
    setDisplay(newDisplay);
  };

  const handleSort = (event: SelectChangeEvent) => {
    setSort(event.target.value);
  };

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <>
      <Breadcrumbs>
        <span>Cửa hàng</span>
      </Breadcrumbs>
      <Container verticalAlign>
        <div className="grid gap-5 lg:grid-cols-5">
          <Filter price={price} onPriceChange={handlePriceChange} />
          <div className="lg:col-span-4">
            <Box type="shadow" className="flex items-center justify-between p-[10px] mb-5">
              <ToggleButtonGroup value={display} exclusive onChange={handleDisplay}>
                <Tooltip title="Lưới" placement="top">
                  <ToggleButton value="grid">
                    <IoGridOutline />
                  </ToggleButton>
                </Tooltip>
                <Tooltip title="Danh sách" placement="top">
                  <ToggleButton value="list">
                    <CiBoxList />
                  </ToggleButton>
                </Tooltip>
              </ToggleButtonGroup>
              <FormControl sx={{ minWidth: 160 }} size="small" disabled={loading}>
                <InputLabel id="sort-label" sx={{ fontSize: 14 }}>
                  Sắp xếp theo
                </InputLabel>
                <Select
                  labelId="sort-label"
                  label="Sắp xếp theo"
                  value={sort}
                  onChange={handleSort}
                  sx={{ fontSize: 14 }}
                >
                  <MenuItem value={'title|asc'}>Tên: A - Z</MenuItem>
                  <MenuItem value={'title|desc'}>Tên: Z - A</MenuItem>
                  <MenuItem value={'price|asc'}>Giá: Từ cao đến thấp</MenuItem>
                  <MenuItem value={'price|desc'}>Giá: Từ thấp đến cao</MenuItem>
                  <MenuItem value={'rating|asc'}>Đánh giá: Từ cao đến thấp</MenuItem>
                  <MenuItem value={'rating|desc'}>Đánh giá: Từ thấp đến cao</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {loading
                ? Array.from({ length: total }, (_, index) => <ProductCardSkeleton key={index} />)
                : data?.products.map((product: ProductType) => <ProductCard key={product.id} data={product} />)}
            </div>
            <Box type="shadow" className="mt-5 p-[10px] text-center">
              <Pagination
                count={Math.ceil(data?.total / total) || 0}
                color="standard"
                className="inline-block"
                page={page}
                disabled={loading}
                onChange={handleChangePage}
              />
            </Box>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Collections;
