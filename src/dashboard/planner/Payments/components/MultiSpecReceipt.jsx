import Logo from "./Logo";

function MultiSpecReceipt({ specifications }) {
  //Formating number
  function formatNumber(num) {
    return Intl.NumberFormat("en-GB").format(num);
  }
  let subTotalAmount = specifications.reduce(
    (acc, specification) => Number(specification.amount) + acc,
    0
  );
  let VAT = 0.075 * subTotalAmount;
  let totalAmount = formatNumber(subTotalAmount + VAT);

  return (
    <div className="flex  flex-col  border-2 border-primaryCol md:w-[70%] m-auto mt-16 py-6 relative">
      <div className="md:pl-6 flex justify-between md:items-end">
        <div className="hidden md:block">
          <Logo className="" />
        </div>
        <div className="uppercase font-bold text-2xl md:text-4xl text-primaryCol border-b-4 border-primaryCol md:w-[250px] w-full text-center md:text-right md:pr-6 ">
          Invoice
        </div>
      </div>
      <div className=" my-12 grid md:grid-cols-2 px-6">
        <div className="grid grid-cols-1 justify-items-start gap-2 md:w-[130%]">
          <p>
            Client Name: <span>Olatunji Bode</span>
          </p>
          <p>
            Client Address: <span>Lekki Phase 1, Lagos St. Nigeria</span>
          </p>
          <p>
            Email: <span>tunjibode@gmail.com</span>
          </p>
          <p>
            Tel: <span>+234-803-254-3522</span>
          </p>
        </div>
        <div className=" grid grid-cols-1 gap-1 md:justify-items-end">
          <p>
            Invoice No: <span>014</span>
          </p>

          <p>
            Invoice Date: <span>04/04/2023</span>
          </p>

          <p>
            Due Date: <span>06/04/2023</span>
          </p>
        </div>
      </div>

      <table className="mx-6 border-2 border-black">
        <thead className="border-2 border-black bg-red-200">
          <tr className="">
            <th className="border-2 border-black text-center  w-[60px] p-2">
              S/N
            </th>
            <th className="border-2 border-black text-start pl-6">
              EVENT SPECIFICATION
            </th>
            <th className="border-2 border-black text-right pr-6 w-[150px]">
              AMOUNT
            </th>
          </tr>
        </thead>
        <tbody>
          {specifications.map((specification, i) => (
            <tr className="" key={specification.id}>
              <td className="border-2 border-black text-center p-2  ">
                {`${i + 1}`.padStart(2, 0)}
              </td>
              <td className="border-2 border-black text-start pl-6 capitalize">
                {specification.provision
                  ? specification.provision
                  : specification.activity}
              </td>
              <td className="border-2 border-black text-right pr-6">
                {formatNumber(specification.amount)}
              </td>
            </tr>
          ))}
          <tr>
            <td className="border-2 border-black text-center p-4 "></td>
            <td className="border-2 border-black text-start pl-6"></td>
            <td className="border-2 border-black text-center"></td>
          </tr>
        </tbody>
      </table>

      <div className="mb-24 flex flex-col items-end p-6 gap-2">
        <div className="flex">
          Sub Total:{" "}
          <p className="w-[100px] text-right ">
            {formatNumber(subTotalAmount)}
          </p>
        </div>
        <div className="flex">
          VAT: <p className="w-[100px] text-right ">{formatNumber(VAT)}</p>
        </div>
        <div className="border border-b-2 w-[100px] border-black" />
        <div className="flex font-semibold">
          Total: <p className="w-[100px] text-right ">{totalAmount}</p>
        </div>
      </div>

      <div className="absolute w-[100px]  z-10 right-0 bottom-0 border-b-[50px] border-b-primaryCol border-l-[50px] border-l-transparent" />
      <div className=" absolute bottom-0  w-full border-b-[15px] border-b-primaryCol" />
    </div>
  );
}
export default MultiSpecReceipt;
