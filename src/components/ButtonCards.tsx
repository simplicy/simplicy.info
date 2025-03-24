import { Card } from "../common/types";
import ButtonCard from "./ButtonCard";
import styles from './Cards.module.scss';

interface CardsProps {
  cards: Card[];
}


export function ButtonCards({ cards }: CardsProps) {
  const empty = () => { return; }
  const cardsmap = (data: any[]) => {
    return data?.map((item: any, index: any) => {
      if (!item.enabled) {
        return null;
      }
      return (
        <ButtonCard obj={item} key={item.id} onClick={item.onClick ? item.onClick : empty} index={index} />
      )
    })
  }

  return (
    <div className={styles.root}>
      {cardsmap(cards)}
    </div>
  );
}
