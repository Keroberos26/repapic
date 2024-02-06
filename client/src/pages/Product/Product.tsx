import React, { FC } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';
import { Link, useParams } from 'react-router-dom';

import { useFetch } from '../../hooks';
import config from '../../config';
import Container from '../../components/Container';
import Box from '../../components/Box';
import ProductDetail from './ProductDetail';
import ProductImages from './ProductImages';
import ProductList from '../../components/ProductList';
import Heading from '../Home/Heading';

const Product: FC = () => {
  const { productSlug } = useParams();
  const { data, loading } = useFetch(`/products/${productSlug}`);

  return (
    <>
      <Breadcrumbs>
        <Link to={config.routes.collections}>Cửa hàng</Link>
        <Link to={''}>Category Name</Link>
        <span>{data?.title}</span>
      </Breadcrumbs>
      <Container verticalAlign>
        <Box type="shadow" className="p-[10px] md:py-5 lg:px-5 lg:py-[30px] grid lg:grid-cols-2 gap-7">
          <ProductImages data={data} loading={loading} />
          <ProductDetail data={data} loading={loading} />
        </Box>
        <div className="my-20">
          <Heading title="Sản phẩm tương tự" prevNav="btn-prev" nextNav="btn-next" />
          <ProductList url="/product" limit={10} prevNav="btn-prev" nextNav="btn-next" />
        </div>
      </Container>
    </>
  );
};

export default Product;
