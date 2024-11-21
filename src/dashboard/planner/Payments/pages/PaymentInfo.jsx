import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useFetchInvoice } from "../../../../hook/query/useFetchInvoice";
import MultiSpecReceipt from "../components/MultiSpecReceipt";

const PaymentInfo = () => {
  const navigate = useNavigate();
  const id = location.pathname.split("/")[3].toLowerCase();

  const { data, isLoading } = useFetchInvoice(id);

  console.log({ data });

  const swiperElRef = useRef(null);

  return (
    <>
      <swiper-container ref={swiperElRef} slides-per-view="1" navigation="true">
        <swiper-slide>
          {/* <MultiSpecReceipt specifications={specifications} /> */}
        </swiper-slide>
      </swiper-container>
    </>
  );
};

export default PaymentInfo;
