import { StaticImageData } from 'next/image';
import { SwiperOptions } from 'swiper/types';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['swiper-container']: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & SwiperOptions & { class?: string; };
      ['swiper-slide']: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & SwiperOptions & { class?: string; };
    }
  }
}

export interface Comp {
    name: string;
    nav: string;
    comp: React.ReactElement;
    animateTitle: boolean;
    animateContent: boolean,
}

export interface Content {
    title: string;
    demoUrl: string;
    githubUrl: string;
    images: {
      src: StaticImageData;
      blurDataURL: string;
      alt: string;
    }[];
    description: string;
    tags: string[];
  }