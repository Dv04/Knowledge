// app/components/Contact.tsx
'use client';

import { useState } from 'react';
import {
  EnvelopeIcon,
  ClipboardDocumentIcon,
  LinkIcon,
  MapPinIcon,
  PhoneIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

const EMAIL = 'dev04san@gmail.com'; // update if needed

export default function Contact() {
  /* toast-like feedback for copy-to-clipboard */
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24">
      <h2 className="mb-12 text-center text-4xl font-bold">Get&nbsp;in&nbsp;Touch</h2>

      <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2 md:gap-14">
        {/* left column — primary channels */}
        <div
          className="
            rounded-3xl border border-slate-200 bg-white/70 p-8 backdrop-blur-lg
            shadow-lg dark:border-slate-700 dark:bg-slate-800/60
          "
        >
          <h3 className="mb-6 text-lg font-semibold text-slate-900 dark:text-slate-100">
            Direct contact
          </h3>

          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <EnvelopeIcon className="h-6 w-6 text-teal-500" />
              <button
                onClick={copy}
                className="group inline-flex items-center gap-1 font-medium text-teal-600 hover:underline dark:text-teal-400"
              >
                {EMAIL}
                <ClipboardDocumentIcon className="h-4 w-4 opacity-70 group-hover:opacity-100" />
              </button>
              {copied && (
                <span className="ml-2 text-xs text-teal-500">Copied!</span>
              )}
            </li>

            <li className="flex items-center gap-3">
              <MapPinIcon className="h-6 w-6 text-teal-500" />
              <span className="text-slate-700 dark:text-slate-300">
                Ahmedabad, India · Hybrid
              </span>
            </li>
          </ul>
        </div>

        {/* right column — socials */}
        <div
          className="
            rounded-3xl border border-slate-200 bg-white/70 p-8 backdrop-blur-lg
            shadow-lg dark:border-slate-700 dark:bg-slate-800/60
          "
        >
          <h3 className="mb-6 text-lg font-semibold text-slate-900 dark:text-slate-100">
            Online profiles
          </h3>

          <ul className="space-y-4 text-sm">
            <Social
              label="GitHub"
              href="https://github.com/Dv04"
              username="@Dv04"
            />
            <Social
              label="LinkedIn"
              href="https://linkedin.com/in/dev-sanghvi-616843128/" // Corrected
              username="Dev Sanghvi" //
            />
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ——— reusable row ——— */
function Social({
  label,
  href,
  username,
}: {
  label: string;
  href: string;
  username: string;
}) {
  return (
    <li className="flex items-center gap-3">
      <LinkIcon className="h-6 w-6 text-teal-500" />
      <Link
        href={href}
        target="_blank"
        className="inline-flex items-center gap-1 font-medium text-teal-600 hover:underline dark:text-teal-400"
      >
        {label}
        <ArrowTopRightOnSquareIcon className="h-4 w-4 opacity-70" />
      </Link>
      <span className="text-slate-500 dark:text-slate-400">{username}</span>
    </li>
  );
}