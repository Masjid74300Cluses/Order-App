import React, { useState } from "react";
import PropTypes from "prop-types";

import "./style.scss";

const LimitedCheckboxes = ({ children, limit }) => {
  //return list of checkboxes with limit of 2 that can be checked

  const [checkedItems, setCheckedItems] = useState([]);

  const handleChange = (event) => {
    if (event.target.checked) {
      setCheckedItems([...checkedItems, event.target.value]);
    } else {
      setCheckedItems(
        checkedItems.filter((item) => item !== event.target.value)
      );
    }
  };

  return (
    <div className="limited-checkboxes">{children.map((child) => child)}</div>
  );
};
