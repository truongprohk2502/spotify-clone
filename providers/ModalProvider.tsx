"use client";

import { useState, type FC, useEffect } from "react";
import AuthModal from "@/components/AuthModal";
import UploadModal from "@/components/UploadModal";
import type { ProductWithPrice } from "@/types/types";
import SubscribeModal from "@/components/SubscribeModal";

interface IProps {
  products: ProductWithPrice[];
}

const ModalProvider: FC<IProps> = ({ products }) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
      <UploadModal />
      <SubscribeModal products={products} />
    </>
  );
};

export default ModalProvider;
