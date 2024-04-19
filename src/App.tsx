import "./App.css";
import { decrement, increment, incrementByAmount, zero } from "./counterSlice";
import { useAppDispatch, useAppSelector } from "./hooks";
import { RootState } from "./store";

function App() {
  // const [count, setCount] = useState(0)

  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <>
      <div></div>
      <h1>React + Redux + TypeScript</h1>
      <h1>{count}</h1>
      <div style={{display:"flex"}}>
        <div className="card">
          <button onClick={() => dispatch(increment())}>count + </button>
        </div>
        <div className="card">
          {count > 0 && (
            <button onClick={() => dispatch(decrement())}>count - </button>
          )}
        </div>
        <div className="card">
          <button onClick={() => dispatch(incrementByAmount(10))}>
            count 10{" "}
          </button>
        </div>
        <div className="card">
          <button onClick={() => dispatch(zero())}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
