import React, { Component } from "react";

class Display extends Component {
    state = {
        itemData: [
            {
                id: 1,
                name: "pencil",
                quantity: 2,
                price: 7
            },

            {
                id: 2,
                name: "paper",
                quantity: 4,
                price: 3
            },

            {
                id: 3,
                name: "eraser",
                quantity: 1,
                price: 5
            },
        ]
    }

    render() {
        const itemList = this.state.itemData.map((item) => { 
            
            return (
                <React.Fragment key={item.id}>
                    <p>Item: {item.name} </p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: {item.price}</p>
                    <p>---------------------------</p>
                </React.Fragment>
            )

        })

        return (
            <div>
                <p>{itemList}</p>
            </div>
        )
    }
}

export default Display;