export default defineComponent({
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      count: 0,
    };
  },
  emits: ['click'],
  methods: {
    increment() {
      this.count++;
      this.$emit('click');
    },
  },
  render() {
    return (
      <div>
        <h1>Render Function Component</h1>
        <p>{this.message}</p>
        <button onClick={this.increment}>Click me {this.count}</button>
      </div>
    );
  },
});
