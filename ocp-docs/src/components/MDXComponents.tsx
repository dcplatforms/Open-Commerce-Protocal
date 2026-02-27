'use client';

import React from 'react';

export const mdxComponents = {
  h1: (props: any) => <h1 className="text-4xl font-montserrat font-bold mt-12 mb-6" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-montserrat font-semibold mt-10 mb-4 pb-2 border-b border-white/10" {...props} />,
  p: (props: any) => <p className="text-white/70 leading-relaxed mb-6" {...props} />,
  a: (props: any) => <a className="text-primary hover:underline transition-all" {...props} />,
};
