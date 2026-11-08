"use client";

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

// The home page Highlights mark their links, so the button can go back to the card the visitor came from.
// Read on the client because the static export can't see query strings at build time.
export default function ProjectBackLink({ slug }) {
  const fromHighlights = useSearchParams().get('from') === 'highlights';

  return (
    <Link
      href={fromHighlights ? `/#highlight-${slug}` : '/work'}
      className="text-small text-grey"
    >
      {fromHighlights ? '← BACK TO THE HIGHLIGHTS' : '← BACK TO WORK'}
    </Link>
  );
}
