throw new Error("@migration task: Update +page.server.js (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292699)");

import { getColors } from 'iroiro';

export function get({ params }) {
  const colors = getColors(params.color);

  return {
    body: { colors },
  };
}