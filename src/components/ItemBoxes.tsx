import { BoxItemProps } from "../common/types";
import styles from './ItemBoxes.module.scss';
import * as Utilities from '../common/utilities';
import Card from "../sacred/Card";

interface CardsProps {
  cards: BoxItemProps[];
}

export function ItemBoxes({ cards }: CardsProps) {
  const empty = () => { return; }
  const cardsmap = (data: any[]) => {
    return data?.map((item: any, index: any) => {
      if (!item.enabled) {
        return null;
      }
      return (
        <BoxItem
          obj={item}
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

export default function BoxItem({
  obj, onClick, index, styles: advStyle,
}: { obj: any, onClick?: () => void, index: number, styles: string | null }) {
  let adStyle = Utilities.classNames(advStyle, styles.base)
  return (
    <div className={advStyle ? adStyle : styles.base}
      style={{
        animationDelay: `${index * 0.1}s`,
        transform: `translateY(${index * 20}px)`
      }}
    >
      <div className={styles.label}>
        {obj.name}
      </div>
      <Card
        key={obj.name + index}
        style={{
          backgroundColor: "var(--theme-background)",
        }}
        onClick={() => {
          if (onClick) {
            onClick();
          }
        }}
      >
        <div className={styles.root}>
          {obj.imgs && obj.imgs[0] &&
            <div className={styles.imgbox}>
              <img src={obj.imgs[0]}
                className={styles.img}
              />
            </div>
          }
          <span className={styles.box}>
            <div className={styles.title}>
              {obj.name}
            </div>
            {obj.description && obj.description}
          </span>
        </div>
      </Card>
    </div>
  );
}

