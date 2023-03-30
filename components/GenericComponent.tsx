export default defineComponent({
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  emits: ['click'],
  setup(props, { emit }) {
    const count = ref(0);

    function increment() {
      count.value++;
      emit('click');
    }

    return () => (
      <div>
        <h1>Setup Function Component</h1>
        <p>{props.message}</p>
        <button onClick={increment}>Click me {count.value}</button>
      </div>
    );
  },
});
