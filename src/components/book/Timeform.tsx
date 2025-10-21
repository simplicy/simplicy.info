import styles from "./Timeform.module.scss";
import Divider from "../../sacred/Divider";
import DatePicker from "../../sacred/DatePicker";
import ButtonCards from "../ButtonCards";
import { useSlots } from "../../common/hooks";
import { useEffect, useState } from "react";
import BlockLoader from "../../sacred/BlockLoader";
export default function TimeForm({ handleContinue }: { handleContinue: (data: any) => void }) {
  const { data, isFetching, refetch } = useSlots();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  useEffect(() => {
    refetch();
  }, []);
  useEffect(() => {
  }, [selectedDate]);
  const onSubmit = async (data: any) => {
    handleContinue({ start: data.start });
  }
  return (
    <div className={styles.root}>
      <div className={styles.cal}>
        <DatePicker setSelectedDate={setSelectedDate} />
      </div>
      <Divider />

      {isFetching ?
        <div className={styles.loader}>
          <BlockLoader mode={7} />
        </div>
        :
        <div className={styles.footer}>
          <ButtonCards cards={
            data ? data
              .filter((slot: any) => {
                const slotDate = new Date(slot.start);
                if (slotDate.toDateString() !== selectedDate.toDateString()) {
                  return false;
                }
                return true;
              })
              .map((slot: any) => ({
                name: new Date(slot.start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) +
                  " - " + (new Date(slot.end).getTime() - new Date(slot.start).getTime()) / (1000 * 60) + " Min",
                onClick: () => onSubmit(slot),
                styles: styles.card,
                enabled: true,
              })) : []
          } />
          {data && data
            .filter((slot: any) => {
              const slotDate = new Date(slot.start);
              if (slotDate.toDateString() !== selectedDate.toDateString()) {
                return false;
              }
              return true;
            }).length === 0 && <div className={styles.noSlots}>
              No available slots for this date.
            </div>
          }
        </div>
      }
    </div>
  );
}
