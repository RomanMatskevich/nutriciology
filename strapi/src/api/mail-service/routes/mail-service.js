module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/mail-service/payment',
      handler: 'mail-service.sendMail',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/mail-service/gift',
      handler: 'mail-service.sendGiftMail',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
