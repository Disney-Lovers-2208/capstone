import React from "react";

const SelectDropDown = ({
  selectOptions,
  setSelected,
  selected,
  getSelected,
}) => {
  return (
    <select
      value={selected}
      onChange={(e) => {
        setSelected(e.target.value);
        getSelected();
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
