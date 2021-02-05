export default [
  {
    url: '/api/getUser',
    method: 'get',
    response: ({ body }) => {
      console.log('body>>>>>>>>', body);
      return {
        code: 0,
        message: 'ok',
        data: ['chaner', 'louiebb'],
      };
    },
  },
];
