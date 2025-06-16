"use client";

import { useRouter } from "next/navigation";

const OrderProduct = () => {
  const router = useRouter();

  const handleOrder = () => {
    router.push("/");
  };
  return (
    <>
      <h3>Order Product</h3>
      <button
        onClick={handleOrder}
        type="button"
        className="bg-teal-300 p-3 my-3 rounded-xl cursor-pointer"
      >
        Place Order
      </button>
    </>
  );
};

export default OrderProduct;
