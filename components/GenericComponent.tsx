export default defineComponent({
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  emits: ['click'],
  setup(props, { emit }) {
    return () => (
      <div>
        <h1>Render Function Component</h1>
        <p>{props.message}</p>
        <button onClick={() => emit('click')}>Click me</button>
      </div>
    );
  },
});
