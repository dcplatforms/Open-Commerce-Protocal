'use client';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import darkTheme from '@/theme/dark';

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={darkTheme}>
      {children}
    </ThemeProvider>
  );
}