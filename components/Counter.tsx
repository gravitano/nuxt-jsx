export default defineComponent(() => {
  const count = ref(0);

  return () => (
    <div>
      <h1>Counter</h1>

      <p>Count: {count.value}</p>
      <button onClick={() => count.value--}>-</button>
      <button onClick={() => count.value++}>+</button>
    </div>
  );
});
