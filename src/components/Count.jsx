import { shallow } from "zustand/shallow";
import { useAppStore } from "../stores/app-stores";

export default function Count() {
  const [count, increment, decrement] = useAppStore((state) => {  
    return [state.count, state.increment, state.decrement]
  }, shallow);

  return (
    <div>
      <button type="button" onClick={decrement}>-</button>
      Count : {count}
      <button type="button" onClick={increment}>+</button>
    </div>
  );
}
