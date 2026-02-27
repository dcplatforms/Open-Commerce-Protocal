'use client';

import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";
import { mdxComponents } from "./MDXComponents";

export default function RemoteMdx({ source }: { source: any }) {
  return <MDXRemote {...source} components={mdxComponents} />;
}
