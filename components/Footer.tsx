import { Github, Instagram } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="py-8 bg-card border-t-1 shadow-sm">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between  space-y-6 md:space-y-0 ">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-2xl font-bold">
            DeepShort
          </Link>
        </div>

        <div className="flex space-x-4  ">
          <a
            href="https://instagram.com/deepshort"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://github.com/deepshort"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <Github size={20} />
          </a>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-6 text-sm">
        © 2024 DeepShort. All rights reserved.
      </div>
    </footer>
  );
}
