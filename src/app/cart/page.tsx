import React from "react";
import { Metadata } from "next";
import CartMain from "@/pages/cart/cart-main";

export const metadata: Metadata = {
  title: "DigitallyNext - Cart page",
};

const CartPage = () => {
  return (
    <CartMain/>
  );
};

export default CartPage;
