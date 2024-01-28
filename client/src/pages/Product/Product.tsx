import React, { FC } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';
import { Link, useParams } from 'react-router-dom';

import { useFetch } from '../../hooks';
import config from '../../config';
import Container from '../../components/Container';
import Box from '../../components/Box';
import ProductDetail from './ProductDetail';

const Product: FC = () => {
  const { productSlug } = useParams();
  const { data } = useFetch(`/products/${productSlug}`);

  return (
    <>
      <Breadcrumbs>
        <Link to={config.routes.collections}>Cửa hàng</Link>
        <Link to={''}>Category Name</Link>
        <span>{data?.title}</span>
      </Breadcrumbs>
      <Container verticalAlign>
        <Box type="shadow" className="p-[10px] md:py-5 lg:px-5 lg:py-[30px] grid lg:grid-cols-2 gap-7">
          <div>1</div>
          {data && <ProductDetail data={data} />}
        </Box>
      </Container>
    </>
  );
};

export default Product;
