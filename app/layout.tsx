import './globals.css';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata = {
  title: 'Dark Sentry Portfolio',
  description: 'Futuristic web developer portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} font-sans bg-white dark:bg-black text-black dark:text-white transition-colors`}>
        {children}
      </body>
    </html>
  );
}
