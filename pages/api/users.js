import React from "react";

const handler = async (req, res) => {
  res.status(200).json({
    users: [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
    ],
  });
};

export default handler;
