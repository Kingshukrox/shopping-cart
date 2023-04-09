import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useCart } from "../../context/CartContext";
import { Stack } from "react-bootstrap";
import {CartItem} from "./CartItem";
import { currencyFormat } from "../../utilities/currencyFormat";
import storeItems from "../../data/items.json"

export function CartSidebar() {

    const {closeCart,cartIsOpen,cartItems}=useCart();

    return (
        <>
            {/* opening cart is done with openCart in Navbar.jsx, closing is done here */}
            <Offcanvas show={cartIsOpen} onHide={closeCart} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Stack direction="vertical" gap={3}>
                        {cartItems.map(item=>(
                            <CartItem key={item.id} {...item} />
                        ))}
                        <div className="ms-auto fw-bold fs-2">
                            Total : {currencyFormat(cartItems.reduce( (totalAccumulator, currentCartItem)=>{
                                const itemFound=storeItems.find(item=>item.id===currentCartItem.id)
                                return totalAccumulator+ ( (itemFound?.price||0) *currentCartItem.quantity )
                            },0 ))}
                        </div>
                    </Stack>
                    
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
