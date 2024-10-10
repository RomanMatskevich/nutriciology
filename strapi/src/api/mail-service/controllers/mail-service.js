'use strict';


module.exports = {
  sendMail: async (ctx, next) => {
    // console.log("sdds")
    // const {
    //   billAmount,
    //   description,
    //   selected_options,
    //   fullName,
    //   phone,
    //   email,
    // } = await ctx.request.body;

    // try {
    //   const info = await transporter.sendMail({
    //     from: 'rafinad102@gmail.com',
    //     to: [email, "rafinad102@gmail.com"],
    //     subject: "Написання бізнес плану", 
    //     text: "Hello)",
    //     html: `<b>Привіт, я отримала заявку, та незабаром зв'яжусь з тобою.</b><br></br>Деталі заявки:<br></br>${description}`, 
    //   })
    //   ctx.body = info;
    // } catch (err) {
    //   console.log(err)
    //   ctx.body = err;
    // }
  },
  sendGiftMail: async (ctx, next) => {
    console.log(ctx);
    const { fullName, email } = ctx.request.body
    if (!fullName || !email) {
      ctx.status = 404;
      ctx.body = {
        "data": null,
        "error": {
          "status": 404,
          "name": "Invalid request data",
          "message": "Invalid request data"
        }
      }
    }
    const html = `<div>${fullName}</div>`
    try {
      const res = strapi.service('api::mail-service.mail-service').sendEmail(email, html)
      return res;
    } catch (err) {
      ctx.throw(500, 'Unable to fetch products');
    }
    return
  }
};
