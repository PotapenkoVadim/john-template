import johnImage from '../public/images/main-john.png';

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
    ]
  },
  routes: {
    home: '/',
    works: '/works',
    blog: '/blog',
    contact: '/contact'
  }
};
