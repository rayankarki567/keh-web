'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { pageview } from './gtag';

export default function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      pageview(pathname);
    }
  }, [pathname]);

  return null;
}
