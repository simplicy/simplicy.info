import styles from "../style/Stepper.module.scss";
import * as Utilities from "../../common/utilities";

export default function StepperBar(
  { steps, step, setStep }: {
    steps: any[], step: number, setStep?: (step: number) => void
  }
) {
  return (
    <div className={styles.root}>
      {steps.map((element: any, index: number) => {
        if (!element.label)
          return null;
        return (
          <div key={element.label + index}
            onClick={() => {
              if (setStep && index <= step) {
                setStep(index);
              }
            }}
          >
            {index === step ? "•" : index < step ? "✓" : "○"}{" "}
            <b className={Utilities.classNames(index === step ? styles.active : styles.step)}>{element.label}</b>
          </div>
        );
      })}
    </div>

  );
}
