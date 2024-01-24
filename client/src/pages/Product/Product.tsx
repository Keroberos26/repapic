import React, { FC } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';
import { Link, useParams } from 'react-router-dom';

import { useFetch } from '../../hooks';
import config from '../../config';

const Product: FC = () => {
  const { productSlug } = useParams();
  const { data } = useFetch(`/products/${productSlug}`);

  return (
    <div>
      <Breadcrumbs>
        <Link to={config.routes.collections}>Cửa hàng</Link>
        <Link to={''}>Category Name</Link>
        <span>{data?.title}</span>
      </Breadcrumbs>
    </div>
  );
};

export default Product;
