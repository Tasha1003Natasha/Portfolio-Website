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
    // console.log(process.env);
    e.preventDefault();
    emailjs
      // .send(
      //   process.env.REACT_APP_SERVICE_ID,
      //   process.env.REACT_APP_TEMPLATE_ID,
      //   'service_d6bwsu8',
      //   'template_3vs9u82',
      //   toSend,
      //   process.env.REACT_APP_PUBLIC_KEY
      // )
      .send('service_d6bwsu8', 'template_3vs9u82', toSend, 'YfNaQehsp_RK-5VvS')
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
      className="w-full h-screen md:px-4 px-8 flex justify-center items-center  bg-[#adbbc5] text-[#000080] dark:bg-[#0d1c2c] dark:text-[#0d1c2c]"
    >
      <form
        onSubmit={onSubmit}
        className="text-base flex flex-col sm:max-w-[600px] w-full"
      >
        <div>
          <p className="text-base sm:text-2xl md:text-3xl font-bold inline border-b-4 text-[#000080] dark:text-gray-300 border-[#fffd88]  dark:border-yellow-300">
            Contact
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-white dark:text-gray-300 lg:py-4 py-2 cursor-pointer">
            Submit the form below or shoot me an email: 0955712824n@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 outline-none"
          type="text"
          placeholder="Name"
          name="user_name"
          value={toSend.user_name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
        <input
          className="lg:my-4 p-2 my-2 bg-[#ccd6f6] outline-none"
          type="email"
          placeholder="Email"
          name="user_email"
          value={toSend.user_email}
          onChange={handleChange}
          pattern="^\S+@\S+\.\S+$"
          required
        />
        <textarea
          className="bg-[#ccd6f6] p-2 outline-none"
          name="message"
          rows="6"
          placeholder="Message"
          value={toSend.message}
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          value="Send"
          className="text-sm md:text-lg lg:px-4 lg:py-2 lg:my-4 my-2 px-2 text-[#0a192f] bg-[#ccd6f6] border-2 hover:bg-[#fffd88] hover:border-bg-[#fffd88] dark:hover:bg-yellow-300 dark:hover:border-yellow-300  mx-auto flex items-center"
        >
          Let's Collaborate
        </button>
        <span className="text-gray-300 cursor-pointer flex  justify-center items-center ">
          {done && 'Thank you for contacting me!'}
        </span>
      </form>
    </div>
  );
};

export default Contact;
