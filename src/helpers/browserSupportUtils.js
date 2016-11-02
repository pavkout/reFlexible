import window from 'global/window';
import document from 'global/document';
import toArray from 'to-array';

const MATCH = /flex-?wrap/i

export default function supportFlexbox () {
  if (!window.getComputedStyle) {
    return true;
  }

  const styles = window.getComputedStyle(document.documentElement, '');

  const match = toArray(styles).join('').match(MATCH);
  return !!match;
};
