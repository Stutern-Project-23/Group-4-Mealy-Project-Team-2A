import React from "react";
import OngoingOrders from "../../../components/orders/OngoingOrders";
import OrderHistory from "../../../components/orders/OrderHistory";

const Orders = () => {
  return (
    <>
      <OngoingOrders />
      <OrderHistory />
    </>
  );
};

export default Orders;
