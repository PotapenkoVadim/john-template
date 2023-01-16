import johnImage from '../public/images/main-john.png';
import workOne from '../public/images/work-1.png';
import workTwo from '../public/images/work-2.png';
import workThree from '../public/images/work-3.png';

export const configuration = {
  homePage: {
    mainImage: {
      width: 243,
      height: 243,
      quality: 100,
      image: johnImage
    },
    posts: [
      {
        id: 1,
        title: 'Making a design system from scratch',
        data: '12 Feb 2020',
        tags: ['Design', 'Pattern'],
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
      },
      {
        id: 2,
        title: 'Creating pixel perfect icons in Figma',
        data: '12 Feb 2020',
        tags: ['Figma', 'Icon Design'],
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
      }
    ],
    works: [
      {
        id: 1,
        title: 'Designing Dashboards',
        year: '2020',
        tag: 'Dashboard',
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        poster: workOne
      },
      {
        id: 2,
        title: 'Vibrant Portraits of 2020',
        year: '2018',
        tag: 'Illustration',
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        poster: workTwo
      },
      {
        id: 3,
        title: '36 Days of Malayalam type',
        year: '2018',
        tag: 'Typography',
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        poster: workThree
      }
    ]
  },
  routes: {
    home: '/',
    works: '/works',
    blog: '/blog',
    contact: '/contact'
  }
};
