import { getColors } from 'iroiro';

export function load({ params }) {
  const colors = getColors(params.color);

  return { colors };
}
