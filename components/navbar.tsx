import Link from 'next/link';

import { Icons } from './icons';

export default function NavBar() {
  return (
    <header className="flex items-center justify-between pt-2 pb-6">
      <div className="flex flex-col">
        <h1 className="font-medium text-lg flex items-center">
          <Icons.command className="mr-2" />
          Tree to Image Generator
        </h1>
        <span className="hidden md:inline font-normal text-sm text-slate-600">
          Built using Vercel&apos;s{' '}
          <Link
            href="https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation"
            passHref
            className="underline"
          >
            OG Image Generation
          </Link>
        </span>
      </div>
      <div className="flex items-center gap-4">
        <Link
          href="https://twitter.com/vagnermaltauro"
          className="text-sm font-medium"
          target="_blank"
          passHref
        >
          <Icons.twitterX className="h-6 w-6" />
        </Link>
        <Link
          href="https://github.com/vagnermaltauro/tree"
          className="text-sm font-medium"
          target="_blank"
          passHref
        >
          <Icons.gitHub className="h-6 w-6" />
        </Link>
      </div>
    </header>
  );
}
