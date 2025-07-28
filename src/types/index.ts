import { ReactNode } from 'react';

export interface PostData {
  date: string;
  slug: string;
  title: string;
  image: string;
  contentHtml?: string;
}

export interface PostMatter {
  title: string;
  date: string;
  image: string;
}

export interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export interface NavbarProps {
  children?: ReactNode;
  title?: string;
}

export interface FooterProps {
  children?: ReactNode;
  title?: string;
}
