import styles from "./Stepper.module.scss";
import * as Utilities from "../common/utilities";

export default function StepperBar(
  { steps, step }: {
    steps: any[], step: number
  }
) {
  return (
    <div className={styles.root}>
      {steps.map((element: any, index: number) => {
        if (!element.label)
          return null;
        return (
          <div key={element.label + index} className={Utilities.classNames(index === step ? styles.active : styles.step)}>
            <b>{element.label}</b>
          </div>
        );
      })}
    </div>

  );
}
