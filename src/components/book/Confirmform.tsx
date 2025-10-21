import Button from "../../sacred/Button";
import styles from "./Confirmform.module.scss";
import { motion } from "framer-motion";
import Divider from "../../sacred/Divider";
export type ConfirmFormProps = {
  attendees: string;
  subject: string;
  message: string;
  start: string;
}
export default function ConfirmForm({ handleContinue, data }: { handleContinue: () => void, data: ConfirmFormProps }) {
  const onSubmit = async () => {
    handleContinue();
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
          Attendees: {data.attendees}
        </div>
        <div className={styles.from}>
          Subject: {data.subject}
        </div>
        <div className={styles.from}>
          Time: {data.start}
        </div>
        <Divider />
        <div className={styles.message}>
          Message: {data.message}
        </div>
        <Button type="submit"
          style={{ maxWidth: "min-content", justifyContent: "flex-end", alignSelf: "flex-end" }}
          onClick={() => onSubmit()}>Submit</Button>
      </div>
    </motion.div>
  );
}
