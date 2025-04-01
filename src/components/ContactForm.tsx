import { useState } from "react";
import TextArea from "../sacred/TextArea";
import Button from "../sacred/Button";
import styles from './ContactForm.module.scss';
import Divider from "../sacred/Divider";
import { contactFmc } from "../common/models";
import { EmailForCreate } from "../common/types";
import { toast } from "react-toastify";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    let data: EmailForCreate = {
      sender_name: name,
      subject: title,
      message: message,
      from: email
    }
    if (data.sender_name === "" || data.subject === "" || data.message === "" || data.from === "") {
      toast.error("Please fill out all fields");
      return;
    }
    //Check if email is somewhat an email address
    if (data.from.indexOf("@") === -1 || data.from.indexOf(".") === -1) {
      toast.error("Please enter a valid email address");
      return;
    }
    contactFmc.send_email(data).then((res) => {
      if (res) {
        toast.success("Email Sent");
        setName("");
        setTitle("");
        setMessage("");
        setEmail("");
      }
    });

  }

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
            handleSubmit();
          }}>
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}
