import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sale, soldOut } from "../modules/stockCounter";

function StockCounter() {
    const { message, stock } = useSelector((state) => {
        return {
            message: state.stockReducer.message,
            stock: state.goodsReducer.stock,
        };
    });

    const dispatch = useDispatch();

    useEffect(() => {
        if (stock <= 0) {
            dispatch(soldOut());
        } else {
            dispatch(sale());
        }
    }, [stock]);

    return (
        <>
            <p>판매상태 : {message}</p>
        </>
    );
}

export default StockCounter;
