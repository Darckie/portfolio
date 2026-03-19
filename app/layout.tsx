
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
  title: 'Kunwar Brijesh Portfolio',
  description: 'Premium frontend developer portfolio for Kunwar Brijesh.',
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bricolage.variable} ${firaCode.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
