import { StaticImageData } from 'next/image';

export interface Work {
  id: number;
  title: string;
  year: string;
  tag: string;
  text: string;
  poster: StaticImageData;
}
