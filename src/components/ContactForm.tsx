import { useState } from "react";
import TextArea from "../sacred/TextArea";
import Button from "../sacred/Button";
import styles from './ContactForm.module.scss';
import Divider from "../sacred/Divider";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <div className={styles.form}>
        <div className={styles.title}>
          <TextArea value={title}
            placeholder="TITLE" name="title"
            cursor={false}
            onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className={styles.from}>
          From:
          <TextArea value={email}
            cursor={false}
            placeholder="EMAIL" name="email"
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <Divider />
        <div className={styles.message}>
          <TextArea value={message}
            cursor={false}
            name="message"
            style={{ minHeight: "15ch" }}
            placeholder="MESSAGE"
            onChange={(e) => setMessage(e.target.value)} />
        </div>
        <div className={styles.signature}>
          Signed,
          <TextArea value={name}
            cursor={false}
            placeholder="NAME" name="name"
            onChange={(e) => setName(e.target.value)} />
        </div>
        <div className={styles.submit}>
          <Button onClick={() => {
            console.log("Title: ", title);
            console.log("Name: ", name);
            console.log("Email: ", email);
            console.log("Message: ", message);
          }}>
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}
