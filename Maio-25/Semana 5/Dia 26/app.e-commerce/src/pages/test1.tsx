import { useTestStore } from "@/stores";
import { useStore } from "zustand";

export default function Test1() {
  const testStore = useStore(useTestStore);
  return (
    <>
      <h3>Test 1</h3>
      <div>Total: {testStore.total}</div>
      <div>
        <button onClick={() => testStore.dec()}>-</button>
        &nbsp;
        <button onClick={() => testStore.inc()}>+</button>
      </div>
    </>
  );
}
