"use client"
import styles from "../styles/contact.module.css";
import { useRef } from "react";

const Contact = () => {
  const nameRef = useRef<HTMLInputElement | null>(null);
const emailRef = useRef<HTMLInputElement | null>(null);
const messageRef = useRef<HTMLTextAreaElement | null>(null);

  function generateMailto() {
    const name: string = nameRef.current?.value || "";
    const email: string = emailRef.current?.value || "";
    const message: string = messageRef.current?.value || "";
  
    if (email && message) {
      const mailtoLink =
        "mailto:vikashkhati007@gmail.com?subject=" +
        encodeURIComponent("Contact Form Submission") +
        "&body=" +
        encodeURIComponent(
          "Name : " +
          name +
          "\n" +
          "Email : " +
          email +
          "\n" +
          "Message: " +
          message
        );
  
      window.location.href = mailtoLink;
    }
  }
 

  return (
    <>
      <div className={styles.contactform}>
        <span className={styles.heading}>Contact Us</span>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" required id="name" ref={nameRef} />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required ref={emailRef} />
          <label htmlFor="message">Message:</label>
          <textarea
            className={styles.textarea}
            name="message"
            required
            ref={messageRef}
          />
          <button className={styles.button} type="submit" onClick={generateMailto}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;