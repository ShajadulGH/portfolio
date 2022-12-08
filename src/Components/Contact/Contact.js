import styles from "./Contact.module.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_58pb02s",
        "template_jngsnqp",
        form.current,
        "c84s4728u0cs9a9PO"
      )
      .then(
        (result) => {
          setIsEmailSent(true);
          e.target.reset();
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className={styles.c}>
      <div className={styles.c_bg}></div>
      <div className={styles.c_wrapper}>
        <div className={styles.c_left}>
          <h1 className={styles.c_title}>Let's discuss your project</h1>
          <div className={styles.c_info}>
            <div className={styles.c_info_item}>
              <img src={Phone} alt="" className={styles.c_icon} />
              +880 1861171441
            </div>
            <div className={styles.c_info_item}>
              <img className={styles.c_icon} src={Email} alt="" />
              shajadulrahe@gmail.com
            </div>
            <div className={styles.c_info_item}>
              <img className={styles.c_icon} src={Address} alt="" />
              Gopibag, Dhaka, Bangladesh
            </div>
          </div>
        </div>
        <div className={styles.c_right}>
          <p className={styles.c_desc}>
            <b>Please do not hesitate to contact me.</b> If you require any
            further information, feel free to contact me
          </p>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {isEmailSent && "Thank You..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
