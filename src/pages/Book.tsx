import { useEffect, useState } from "react";
import styles from './style/ContactForm.module.scss';
import AlertBanner from "../sacred/AlertBanner";
import Stepper from "../components/page/Stepper";
import InfoForm from "../components/book/Infoform";
import TimeForm from "../components/book/Timeform";
import ConfirmForm, { ConfirmFormProps } from "../components/book/Confirmform";
import { useBook } from "../common/hooks";
import BlockLoader from "../sacred/BlockLoader";
import ButtonCards from "../components/ButtonCards";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function BookForm() {
  let [step, setStep] = useState(0);
  let [completed, setCompleted] = useState(false);
  let navigate = useNavigate();

  const [formData, setFormData] = useState<ConfirmFormProps>(
    {
      attendees: "",
      subject: "",
      message: "",
      start: "",
    }
  );
  const handleContinue = (data: any) => {
    setFormData({ ...formData, ...data });
    console.log(data);
    setStep(step + 1);
  };
  const { isFetching, refetch } = useBook(formData);
  const handleFinish = async () => {
    refetch();
    setFormData({
      attendees: "",
      subject: "",
      message: "",
      start: "",
    });
    setCompleted(true);
  }

  const steps = [
    {
      label: "Info",
      element: <InfoForm handleContinue={handleContinue} />,
    },
    {
      label: "Time",
      element: <TimeForm handleContinue={handleContinue} />,
    },
    {
      label: "Confirm",
      element: <ConfirmForm data={formData} handleContinue={handleFinish} />,
    }
  ]

  useEffect(() => {
  }, [completed, step, formData]);

  return (
    <motion.div
      layout
      style={{
        display: "flex",
        paddingTop: "1ch",
        height: "100%",
        alignItems: "flex-start",
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
        <AlertBanner hover={false}>
          {isFetching ?
            <div className={styles.loader}>
              <BlockLoader mode={7} />
            </div>
            :
            <div className={styles.form}>
              <h1 style={{
                alignSelf: "center"
              }}>Book</h1>
              {completed ? <div style={{ minHeight: "2rem" }} >
                Thank you! Your booking has been submitted.
                Please check your email for confirmation.
              </div> :
                <>
                  <Stepper step={step} steps={steps} />
                  {steps[step].element}
                </>
              }
            </div>
          }
        </AlertBanner>
        <div className={styles.footer}>
          <motion.div
            style={{
              maxWidth: "10ch",
              padding: "1ch 0 1ch 0",
              alignSelf: "flex-end",
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
                onClick: () => { navigate(-1) },
                styles: null,
                enabled: true,
              }]
            } />
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
}
