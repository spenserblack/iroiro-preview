import { getColors } from 'iroiro';

export function get({ params }) {
  const colors = getColors(params.color);

  return {
    body: { colors },
  };
}