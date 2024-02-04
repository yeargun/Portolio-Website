"use client";
import AnimatedLetters from "@components/AnimatedLetters/AnimatedLetters";
import styles from "./contact.module.scss";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Page = () => {
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_z1zuf8w",
        "template_tgmzj9h",
        refForm.current,
        "HhZhZe-TEl0fItohh"
      )
      .then(() => {
        alert("Message sent successfully");
      })
      .catch((err) => {
        alert("Failed to send message");
      });
  };

  return (
    <div
      className={styles.contactPage}
      style={{
        display: "flex",
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <div className={styles.textZone}>
        <h1 className={styles.nonSelectable}>
          <AnimatedLetters
            letterClass="textAnimate"
            strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
            idx={15}
          />
        </h1>
        <p className={styles.description}>
          As of now, I&apos;m more focused on backend, system design and cloud native
          applications but at the end of the day I&apos;m interested in solving
          problems.
        </p>
        <div className={styles.contactForm}>
          <form onSubmit={sendEmail}>
            <ul>
              <li className={styles.half}>
                <input placeholder="Name" type="text" name="name" required />
              </li>
              <li className={styles.half}>
                <input placeholder="Email" type="email" name="email" required />
              </li>
              <li>
                <input
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  required
                />
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>
              <li>
                <input
                  type="submit"
                  className={styles.flatButton}
                  value="SEND"
                />
              </li>
            </ul>
          </form>
        </div>
      </div>

      <div className={styles.mapWrap}>
        <iframe
          className={styles.map}
          style={{ width: "100%", height: "100%" }}
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=683&amp;height=479&amp;hl=en&amp;q=%20Ankara+(Home)&amp;t=&amp;z=5&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </div>
  );
};

export default Page;
