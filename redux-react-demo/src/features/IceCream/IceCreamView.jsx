import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked} from "./IceCreamSlice";
const IceCreamView = () => {
  const dispatch = useDispatch();
  const iceCreamCount = useSelector(
    (state) => state.iceCream.numberofIceCreams
  );
  return (
    <div>
      <h2>Number of IceCream - {iceCreamCount}</h2>
      <button onClick={() => dispatch(ordered())}>Order IceCream</button>
      <button onClick={() => dispatch(restocked(3))}>Restock IceCream</button>
    </div>
  );
};

export default IceCreamView;
