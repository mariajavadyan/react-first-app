import React from "react";

function CategoriesList() {
  const categories = [
    {
      qr: "2098",
      category: "Meat",
    },

    {
      qr: "1702",
      category: "Bread",
    },
    {
      qr: "1176",
      category: "Sweets",
    },
    {
      qr: "9427",
      category: "Juice",
    },
    {
      qr: "1056",
      category: "Fruits",
    },
  ];

  const categoryToText = (data) => {
    return (
      <div key={data.qr}>
        <p>
          {"qr: " +
            " " +
            data.qr +
            "         " +
            "  category: " +
            " " +
            data.category}
        </p>
        <br />
      </div>
    );
  };

  return <div>{categories.map(categoryToText)}</div>;
}

export default CategoriesList;
