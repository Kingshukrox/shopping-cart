import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useCart } from "../../context/CartContext";

export function CartSidebar() {

    const {closeCart,cartIsOpen}=useCart();

    return (
        <>
            {/* opening cart is done with openCart in Navbar.jsx, closing is done here */}
            <Offcanvas show={cartIsOpen} onHide={closeCart}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the
                    elements you have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
