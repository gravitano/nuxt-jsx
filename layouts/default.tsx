import { NuxtLink } from '#components';

export default defineComponent((props, { slots }) => {
  return () => (
    <div>
      <nav aria-label="Navigation">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
      </nav>

      {slots.default?.()}
    </div>
  );
});
