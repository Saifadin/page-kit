import React from 'react';

import ProductCardImage from './CardImage';
import { ProductCardWrapper, ProductDetails, ProductTitle, ProductPrice } from './styles';

interface Product {
  title: string;
  handle: string;
  images: any[];
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
}

interface ProductCard {
  product: Product;
}

export const ProductCard: React.FunctionComponent<ProductCard> = ({ product }) => {
  const {
    handle,
    priceRange: { minVariantPrice, maxVariantPrice },
  } = product;
  const isMinimum = minVariantPrice.amount !== maxVariantPrice.amount;
  const price = Intl.NumberFormat(undefined, {
    currency: minVariantPrice.currencyCode,
    minimumFractionDigits: 2,
    style: 'currency',
  }).format(parseFloat(minVariantPrice.amount));

  return (
    <ProductCardWrapper to={`/product/${handle}`}>
      <ProductCardImage images={product.images} title={product.title} />
      <ProductDetails>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductPrice>{`${isMinimum ? 'from ' : ''}${price}`}</ProductPrice>
      </ProductDetails>
    </ProductCardWrapper>
  );
};
