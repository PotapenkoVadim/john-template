import { ReactNode } from 'react';

export interface NavigationItem {
  id: number;
  link: string;
  node: ReactNode;
}
