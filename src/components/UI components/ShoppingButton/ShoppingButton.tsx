'use client';


import { FC } from "react";
import Button from "@mui/material/Button";
import styles from "@/components/ProductsUI/ProductFavorite/product.module.scss";
import { FavoriteBorder } from "@mui/icons-material";
import { Products } from "@/interfaces/products";

interface FavoriteButtonProps {
  product: Products;
  inFavorites?: boolean;
  onClick: (product: Products) => void;
  onDeleteProduct: (productId: number) => void;
}

export const ShoppingCartButton: FC<FavoriteButtonProps> = ({
  product,
  inFavorites,
  onClick,
  onDeleteProduct,
}) => {
  const handleAddToFavorites = () => {
    onClick(product);
  };

  const handleRemoveFromFavorites = () => {
    onDeleteProduct(product.productId);
  };

  const handleClick = inFavorites
    ? handleRemoveFromFavorites
    : handleAddToFavorites;

  return (
    <Button
      title="Add to favorites"
      onClick={handleClick}
      className={styles.favorite__button}
      style={{ backgroundColor: inFavorites ? "#FF6F61" : "" }}
    >
      <FavoriteBorder
        style={{ fontSize: 20, color: inFavorites ? "#fff" : "" }}
        className={styles.favorite__icon}
      />
    </Button>
  );
};