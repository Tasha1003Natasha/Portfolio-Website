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
      className="w-full h-screen flex justify-center items-center p-4 bg-[#adbbc5] text-[#000080] dark:bg-[#0d1c2c] dark:text-[#0d1c2c]"
    >
      <form onSubmit={onSubmit} className="flex flex-col max-w-[600px] w-full">
        <div className="pt-2">
          <p className="text-4xl font-bold inline border-b-4 text-[#000080] dark:text-gray-300 border-[#fffd88]  dark:border-yellow-300">
            Contact
          </p>
          <p className="text-white dark:text-gray-300 py-4 cursor-pointer">
            Submit the form below or shoot me an email - 0955712824n@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] my-4 p-2 outline-none"
          type="text"
          placeholder="Name"
          name="user_name"
          value={toSend.user_name}
          onChange={handleChange}
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] outline-none"
          type="email"
          placeholder="Email"
          name="user_email"
          value={toSend.user_email}
          onChange={handleChange}
        />
        <textarea
          className="bg-[#ccd6f6] p-2 outline-none"
          name="message"
          rows="10"
          placeholder="Message"
          value={toSend.message}
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          value="Send"
          className="text-[#0a192f] bg-[#ccd6f6] border-2 hover:bg-[#fffd88] hover:border-bg-[#fffd88] dark:hover:bg-yellow-300 dark:hover:border-yellow-300 px-4 py-3 my-8 mx-auto flex items-center"
        >
          Let's Collaborate
        </button>
        <span className="text-gray-300 py-4 cursor-pointer">
          {done && 'Thank you for contacting me'}
        </span>
      </form>
    </div>
  );
};

export default Contact;
