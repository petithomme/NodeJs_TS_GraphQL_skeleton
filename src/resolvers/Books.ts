import { Context } from 'vm';

export const resolvers = {
  Query: {
    books: (parents: any, args: any, context: Context) => {
      console.log(context);
      return [
        {
          title: 'The Awakening',
          author: 'Kate Chopin'
        },
        {
          title: 'City of Glass',
          author: 'Paul Auster'
        }
      ];
    },
    book: (parents: any, args: any, context: Context) => {
      console.log(args.id);
      console.log(context);
      return {
        title: 'The Awakening',
        author: 'Kate Chopin'
      };
    }
  }
};
