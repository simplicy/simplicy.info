import { useState } from "react";
import TextArea from "../sacred/TextArea";
import Button from "../sacred/Button";
import styles from './style/ContactForm.module.scss';
import Divider from "../sacred/Divider";
import { EmailForCreate } from "../common/types";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useContact } from "../common/hooks";
import BlockLoader from "../sacred/BlockLoader";
import AlertBanner from "../sacred/AlertBanner";
import ButtonCards from "../components/ButtonCards";
import { useNavigate } from "react-router-dom";

export default function ContactForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const { isFetching, refetch } = useContact({ sender_name: name, subject: title, message: message, from: email });

  const handleSubmit = async () => {
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
    await refetch();
    toast.success("Submitted!");
    setName("");
    setTitle("");
    setMessage("");
    setEmail("");

  }

  return (
    <>
      <motion.div
        layout
        style={{
          display: "flex",
          height: "100%",
          alignItems: "flex-start",
          padding: "0 2ch",
          paddingTop: "1ch",
          justifyContent: "center",
          width: "100%",
        }}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <div className={styles.root}>
          <AlertBanner hover={false}>
            <div className={styles.form}>
              <h1 style={{
                alignSelf: "center"
              }}>Contact</h1>
              <div className={styles.from}>
                Subject:
                <TextArea value={title}
                  placeholder="SUBJECT" name="title"
                  cursor={false}
                  onChange={(e) => setTitle(e.target.value)} />
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
              <div className={styles.signature}>
                Signed,
                <TextArea value={name}
                  cursor={false}
                  placeholder="NAME/HANDLE" name="name"
                  onChange={(e) => setName(e.target.value)} />
              </div>
              <div className={styles.submit}>
                {isFetching ?
                  <BlockLoader mode={7} />

                  :
                  <Button onClick={() => {
                    handleSubmit();
                  }}
                    disabled={isFetching}
                  >
                    SUBMIT
                  </Button>
                }
              </div>
            </div>
          </AlertBanner>
          <div className={styles.footer}>
            <motion.div
              style={{
                padding: "1ch 0 1ch 0",
                alignSelf: "flex-end",
                maxWidth: "10ch",
                justifyContent: "flex-end",
              }}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <ButtonCards cards={
                [{
                  name: "← Back",
                  onClick: () => { navigate(-1); },
                  styles: null,
                  enabled: true,
                }]
              } />
            </motion.div>
          </div>

        </div>
      </motion.div>
    </>
  );
}
