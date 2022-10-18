import React from "react";
import { fetchUpdateUserBook } from "../../store/userBook";
import { fetchCreateUserBook } from "../../store/userBooks";
import { useDispatch } from "react-redux";
const SelectDropDown = ({ selectOptions, selected, status, auth, id }) => {
  const dispatch = useDispatch();
  return (
    <select
      value={selected}
      onChange={(e) => {
        console.log(selected);
        if (status) {
          dispatch(
            fetchUpdateUserBook({
              userId: auth.id,
              bookId: id,
              status: e.target.value,
            })
          );
        } else {
          dispatch(
            fetchCreateUserBook({
              userId: auth.id,
              bookId: id,
              status: e.target.value,
            })
          );
        }
        window.location.reload(false);
      }}
    >
      {selectOptions.map((value) => (
        <option value={value} key={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default SelectDropDown;
