import React from "react";

import { DropdownButton, ButtonGroup, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TopicList from "./TopicList";
import "./Topic.css";

// let topicArray = [
//   ["Sports", "sports1", "sports2", "sports3", "sports4", "sports5", "sports6"],
//   [
//     "Technology",
//     "tech1",
//     "tech2",
//     "tech3",
//     "tech4",
//     "tech5",
//     "tech6",
//     "tech7",
//     "tech8",
//   ],
//   ["Cinema", "bollywood", "hollywood", "tollywood", "jollywood"],
//   ["Country", "India", "America", "Japan", "France"],
//   ["ScientificResearch", "sR1", "sR2", "sR3", "sR4", "sR5"],
//   ["investment", "stocks", "mutual Funds", "RealEstate", "Gold"],
//   ["defence", "Defence1", "Defence2", "Defence3", "Defence4", "Defence5"],
// ];

let topicArray = [
  {
    name: "sports",
    nameArray: [
      "sports1",
      "sports2",
      "sports3",
      "sports4",
      "sports5",
      "sports6",
    ],
  },
  {
    name: "Technology",
    nameArray: [
      "tech1",
      "tech2",
      "tech3",
      "tech4",
      "tech5",
      "tech6",
      "tech7",
      "tech8",
    ],
  },
  {
    name: "cinema",
    nameArray: ["bollywood", "hollywood", "tollywood", "jollywood"],
  },
  {
    name: "country",
    nameArray: ["India", "America", "Japan", "France"],
  },
  {
    name: "ScientificResearch",
    nameArray: ["sR1", "sR2", "sR3", "sR4", "sR5"],
  },
  {
    name: "investment",
    nameArray: ["stocks", "mutual Funds", "RealEstate", "Gold"],
  },
  {
    name: "defence",
    nameArray: ["Defence1", "Defence2", "Defence3", "Defence4", "Defence5"],
  },
];

function Topic() {
  return (
    <div>
      {topicArray.map((topic) => {
        return TopicList(topic);
      })}
      {/* <DropdownButton
        as={ButtonGroup}
        key={topicArray[0][0]}
        id={`dropdown-variants-${topicArray[0][0]}`}
        variant={topicArray[0][0].toLowerCase()}
        title={topicArray[0][0]}
      >
        {topicArray[0].map((e) => {
          return <Dropdown.Item>{e}</Dropdown.Item>;
        })}
      </DropdownButton>

      <DropdownButton
        as={ButtonGroup}
        key={topicArray[1][0]}
        id={`dropdown-variants-${topicArray[1][0]}`}
        variant={topicArray[1][0].toLowerCase()}
        title={topicArray[1][0]}
      >
        {topicArray[1].map((e) => {
          return <Dropdown.Item>{e}</Dropdown.Item>;
        })}
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        key={topicArray[2][0]}
        id={`dropdown-variants-${topicArray[2][0]}`}
        variant={topicArray[2][0].toLowerCase()}
        title={topicArray[2][0]}
      >
        {topicArray[2].map((e) => {
          return <Dropdown.Item>{e}</Dropdown.Item>;
        })}
      </DropdownButton>

      <DropdownButton
        as={ButtonGroup}
        key={topicArray[3][0]}
        id={`dropdown-variants-${topicArray[3][0]}`}
        variant={topicArray[3][0].toLowerCase()}
        title={topicArray[3][0]}
      >
        {topicArray[3].map((e) => {
          return <Dropdown.Item>{e}</Dropdown.Item>;
        })}
      </DropdownButton>

      <DropdownButton
        as={ButtonGroup}
        key={topicArray[4][0]}
        id={`dropdown-variants-${topicArray[4][0]}`}
        variant={topicArray[4][0].toLowerCase()}
        title={topicArray[4][0]}
      >
        {topicArray[4].map((e) => {
          return <Dropdown.Item>{e}</Dropdown.Item>;
        })}
      </DropdownButton>

      <DropdownButton
        as={ButtonGroup}
        key={topicArray[5][0]}
        id={`dropdown-variants-${topicArray[5][0]}`}
        variant={topicArray[5][0].toLowerCase()}
        title={topicArray[5][0]}
      >
        {topicArray[5].map((e) => {
          return <Dropdown.Item>{e}</Dropdown.Item>;
        })}
      </DropdownButton>

      <DropdownButton
        as={ButtonGroup}
        key={topicArray[6][0]}
        id={`dropdown-variants-${topicArray[6][0]}`}
        variant={topicArray[6][0].toLowerCase()}
        title={topicArray[6][0]}
      >
        {topicArray[6].map((e) => {
          return <Dropdown.Item>{e}</Dropdown.Item>;
        })}
      </DropdownButton> */}
    </div>
  );
}

export default Topic;
