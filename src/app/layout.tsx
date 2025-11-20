// Root layout wrapper
import "./globals.css";
import "@/app/home/home.css";
import React from 'react';
import { LayoutShell } from '@/components/navigation/LayoutShell';

// Navigation store is integrated with NavRail component
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LayoutShell>
          {children}
        </LayoutShell>
      </body>
    </html>
  );
}

