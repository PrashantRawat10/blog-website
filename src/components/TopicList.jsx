import React from "react";
import { DropdownButton, ButtonGroup, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function TopicList(props) {
  return (
    <DropdownButton
      as={ButtonGroup}
      key={props[0]}
      id={`dropdown-variants-${props[0]}`}
      variant={props[0].toLowerCase()}
      title={props[0]}
    >
      {props.map((e) => {
        return <Dropdown.Item>{e}</Dropdown.Item>;
      })}
    </DropdownButton>
  );
}

export default TopicList;
