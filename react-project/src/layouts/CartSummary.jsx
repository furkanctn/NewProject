import React from "react";
import { NavLink } from "react-router-dom";
import {Dropdown, DropdownDivider} from "semantic-ui-react";


export default function CartSummary() {
  return (
    <div>
      <Dropdown item text="Sepetiniz">
        <Dropdown.Menu>
          <Dropdown.Item>Apple MacBook</Dropdown.Item>
          <Dropdown.Item>Assus</Dropdown.Item>
          <Dropdown.Item>Acer</Dropdown.Item>
          <DropdownDivider></DropdownDivider>
          <Dropdown.Item as ={NavLink} to ="/cart"> Sepete Git</Dropdown.Item>
        
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
