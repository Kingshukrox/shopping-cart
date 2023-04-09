import React from "react";
import { useCart } from "../../context/CartContext";
import storeItems from "../../data/items.json"
import { Button, Stack } from "react-bootstrap";
import {currencyFormat} from "../../utilities/currencyFormat"

export function CartItem({id,quantity}) {
    const {removeFromCart}=useCart()
    //if item id is not found in the JSON file dont render anything, return null
    const itemFound=storeItems.find(item=>item.id===id)
    if (itemFound == null) return null
    return (
            <Stack direction="horizontal" gap={2}>
                <img src={itemFound.imgUrl} style={{height:"60px",width:"100px",objectFit:"cover"}}/>
                <div className="me-auto">
                    <div>
                        {itemFound.name}{" "}
                        {quantity>=1&&
                            <span className="text-muted fs-6">x{quantity}</span>
                        }
                    </div>
                    <span className="text-muted">
                        {currencyFormat(itemFound.price)}
                    </span>
                </div>
                    <span className="text-muted">
                        {currencyFormat(itemFound.price*quantity)}
                    </span>
                    <Button variant="danger" size="sm" onClick={()=>removeFromCart(id)}>&times;</Button>
            </Stack>
    );
}
