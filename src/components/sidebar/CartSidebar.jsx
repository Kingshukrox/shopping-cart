import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useCart } from "../../context/CartContext";
import { Stack } from "react-bootstrap";
import {CartItem} from "./CartItem";

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
                    </Stack>
                    
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
