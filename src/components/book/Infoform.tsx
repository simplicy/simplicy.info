import { useState } from "react";
import Button from "../../sacred/Button";
import styles from "./Infoform.module.scss";
import { motion } from "framer-motion";
import TextArea from "../../sacred/TextArea";
import Divider from "../../sacred/Divider";
import { toast } from "react-toastify";
export default function InfoForm({ handleContinue }: { handleContinue: (data: any) => void }) {
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const onSubmit = async () => {
    if (email.trim() === "" || subject.trim() === "" || message.trim() === "") {
      toast.error("Please fill out all fields");
      return;
    }
    //Check if email is somewhat an email address
    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
      toast.error("Please enter a valid email address");
      return;
    }
    handleContinue({
      message: message,
      subject: subject,
      attendees: email,
    });
  }
  return (
    <motion.div
      layout
      style={{
        overflow: "hidden",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        display: 'flex',
        flexGrow: 1,
        height: "inherit",
        width: "inherit",
      }}
      initial={{ opacity: 0, }}
      animate={{ opacity: 1, }}
      transition={{
        duration: .25,
      }}
    >
      <div className={styles.root}>
        <div className={styles.from}>
          Subject:
          <TextArea value={subject}
            cursor={false}
            placeholder="Title" name="title"
            onChange={(e) => setSubject(e.target.value)} />
        </div>
        <div className={styles.from}>
          From:
          <TextArea value={email}
            cursor={false}
            placeholder="YOUR EMAIL" name="email"
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
        <Button type="submit"
          style={{ maxWidth: "min-content", justifyContent: "flex-end", alignSelf: "flex-end" }}
          onClick={() => onSubmit()}>Continue</Button>
      </div>
    </motion.div>
  );
}
