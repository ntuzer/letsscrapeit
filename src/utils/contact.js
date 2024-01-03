import axios from "axios";
// import fetch from "node-fetch";

export const contactSubmit = async (data) => {
  const { name: { value: nameValue }, email: { value: emailValue }, message: { value: messageValue }, } = data.target.elements;
  const ref = document.referrer;
  const window_size = window.screen.width + 'x' + window.screen.height;

  await axios({
    url: 'https://render-server-m6tq.onrender.com/api/lsi/contact',
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    data: {
      name: nameValue,
      email: emailValue,
      message: messageValue,
      referer: ref,
      window_size,
    }
  });

  // console.log(res);
}