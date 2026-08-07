'use client';

import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);
  return (
    <button onClick={() => setDark((prev) => !prev)} className="rounded-full border border-white/10 bg-white/10 p-2 text-white/80">
      {dark ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}
