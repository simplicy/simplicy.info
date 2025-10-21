import { useEffect, useState } from "react";
import styles from './style/ContactForm.module.scss';
import AlertBanner from "../sacred/AlertBanner";
import Stepper from "./page/Stepper";
import InfoForm from "./book/Infoform";
import TimeForm from "./book/Timeform";
import ConfirmForm, { ConfirmFormProps } from "./book/Confirmform";
import { useBook } from "../common/hooks";
import BlockLoader from "../sacred/BlockLoader";

export default function BookForm() {
  let [step, setStep] = useState(0);
  let [completed, setCompleted] = useState(false);

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
    <>
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
      </div>
    </>
  );
}
