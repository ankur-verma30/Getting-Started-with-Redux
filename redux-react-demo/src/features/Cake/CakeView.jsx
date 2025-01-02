import React, { useState } from "react";
import { ordered, restocked } from "./cakeSlice";
import { useSelector, useDispatch } from "react-redux";

export const CakeView = () => {
  //accepts function as a argument
  const numberofCakes = useSelector((state) => state.cake.numberOfCakes);
  const [restockCake,setRestockCake] =useState(1)
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cakes - {numberofCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <br />
      <input type="number" value={restockCake} onChange={(e) => setRestockCake(Number(e.target.value))}/>
      <br />
      <button onClick={() => dispatch(restocked(restockCake))}>Restock Cake</button>
    </div>
  );
};
