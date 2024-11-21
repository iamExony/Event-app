import React from 'react'
import AreaChart from '../../components/AreaCharts'
import DropdownMenu from '../../components/ButtonDropdown'
import RecentActivities from '../../components/RecentActivities'

const Payments = () => {
  const payments = [
    {
      percent: null,
      value: 0,
      type: 'All Payments',
      src: 'all-payment',
      data: [0, 20, 5, 35, 25, 45],
    },
    {
      percent: null,
      value: 0,
      type: 'Converted payment',
      src: 'converted-payment',
      data: [0, 18, 10, 35, 15, 50, 25],
    },
    {
      percent: null,
      value: 0,
      type: 'Pending payment',
      src: 'pending-payment',
      data: [0, 20, 5, 35, 25, 45],
    },
  ]
  return (
    <div className="top-20 relative pb-7">
      <DropdownMenu
        viewAll={"View all payments"}
        addNew={"Add new payment"}
        type={"Payments manager"}
      />
      <div className="relative   w-full px-4 md:px-0 ">
        <AreaChart eventSourced={payments} />
      </div>

      <div className="w-full text-right px-4 md:px-0">
        <button className="text-primaryColC border-primaryColC border p-2 rounded-md relative mt-5  ">
          View custom report
        </button>
      </div>
      <RecentActivities eventSourced={"Payments"} />
    </div>
  );
}

export default Payments
