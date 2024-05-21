////////////######## IMPORTANT PLEASE READ#####//////////
//This component lets user select the color of the item
//This component intially displays a button "select Color"
//Once user selects a color,the text "select Color" on the dropdown button changes to selected color "
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
function SelectColor() {
  const [color, setColor] = useState("Select Color");
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {color}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => {
            setColor("Red");
          }}>
          Red
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            setColor("Black");
          }}>
          Black
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            setColor("Blue");
          }}>
          Blue
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SelectColor;
