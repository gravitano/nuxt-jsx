import {
  Counter,
  FunctionalComponent,
  GenericComponent,
  RenderFunctionComponent,
} from '#components';

export default defineComponent(() => {
  return () => (
    <div>
      <h1>Index Page</h1>
      <Counter />
      <FunctionalComponent
        message="Hello functional component"
        onClick={() => {
          // console.log called twice
          console.log('clicked');
        }}
      />
      <GenericComponent
        message="Hello generic component"
        onClick={() => {
          // console.log called once
          console.log('clicked');
        }}
      />
      <RenderFunctionComponent
        message="Hello render function component"
        onClick={() => {
          // console.log called once
          console.log('clicked');
        }}
      />
    </div>
  );
});
