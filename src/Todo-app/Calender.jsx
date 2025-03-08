import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Calendar } from 'antd';
import dayjs from 'dayjs';
import Nav from "./Nav";

const Calendar_comp = () => {
    const format = 'YYYY-MM-DD';
    const navigate = useNavigate()
    const [value, setValue] = useState(() => dayjs());
    const [selectedValue, setSelectedValue] = useState(() => dayjs());
    const onSelect = (newValue) => {
      setValue(newValue);
      setSelectedValue(newValue);
      const selectedDate=newValue.format("YYYY-MM-DD")
      navigate("/settask",{ state: { selectedDate } })
     
    };
    const onPanelChange = (newValue) => {
      setValue(newValue);
    };
    return (
      <>
      <Nav/>
      <div className="Calnder">
        
        {/* <Alert message={`You selected date: ${selectedValue?.format('YYYY-MM-DD')}`} /> */}
        <Calendar  value={value} onSelect={onSelect} onPanelChange={onPanelChange}  />
      </div>
      </>
    );
  };
  export default Calendar_comp;