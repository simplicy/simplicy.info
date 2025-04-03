import { Card } from "../common/types";
import styles from './ButtonCards.module.scss';
import * as Utilities from '../common/utilities';
import AlertBanner from "../sacred/AlertBanner";

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
        <ButtonCard
          obj={item}
          isSelected={item.isSelected}
          key={item.name + index}
          styles={item.styles}
          onClick={item.onClick ? item.onClick : empty}
          index={index}
        />
      )
    })
  }

  return (
    <div className={styles.root}>
      {cardsmap(cards)}
    </div>
  );
}

export default function ButtonCard({
  obj,
  isSelected,
  onClick, index, styles: advStyle }:
  {
    obj: any,
    isSelected?: boolean,
    onClick?: () => void, index: number, styles: string | null
  }) {
  let adStyle = Utilities.classNames(advStyle, styles.base)
  return (
    <div className={advStyle ? adStyle : styles.base}>
      <AlertBanner
        isSelected={isSelected}
        key={obj.name + index}
        onClick={() => {
          if (onClick) {
            onClick();
          }
        }}
      >
        <div className={styles.cardroot}>
          <span className={styles.box}>
            <div className={styles.title}>
              {obj.name}
            </div>
            {obj.description && obj.description}
          </span>
        </div>
      </AlertBanner>
    </div>
  );
}

