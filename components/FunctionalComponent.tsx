export default function FunctionalComponent(
  props: { message: string },
  { emit }
) {
  return (
    <div>
      <h1>Functional Component</h1>
      <p>{props.message}</p>
      <button onClick={() => emit('click')}>Click me</button>
    </div>
  );
}

// FunctionalComponent.props = ['message'];
// FunctionalComponent.emit = ['click'];
