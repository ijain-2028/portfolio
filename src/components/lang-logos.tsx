"use client";

export const langLogos: Record<string, { icon: React.ReactNode; color: string }> = {
  TypeScript: {
    color: "#3178c6",
    icon: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <path fill="#3178c6" d="M22.67 47h99.67v73.67H22.67z" />
        <path
          fill="#fff"
          d="M77.05 96.15V109a21.5 21.5 0 0 0 5.26 2.74 20 20 0 0 0 6.36 1 18.6 18.6 0 0 0 6.17-.94 13.7 13.7 0 0 0 4.62-2.68 12 12 0 0 0 2.9-4.13 13.4 13.4 0 0 0 1-5.28 12.7 12.7 0 0 0-.87-4.8 11.4 11.4 0 0 0-2.41-3.65 18 18 0 0 0-3.66-2.88c-1.4-.87-2.9-1.73-4.51-2.58a33 33 0 0 1-3.38-1.93 13.7 13.7 0 0 1-2.45-1.88 7.2 7.2 0 0 1-1.5-2 5.5 5.5 0 0 1-.5-2.36 5.4 5.4 0 0 1 .53-2.38 5.1 5.1 0 0 1 1.47-1.83 6.8 6.8 0 0 1 2.23-1.17 9 9 0 0 1 2.77-.41 10.5 10.5 0 0 1 4.93 1 16.5 16.5 0 0 1 3.7 2.4V65.61a21 21 0 0 0-4.43-1.77 22.6 22.6 0 0 0-5.59-.61 18 18 0 0 0-6.09 1 14.4 14.4 0 0 0-4.78 2.83 12.8 12.8 0 0 0-3.12 4.36 13.7 13.7 0 0 0-1.12 5.6 13 13 0 0 0 .77 4.6 10.6 10.6 0 0 0 2.2 3.52 17 17 0 0 0 3.4 2.83c1.33.86 2.79 1.71 4.37 2.55a38 38 0 0 1 3.56 2.06 14.3 14.3 0 0 1 2.62 2.06 7.8 7.8 0 0 1 1.6 2.22 6.1 6.1 0 0 1 .54 2.57 5.6 5.6 0 0 1-.47 2.31 5 5 0 0 1-1.37 1.81 6.4 6.4 0 0 1-2.17 1.18 9.2 9.2 0 0 1-2.87.42 12.4 12.4 0 0 1-5.62-1.38 19.5 19.5 0 0 1-4.88-3.72zM49.7 72.06h11.9V109h10.1V72.06h11.9V63.3H49.7z"
        />
      </svg>
    ),
  },
  Python: {
    color: "#3776ab",
    icon: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <linearGradient id="py-a" x1="70.3" x2="23.5" y1="12.2" y2="65.1" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#387eb8" /><stop offset="1" stopColor="#366994" />
        </linearGradient>
        <linearGradient id="py-b" x1="55.5" x2="110" y1="76.3" y2="119.2" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ffe052" /><stop offset="1" stopColor="#ffc331" />
        </linearGradient>
        <path fill="url(#py-a)" d="M63.4 11.1c-13.7 0-12.8 5.9-12.8 5.9l0 12.2h26v3.7H34.6S19.1 31.2 19.1 52.6s13.5 20.6 13.5 20.6h8.1V60.6s-.4-13.5 13.3-13.5h22.9s12.9.2 12.9-12.5V16.1S91.7 11.1 63.4 11.1zM48.1 18.3a4.2 4.2 0 1 1 0 8.4 4.2 4.2 0 0 1 0-8.4z" />
        <path fill="url(#py-b)" d="M64.6 116.9c13.7 0 12.8-5.9 12.8-5.9l0-12.2h-26v-3.7h42S109 96.8 109 75.4s-13.5-20.6-13.5-20.6h-8.1v12.6s.4 13.5-13.3 13.5H51.2s-12.9-.2-12.9 12.5v18.5s-2 5.1 26.3 5.1zM80 109.7a4.2 4.2 0 1 1 0-8.4 4.2 4.2 0 0 1 0 8.4z" />
      </svg>
    ),
  },
  SQL: {
    color: "#e48e00",
    icon: (
      <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
        <ellipse cx="32" cy="14" rx="22" ry="8" fill="#e48e00" opacity="0.8" />
        <path d="M10 14v36c0 4.4 9.8 8 22 8s22-3.6 22-8V14" stroke="#e48e00" strokeWidth="3" fill="none" />
        <ellipse cx="32" cy="50" rx="22" ry="8" fill="none" stroke="#e48e00" strokeWidth="3" />
        <path d="M10 30c0 4.4 9.8 8 22 8s22-3.6 22-8" stroke="#e48e00" strokeWidth="2" opacity="0.5" />
      </svg>
    ),
  },
  "C/C++": {
    color: "#659ad2",
    icon: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <path fill="#659ad2" d="M117.5 33.5l.3-.2c-2.2-3.8-7.4-4.4-11.8-2.5-3.6 1.6-6.4 5-8.2 8.6-.4.9-.8 1.8-1 2.8-.2.5-.2 1.1-.4 1.6l-.2.9c-1.6 9.8.4 20.4 5.7 28.7 2.4 3.6 5.4 6.7 9 9 .8.5 1.6.9 2.4 1.3 1.3.5 2.8.9 4.2 1h1.1c2-.1 3.6-.8 4.8-1.9-.1-.3-.2-.4-.4-.6l-.4-.5c-1.5-1.5-3.2-2.9-5-4.1-2.4-1.6-5-2.8-7.7-3.8-1.8-.7-3.7-1.2-5.6-1.6-1.5-.3-3.1-.5-4.6-.5h-2.2c-.7.1-1.3.1-2 .2-.8.1-1.5.3-2.3.5-.9.3-1.8.6-2.6 1l-1.5.8c-4-6.5-5.5-14.8-3.6-22.5.7-2.7 1.8-5.2 3.4-7.4 2.1-3 5.1-5.2 8.6-6.1 2.5-.7 5.1-.5 7.4.5 1.5.7 2.9 1.6 4 2.7z" />
        <path fill="#00599c" d="M97 82.1c-3-1.7-5.6-3.9-7.8-6.5-5.5-6.7-8.4-15.3-8.3-24 0-3.4.5-6.7 1.6-9.9 2.6-7.8 8.1-14.2 15-18.1C85.6 15.9 72.4 12 64 12 35.3 12 12 35.3 12 64s23.3 52 52 52c13.1 0 25.1-4.8 34.3-12.8-1-.3-2-.6-2.9-1.1-.5-.3-5.8-3.5-5.8-3.5L97 82.1z" />
        <path fill="#004482" d="M117.5 33.5c-4.5-7.7-11.3-14-19.5-18 6.2 4.7 10.6 11.5 12.3 19.2 1.6 7.1.9 14.7-2.1 21.2-.8 1.7-1.7 3.2-2.9 4.7-1.3 1.7-2.8 3.2-4.4 4.5-2.1 1.7-4.4 3-6.8 4.1-2 .9-4.2 1.5-6.4 1.9-2.5.4-5 .4-7.5 0-2.6-.5-5-1.5-7.2-2.9C60.3 100.6 64 100 64 100c12-2 22-8.5 29.5-18.5.7-.5 1.5-1 2.3-1.3 4.4-1.9 9.6-1.3 11.8 2.5.3.5.5 1 .6 1.5 4-8.2 5.2-14 9.3-24l0-1.5c0-9.4-2.7-18.2-7.4-25.7-.5.2-1.8 1.1-2.6.5z" />
      </svg>
    ),
  },
  Java: {
    color: "#f89820",
    icon: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <path fill="#f89820" d="M47.6 98s-3.5 2 2.5 2.7c7.2.8 10.9.7 18.9-.8 0 0 2.1 1.3 5 2.4-17.8 7.6-40.2-.4-26.4-4.3zM44.3 84.5s-3.9 2.9 2.1 3.5c7.7.8 13.8.9 24.3-1.2 0 0 1.5 1.4 3.7 2.3-21.5 6.3-45.5.5-30.1-4.6z" />
        <path fill="#f89820" d="M62.6 67.5c4.4 5.1-1.2 9.6-1.2 9.6s11.2-5.8 6-13c-4.8-6.7-8.5-10 11.5-21.4 0 0-31.4 7.8-16.3 24.8z" />
        <path fill="#f89820" d="M91.3 108.3s2.6 2.1-2.8 3.8c-10.3 3.1-42.9 4-51.9.1-3.2-1.4 2.9-3.3 4.8-3.7 2-.4 3.2-.4 3.2-.4-3.6-2.6-23.5 5-10.1 7.1 36.6 5.8 66.7-2.6 56.8-6.9zM49.8 70.4s-16.7 4-5.9 5.4c4.5.6 13.5.5 21.9-.2 6.9-.6 13.8-1.9 13.8-1.9s-2.4 1-4.2 2.2c-16.9 4.4-49.4 2.4-40.1-2.2 8-3.8 14.5-3.3 14.5-3.3zM82.6 94c17.2-8.9 9.2-17.5 3.7-16.4-1.4.3-2 .5-2 .5s.5-.8 1.5-1.2c11.3-4 20 11.8-3.5 18.1 0 0 .3-.2.3-1z" />
        <path fill="#f89820" d="M67.6 2s9.5 9.5-9 24.2C42 40.1 51.4 48 58.5 57.4c-9.6-14.6-6.2-25.2.2-33.4C67.1 13.4 73.2 8.7 67.6 2z" />
        <path fill="#f89820" d="M50.6 126.7c16.5 1.1 41.9-.6 42.5-8.5 0 0-1.2 2.9-13.6 5.3-14 2.6-31.3 2.3-41.6.6 0 0 2.1 1.7 12.7 2.6z" />
      </svg>
    ),
  },
  // AI/Data logos
  OpenAI: {
    color: "#fff",
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="white">
        <path d="M22.28 9.37a5.99 5.99 0 0 0-.52-4.93 6.06 6.06 0 0 0-6.52-2.91A5.99 5.99 0 0 0 10.7.28a6.06 6.06 0 0 0-5.78 4.2 5.99 5.99 0 0 0-4 2.9 6.06 6.06 0 0 0 .74 7.12 5.99 5.99 0 0 0 .52 4.93 6.06 6.06 0 0 0 6.52 2.91 5.99 5.99 0 0 0 4.54 1.25 6.06 6.06 0 0 0 5.78-4.2 5.99 5.99 0 0 0 4-2.9 6.06 6.06 0 0 0-.74-7.12zM13.3 22.22a4.5 4.5 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.78.78 0 0 0 .39-.67v-6.74l2.02 1.17a.07.07 0 0 1 .04.06v5.58a4.52 4.52 0 0 1-4.49 4.48zM3.6 18.13a4.48 4.48 0 0 1-.54-3.02l.14.09 4.78 2.76a.77.77 0 0 0 .78 0l5.83-3.37v2.33a.07.07 0 0 1-.03.06l-4.83 2.79a4.52 4.52 0 0 1-6.13-1.64zM2.34 7.9A4.49 4.49 0 0 1 4.7 5.91v5.69a.77.77 0 0 0 .39.67l5.83 3.37-2.02 1.16a.07.07 0 0 1-.07 0L4 13.99a4.52 4.52 0 0 1-1.66-6.1zm17.05 3.97l-5.83-3.37 2.02-1.16a.07.07 0 0 1 .07 0l4.83 2.79a4.51 4.51 0 0 1-.7 8.14v-5.73a.77.77 0 0 0-.39-.67zM21.4 8.89l-.14-.08-4.78-2.76a.77.77 0 0 0-.78 0L9.87 9.42V7.09a.07.07 0 0 1 .03-.06l4.83-2.79a4.51 4.51 0 0 1 6.67 4.65zM8.68 12.91l-2.02-1.16a.07.07 0 0 1-.04-.06V6.11a4.51 4.51 0 0 1 7.38-3.47l-.14.08L9.08 5.5a.78.78 0 0 0-.39.67l-.01 6.74zm1.1-2.37l2.6-1.5 2.6 1.5v3l-2.6 1.5-2.6-1.5v-3z" />
      </svg>
    ),
  },
  Anthropic: {
    color: "#d4a574",
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="#d4a574">
        <path d="M13.83 2 8.36 22h3.52l5.47-20h-3.52zM6.64 2 1.17 22h3.52l5.47-20H6.64z" opacity="0.6" />
        <path d="M13.83 2l5.47 20h3.52L17.35 2h-3.52z" />
      </svg>
    ),
  },
  Gemini: {
    color: "#8b6fff",
    icon: (
      <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
        <path d="M32 4c0 15.46-12.54 28-28 28 15.46 0 28 12.54 28 28 0-15.46 12.54-28 28-28C44.54 32 32 19.46 32 4z" fill="url(#gemini-grad)" />
        <defs>
          <linearGradient id="gemini-grad" x1="4" y1="4" x2="60" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4285f4" /><stop offset="0.5" stopColor="#8b6fff" /><stop offset="1" stopColor="#d46ef6" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  Cursor: {
    color: "#fff",
    icon: (
      <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
        <rect x="8" y="8" width="48" height="48" rx="12" fill="white" opacity="0.15" />
        <path d="M20 18l24 14-24 14V18z" fill="white" opacity="0.9" />
      </svg>
    ),
  },
  "Claude Code": {
    color: "#d4a574",
    icon: (
      <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
        <rect x="6" y="10" width="52" height="36" rx="6" fill="#d4a574" opacity="0.15" stroke="#d4a574" strokeWidth="2" />
        <text x="32" y="34" textAnchor="middle" fontSize="14" fill="#d4a574" fontFamily="monospace" fontWeight="bold">&gt;_</text>
        <rect x="14" y="50" width="36" height="4" rx="2" fill="#d4a574" opacity="0.3" />
      </svg>
    ),
  },
  // Product & Operations logos
  GitHub: {
    color: "#fff",
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="white">
        <path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6.02 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.81 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3" />
      </svg>
    ),
  },
  eClinicalWorks: {
    color: "#0072ce",
    icon: (
      <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
        <rect x="8" y="8" width="48" height="48" rx="10" fill="#0072ce" opacity="0.15" stroke="#0072ce" strokeWidth="2" />
        <path d="M22 24h20M22 32h16M22 40h12" stroke="#0072ce" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M32 16v-4M32 52v4M16 32h-4M52 32h4" stroke="#0072ce" strokeWidth="1.5" opacity="0.3" />
        <circle cx="44" cy="44" r="6" fill="#0072ce" opacity="0.3" />
        <path d="M42 44l2 2 4-4" stroke="#0072ce" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  "Google Ads": {
    color: "#4285f4",
    icon: (
      <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
        <path d="M10 44l18-32 8 4.6-18 32z" fill="#fbbc04" />
        <path d="M36 16.6l18 32-8 4.6-18-32z" fill="#4285f4" />
        <circle cx="14" cy="48" r="8" fill="#34a853" />
      </svg>
    ),
  },
  "Machine Learning": {
    color: "#ff6f00",
    icon: (
      <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
        <circle cx="32" cy="32" r="6" fill="#ff6f00" />
        <circle cx="16" cy="16" r="4" fill="#ff6f00" opacity="0.6" />
        <circle cx="48" cy="16" r="4" fill="#ff6f00" opacity="0.6" />
        <circle cx="16" cy="48" r="4" fill="#ff6f00" opacity="0.6" />
        <circle cx="48" cy="48" r="4" fill="#ff6f00" opacity="0.6" />
        <line x1="20" y1="19" x2="28" y2="28" stroke="#ff6f00" strokeWidth="2" opacity="0.4" />
        <line x1="44" y1="19" x2="36" y2="28" stroke="#ff6f00" strokeWidth="2" opacity="0.4" />
        <line x1="20" y1="45" x2="28" y2="36" stroke="#ff6f00" strokeWidth="2" opacity="0.4" />
        <line x1="44" y1="45" x2="36" y2="36" stroke="#ff6f00" strokeWidth="2" opacity="0.4" />
      </svg>
    ),
  },
  "Big Data": {
    color: "#4caf50",
    icon: (
      <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
        <rect x="8" y="28" width="8" height="24" rx="2" fill="#4caf50" opacity="0.5" />
        <rect x="20" y="18" width="8" height="34" rx="2" fill="#4caf50" opacity="0.7" />
        <rect x="32" y="12" width="8" height="40" rx="2" fill="#4caf50" opacity="0.85" />
        <rect x="44" y="8" width="8" height="44" rx="2" fill="#4caf50" />
      </svg>
    ),
  },
  "Conversational AI": {
    color: "#7c4dff",
    icon: (
      <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
        <rect x="8" y="12" width="36" height="24" rx="6" fill="#7c4dff" opacity="0.7" />
        <polygon points="16,36 24,44 16,44" fill="#7c4dff" opacity="0.7" />
        <rect x="24" y="30" width="32" height="20" rx="6" fill="#7c4dff" opacity="0.4" />
        <polygon points="44,50 36,56 44,56" fill="#7c4dff" opacity="0.4" />
      </svg>
    ),
  },
  LLMs: {
    color: "#00bcd4",
    icon: (
      <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
        <circle cx="32" cy="32" r="20" stroke="#00bcd4" strokeWidth="2" fill="none" />
        <circle cx="32" cy="32" r="12" stroke="#00bcd4" strokeWidth="2" fill="none" opacity="0.6" />
        <circle cx="32" cy="32" r="4" fill="#00bcd4" />
        <line x1="32" y1="12" x2="32" y2="20" stroke="#00bcd4" strokeWidth="2" />
        <line x1="32" y1="44" x2="32" y2="52" stroke="#00bcd4" strokeWidth="2" />
        <line x1="12" y1="32" x2="20" y2="32" stroke="#00bcd4" strokeWidth="2" />
        <line x1="44" y1="32" x2="52" y2="32" stroke="#00bcd4" strokeWidth="2" />
      </svg>
    ),
  },
  // Tools logos
  Git: {
    color: "#f05032",
    icon: (
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <path fill="#f05032" d="M124.7 58.4L69.6 3.3c-3.1-3.1-8.2-3.1-11.3 0l-11.4 11.4 14.4 14.4c3.3-1.1 7.2-.4 9.9 2.2 2.7 2.7 3.4 6.7 2.1 10l13.9 13.9c3.3-1.3 7.3-.6 10 2.1 3.8 3.8 3.8 9.9 0 13.6-3.8 3.8-9.9 3.8-13.6 0-2.9-2.9-3.5-7.1-1.9-10.6l-13-13v34.2c.9.4 1.7 1 2.4 1.7 3.8 3.8 3.8 9.9 0 13.6-3.8 3.8-9.9 3.8-13.6 0-3.8-3.8-3.8-9.9 0-13.6.9-.9 1.9-1.5 3-2V52.3c-1.1-.5-2.1-1.1-3-2-2.9-2.9-3.5-7.2-1.8-10.7L31.3 25.3 3.3 53.3c-3.1 3.1-3.1 8.2 0 11.3l55.1 55.1c3.1 3.1 8.2 3.1 11.3 0l55-55c3.1-3.1 3.1-8.2 0-11.3z" />
      </svg>
    ),
  },
  "Web Development": {
    color: "#61dafb",
    icon: (
      <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
        <rect x="8" y="12" width="48" height="32" rx="4" stroke="#61dafb" strokeWidth="2.5" />
        <line x1="8" y1="20" x2="56" y2="20" stroke="#61dafb" strokeWidth="1.5" opacity="0.4" />
        <circle cx="14" cy="16" r="1.5" fill="#61dafb" opacity="0.6" />
        <circle cx="20" cy="16" r="1.5" fill="#61dafb" opacity="0.6" />
        <circle cx="26" cy="16" r="1.5" fill="#61dafb" opacity="0.6" />
        <line x1="24" y1="44" x2="40" y2="44" stroke="#61dafb" strokeWidth="2.5" />
        <line x1="32" y1="44" x2="32" y2="52" stroke="#61dafb" strokeWidth="2.5" />
        <line x1="20" y1="52" x2="44" y2="52" stroke="#61dafb" strokeWidth="2.5" />
      </svg>
    ),
  },
  SEO: {
    color: "#4caf50",
    icon: (
      <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
        <circle cx="28" cy="28" r="16" stroke="#4caf50" strokeWidth="3" />
        <line x1="40" y1="40" x2="54" y2="54" stroke="#4caf50" strokeWidth="4" strokeLinecap="round" />
        <path d="M20 28h16M28 20v16" stroke="#4caf50" strokeWidth="2" opacity="0.4" />
      </svg>
    ),
  },
  "EHR Systems": {
    color: "#e91e63",
    icon: (
      <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
        <rect x="12" y="8" width="40" height="48" rx="4" stroke="#e91e63" strokeWidth="2.5" />
        <line x1="20" y1="20" x2="44" y2="20" stroke="#e91e63" strokeWidth="2" opacity="0.5" />
        <line x1="20" y1="28" x2="38" y2="28" stroke="#e91e63" strokeWidth="2" opacity="0.4" />
        <line x1="20" y1="36" x2="42" y2="36" stroke="#e91e63" strokeWidth="2" opacity="0.3" />
        <path d="M30 44h4v4h4v4h-4v4h-4v-4h-4v-4h4z" fill="#e91e63" opacity="0.7" />
      </svg>
    ),
  },
  Accounting: {
    color: "#ff9800",
    icon: (
      <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
        <rect x="10" y="10" width="44" height="44" rx="6" stroke="#ff9800" strokeWidth="2.5" />
        <text x="32" y="40" textAnchor="middle" fontSize="24" fill="#ff9800" fontWeight="bold">$</text>
      </svg>
    ),
  },
};
