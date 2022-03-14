import React from "react";

export const Cards = () => {
  const CardsList = [
    {
      id: 1,
      level: 1,
      gd: "sgìth",
      en: "tired",
    },
    {
      id: 2,
      level: 2,
      gd: "ceist",
      en: "question",
    },
  ];

  const Users = [
    {
      id: 1,
      name: "gordon",
      level: 2,
      cards: [
        { id: 1, date: "07/12/2021" },
        { id: 2, date: "09/12/2021" },
      ],
    },
    {
      id: 2,
      name: "mike",
      level: 1,
      cards: [
        { id: 1, date: "08/12/2021" },
        { id: 2, date: "07/12/2021" },
      ],
    },
  ];

  return <div></div>;
};
