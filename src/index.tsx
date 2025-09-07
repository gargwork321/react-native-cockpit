import Cockpit from './NativeCockpit';
export { default as Cockpit } from './Cockpit';

export function multiply(a: number, b: number): number {
  return Cockpit.multiply(a, b);
}
