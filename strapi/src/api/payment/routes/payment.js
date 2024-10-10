module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/payment',
     handler: 'payment.exampleAction',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
