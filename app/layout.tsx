import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'El Charro Funk · Ecosistema creativo', template: '%s · El Charro Funk' },
  description: 'Demo del ecosistema de música, gastronomía y experiencias de El Charro Funk en Guadalajara.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
