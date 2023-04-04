import { createContext, useContext, useState } from "react";

const CartContext=createContext({})

export function useCart(){
    return useContext(CartContext)
}

export function CartContextProvider({children}){
    const [cartItems,setCartItems]=useState([]) //*it will have [{id:####,quantity:##},..]

    //.reduce(callbackFn,initialvalue) it will go over all items and find sum of quantites
    //could also use .map but map returns array .reduce returns value from callbackFn
    const cartQuantity=cartItems.reduce((quantityAccumulator,item)=>quantityAccumulator+item.quantity,0)
    
    function getItemQuantity(id){
        //if item.id matches(exists), return the quantity or else return 0
        return cartItems.find(item=>item.id===id)?.quantity||0;
    }

    function increaseItemQuantity(id){
        setCartItems(currentItems=>{    //currentItems=previous state of cartItems
            //if we dont find item in prevstate then return prevstate and add new item {id,quant:1}
            if(currentItems.find(item=>item.id===id)==null){
                return [...currentItems,{id,quantity:1}]
            }
            //if we find items in prevstate, return array with new quantity
            else{
                return currentItems.map(item=>{ //.map will return entire array which u need to return again to the setCartItems
                    if(item.id===id)
                    return {...item,quantity:item.quantity+1} //returns the new quantity
                    else return item
                })
            }
        })
    }

    function decreaseItemQuantity(id){
        setCartItems(currentItems=>{    //currentItems=previous state of cartItems
            //if we find only 1 item (last count) in list then remove the item from list alltogether (filter out)
            if(currentItems.find(item=>item.id===id).quantity===1){
                return currentItems.filter(item=>item.id!==id) //.filter returns array which matches condition
            }
            //if we find items in prevstate, return array with new quantity
            else{
                return currentItems.map(item=>{ //.map will return entire array which u need to return again to the setCartItems
                    if(item.id===id)
                    return {...item,quantity:item.quantity-1} //returns the new quantity
                    else return item
                })
            }
        })
    }

    function removeFromCart(id){
        setCartItems(currentItems=>{
            //.filter will return array to state which does not match the id
            //that means it will return the rest of the items to the state
            return currentItems.filter(item=>item.id!==id)
        })
    }

    return (
        <CartContext.Provider
            value={{
                getItemQuantity,
                increaseItemQuantity,
                decreaseItemQuantity,
                removeFromCart,
                cartItems,
                cartQuantity
            }}
        >
            {children}
        </CartContext.Provider>
    );
}