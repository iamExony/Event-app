import React, { useState } from "react";
// import { DatePicker, mergeStyles } from "@nayojs/react-datetime-picker";
import { Calendar } from "@nayojs/react-datetime-picker";
import { TimePicker } from "@nayojs/react-datetime-picker";
import { DatePicker } from "@nayojs/react-datetime-picker";
import TimeKeeper from "react-timekeeper";

export default function () {
  const [time, setTime] = useState("12:34pm");
  const selectDateHandler = (date) => {
    console.log("Selected Date:", date);
  };

  const selectTimeHandler = (time) => {
    console.log("Selected Time:", time);
  };

  return (
    <div className="flex w-full">
      <Calendar
        selectDateHandler={selectDateHandler}
        selectTimeHandler={selectTimeHandler}
      />
      <TimeKeeper time={time} onChange={(data) => setTime(data.formatted12)} />
    </div>
  );
}
