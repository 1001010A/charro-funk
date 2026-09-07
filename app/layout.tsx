import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'Charrofunka Company · Ecosistema creativo', template: '%s · Charrofunka Company' },
  description: 'Música, gastronomía y experiencias de Charrofunka Company en Guadalajara.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
