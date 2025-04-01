'use client';
import Card from '../../sacred/Card';
import styles from './ModalBuy.module.scss';
import Button from '../../sacred/Button';
import { useModals } from '../../sacred/page/ModalContext';

interface ModalBuyProps {
  onConfirm: () => void;
}

export default function ModalBuy({ onConfirm }: ModalBuyProps) {
  const { close } = useModals();

  const onClick = () => {
    onConfirm();
  };

  return (
    <div className={styles.root}>
      <Card title="MORE.SPACE" className={styles.card}>
        <div className={styles.message}>
          Increase limit?
          <p>
          </p>
        </div>
        <div className={styles.row}>
          <Button onClick={() => close()}>CANCEL</Button>
          <Button onClick={() => onClick()}>CONFIRM</Button>
        </div>
      </Card>
    </div >
  );
}

