import React from "react";

function ItemsList() {
    const items = [
        {
            code: "3219",
            name: "apple"
        },

        {
            code: "1265",
            name: "milk"
        },
        {
            code: "1330",
            name: "bread"
        },
        {
            code: "7639",
            name: "candy"
        }
    ];

    const itemToText = (data) => {
        return (
            <div key={data.code}>
                <p>
                    {"code: " +
                        " " +
                        data.code +
                        "         " +
                        "  name: " +
                        " " +
                        data.name}
                </p>
                <br />
            </div>
        );
    };

    return <div>{items.map(itemToText)}</div>;
}

export default ItemsList;
