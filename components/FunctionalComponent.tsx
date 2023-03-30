export default function FunctionalComponent(
  props: { message: string },
  { emit }
) {
  const count = ref(0);

  function increment() {
    count.value++;
    emit('click');
  }

  return (
    <div>
      <h1>Functional Component</h1>
      <p>{props.message}</p>
      <button onClick={increment}>Click me {count.value}</button>
    </div>
  );
}

// FunctionalComponent.props = ['message'];
// FunctionalComponent.emit = ['click'];
