import React from "react";

import TopicList from "./TopicList";
import "./Topic.css";

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
    </div>
  );
}

export default Topic;
