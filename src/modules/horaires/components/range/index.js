import React from "react";
import styled from "styled-components";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import { ReactComponent as Close } from "../../../theme/icons/delete.svg";
import { ReactComponent as Calendar } from "../../../theme/icons/selector-date.svg";

export const DateRange = (props) => {
  return (
    <DateWrapper>
      <DateRangePicker
        calendarIcon={<CalendarIcon />}
        clearIcon={null}
        onChange={props.handleDateChange(props.index)}
        value={[props.period.start_date, props.period.end_date]}
      />
      <RemoveIcon onClick={props.handleRemoveClosePeriod(props.index)} />
    </DateWrapper>
  );
};
const DateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: ${(props) => props.theme.radius["radius-small"]};
  border: 1px solid rgba(23, 43, 73, 0.3);
  background: #66a3ff;
  color: white;
  .react-daterange-picker__wrapper {
    margin: 0 5px;
    background: #66a3ff;
    border: none;
    color: white;
    input {
      color: white;
    }
  }
`;
const RemoveIcon = styled(Close)`
  margin: auto 5px auto 0;
  height: 10px;
  width: 10px;
  cursor: pointer;
`;

export const DateRangeWhite = (props) => {
  return (
    <DateWrapperWhite>
      <DateRangePicker
        calendarIcon={<CalendarIcon />}
        clearIcon={null}
        onChange={props.handleDateChange(props.index)}
        value={[props.period.start_date, props.period.end_date]}
      />
      <RemoveIcon onClick={props.handleRemoveClosePeriod(props.index)} />
    </DateWrapperWhite>
  );
};

const DateWrapperWhite = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  padding: 0px 15px;
  margin: 0px 5px;
  border: none;
  background: white;
  cursor: pointer;
  height: 42px;
  border-radius: ${(props) => props.theme.radius["radius-small"]};
  .react-daterange-picker__wrapper {
    margin: 0 5px;
    background: white;
    border: none;
    color: ${(props) => props.theme.colors.dark};
    input {
      color: ${(props) => props.theme.colors.dark};
    }
    svg {
      color: ${(props) => props.theme.colors.dark};
    }
  }
`;
const CalendarIcon = styled(Calendar)`
  height: 10px;
  width: 10px;
`;
