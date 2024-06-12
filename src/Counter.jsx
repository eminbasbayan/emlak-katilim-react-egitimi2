import { useDispatch, useSelector } from "react-redux";
import { arttir, azalt } from "./redux/slices/counterSlice";

function Counter() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <button onClick={() => dispatch(arttir({ amount: 255 }))}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch(azalt())}>-</button>
    </div>
  );
}

export default Counter;
