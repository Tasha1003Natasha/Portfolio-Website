// import React from 'react';

// const Contact = () => {
//   return (
//     <div
//       name="contact"
//       className="w-full h-screen bg-gradient-to-l from-slate-900 to-amber-300  hover:bg-gradient-to-r flex justify-center items-center p-4"
//     >
//       <form
//         method="POST"
//         action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
//         className="flex flex-col max-w-[600px] w-full"
//       >
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 border-yellow-300 text-gray-300">
//             Contact
//           </p>
//           <p className="text-gray-300 py-4 cursor-pointer">
//             Submit the form below or shoot me an email - 0955712824n@gmail.com
//           </p>
//         </div>
//         <input
//           className="bg-[#ccd6f6] p-2"
//           type="text"
//           placeholder="Name"
//           name="name"
//         />
//         <input
//           className="my-4 p-2 bg-[#ccd6f6]"
//           type="email"
//           placeholder="Email"
//           name="email"
//         />
//         <textarea
//           className="bg-[#ccd6f6] p-2"
//           name="message"
//           rows="10"
//           placeholder="Message"
//         ></textarea>
//         <button className="text-[#0a192f] bg-[#ccd6f6] border-2 hover:bg-yellow-300 hover:border-yellow-300 px-4 py-3 my-8 mx-auto flex items-center">
//           Let's Collaborate
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Contact;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = e => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         'service_hwwg7xl',
//         'template_3vs9u82',
//         form.current,
//         'YfNaQehsp_RK-5VvS'
//       )
//       .then(
//         result => {
//           console.log(result.text);
//         },
//         error => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <div
//       name="contact"
//       className="w-full h-screen bg-gradient-to-l from-slate-900 to-amber-300  hover:bg-gradient-to-r flex justify-center items-center p-4"
//     >
//       <form
//         ref={form}
//         onSubmit={sendEmail}
//         className="flex flex-col max-w-[600px] w-full"
//       >
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 border-yellow-300 text-gray-300">
//             Contact
//           </p>
//           <p className="text-gray-300 py-4 cursor-pointer">
//             Submit the form below or shoot me an email - 0955712824n@gmail.com
//           </p>
//         </div>
//         <input
//           className="bg-[#ccd6f6] p-2"
//           type="text"
//           placeholder="Name"
//           name="user_name"
//         />
//         <input
//           className="my-4 p-2 bg-[#ccd6f6]"
//           type="email"
//           placeholder="Email"
//           name="user_email"
//         />
//         <textarea
//           className="bg-[#ccd6f6] p-2"
//           name="message"
//           rows="10"
//           placeholder="Message"
//         ></textarea>
//         <button
//           type="submit"
//           value="Send"
//           className="text-[#0a192f] bg-[#ccd6f6] border-2 hover:bg-yellow-300 hover:border-yellow-300 px-4 py-3 my-8 mx-auto flex items-center"
//         >
//           Let's Collaborate
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Contact;
///////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [toSend, setToSend] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const [done, setDone] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    emailjs
      .send('service_hwwg7xl', 'template_3vs9u82', toSend, 'YfNaQehsp_RK-5VvS')
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
        setDone(true);
      })
      .catch(err => {
        console.log('FAILED...', err);
      });
    setToSend({
      user_name: '',
      user_email: '',
      message: '',
    });
  };

  const handleChange = e => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-l from-slate-900 to-amber-300  hover:bg-gradient-to-r flex justify-center items-center p-4"
    >
      <form onSubmit={onSubmit} className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-300 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4 cursor-pointer">
            Submit the form below or shoot me an email - 0955712824n@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="user_name"
          value={toSend.user_name}
          onChange={handleChange}
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="user_email"
          value={toSend.user_email}
          onChange={handleChange}
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
          value={toSend.message}
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          value="Send"
          className="text-[#0a192f] bg-[#ccd6f6] border-2 hover:bg-yellow-300 hover:border-yellow-300 px-4 py-3 my-8 mx-auto flex items-center"
        >
          Let's Collaborate
        </button>
        <span className="text-gray-300 py-4 cursor-pointer">
          {done && 'Thank you for contacting me'}
        </span>
      </form>
      0
    </div>
  );
};

export default Contact;
