/**
 * Tailwind classnames filter / combine.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
 */
export function cx(...classes: string[]): string {
  return classes.filter(Boolean).join(` `);
}
