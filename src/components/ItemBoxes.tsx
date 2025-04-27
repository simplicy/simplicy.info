import { BoxItemProps } from "../common/types";
import styles from './style/ItemBoxes.module.scss';
import * as Utilities from '../common/utilities';
import Card from "../sacred/Card";
import { useEffect, useState } from "react";

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
    <div className={styles.map}>
      {cardsmap(cards)}
    </div>
  );
}

export default function BoxItem({
  obj, onClick, index,
}: { obj: any, onClick?: () => void, index: number, styles: string | null }) {


  const [clicked, setClicked] = useState(false);

  useEffect(() => {
  }, [clicked]);

  let base = Utilities.classNames(styles.base, clicked ? styles.focused : styles.unfocused);

  return (
    <div className={base}
      onClick={() => {
        setClicked(!clicked);
      }}
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
        }}>
        {clicked &&
          <>
            <div className={styles.root}>
              {obj.imgs && obj.imgs[0] &&
                <div
                  onClick={() => {
                    if (onClick) {
                      onClick();
                    }
                  }}
                  className={styles.imgbox}>
                  <img src={obj.imgs[0]}
                    className={styles.img}
                  />
                </div>
              }
              <span className={styles.box}>
                {obj.description && obj.description}
              </span>
            </div>
          </>
        }
      </Card>
    </div >
  );
}

