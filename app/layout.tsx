
import './globals.css';
import { Bricolage_Grotesque, Fira_Code } from 'next/font/google';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira',
});

export const metadata = {
  title: 'Brijesh Kunwar | Frontend Developer',
  description: 'Premium frontend developer portfolio. Building fast, clean, and deliberate interfaces with React, Next.js, and modern web technologies. 2+ years of experience.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  themeColor: '#faf8f5',
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-white">
      <body className={`${bricolage.variable} ${firaCode.variable} font-sans antialiased bg-[#faf8f5]`}>
        {children}
      </body>
    </html>
  );
}
