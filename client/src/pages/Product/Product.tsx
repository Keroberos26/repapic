import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks';
import ProductDetail from './ProductDetail';
import { Breadcrumbs } from '@mui/material';
import { Link } from 'react-router-dom';
import config from '../../config';
import { FaAngleRight } from 'react-icons/fa6';
import ProductImages from './ProductImages';

const Product: React.FC = () => {
  const { productId } = useParams();
  const { data, loading } = useFetch(`/products/${productId}`);

  useEffect(() => {
    document.title = `Repapic | ${data?.title}`;
  });

  return (
    <>
      {data && (
        <section className="px-3 sm:container sm:mx-auto">
          <Breadcrumbs className="py-5 lg:pt-6 lg:pb-9" separator={<FaAngleRight />}>
            <Link to={config.routes.home} className="hover:underline">
              Trang chủ
            </Link>
            <Link to={config.routes.collections} className="hover:underline">
              Sản phẩm
            </Link>
            <Link to={config.routes.collections} className="hover:underline">
              Loại hàng
            </Link>
            <span className="text-primary">{data?.title}</span>
          </Breadcrumbs>
          <div className="flex flex-col gap-10 lg:flex-row">
            {loading ? (
              'Loading...'
            ) : (
              <>
                <div className="lg:w-[40%]">
                  <ProductImages product={data} />
                </div>
                <div className="flex-grow">
                  <ProductDetail product={data} />
                </div>
              </>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default Product;
