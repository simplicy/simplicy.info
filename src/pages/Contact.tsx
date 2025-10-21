import styles from '../style/Contact.module.scss';
import ContactForm from "../components/ContactForm";
import { motion } from 'framer-motion';
import BookForm from '../components/BookForm';
import ButtonCards from '../components/ButtonCards';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();
  let view = [<></>, <ContactForm key="contactform" />, <BookForm key="bookform" />];
  let [index, setIndex] = useState(0);
  useEffect(() => {
  }, [index]);
  return (
    <motion.div
      layout
      style={{
        display: "flex",
        height: "100%",
        alignItems: "center",
        padding: "0 2ch",
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
        {index === 0 ? null :
          <motion.div
            style={{
              padding: "1ch 0 1ch 0",
              width: "100%",
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
            <div className={styles.content}>
              {view[index]}
              {index === 0 ? null :
                <div className={styles.footer}>
                  <motion.div
                    style={{
                      padding: "1ch 0 1ch 0",
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
                        onClick: () => { setIndex(0); },
                        styles: null,
                        enabled: true,
                      }]
                    } />
                  </motion.div>
                </div>
              }
            </div>
          </motion.div>
        }
        {index === 0 ?
          <motion.div
            style={{
              padding: "1ch 0 1ch 0",
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
            <div className={styles.buttons}>
              Want to work with me or get in touch?
              <ButtonCards cards={
                [
                  {
                    name: "← Back",
                    onClick: () => { navigate(-1); },
                    styles: null, enabled: true,
                  },
                  {
                    name: "Contact Me",
                    onClick: () => { setIndex(1); },
                    styles: null,
                    enabled: true,
                  },
                  {
                    name: "Book a meeting",
                    onClick: () => { setIndex(2); },
                    styles: null, enabled: true,
                  },


                ]
              } />
            </div>
          </motion.div>
          :
          null
        }
      </div>
    </motion.div >
  );
}
