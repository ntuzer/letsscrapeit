import axios from "axios";
// import fetch from "node-fetch";

export const contactSubmit = async (data) => {
  const { name: { value: nameValue }, email: { value: emailValue }, message: { value: messageValue }, } = data.target.elements;

  const res = await axios({
    url: 'http://127.0.0.1:10000/api/lsi/contact',
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    data: {
      name: nameValue,
      email: emailValue,
      message: messageValue,
    }
  });

  console.log(res);
}