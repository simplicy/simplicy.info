'use client';

import styles from './ActionBar.module.scss';

import * as React from 'react';
import * as Utilities from '../common/utilities';
import Hanger from "../assets/clothes-hanger.svg";
import Outfit from "../assets/outfit.svg";
import Calendar from "../assets/calendar.svg";
import Tags from "../assets/tags.svg";


import { useHotkeys } from '../common/hotkeys';


import ActionBar from '../sacred/ActionBar';
import { useNavigate } from 'react-router';

export const useGlobalNavigationHotkeys = () => {
  const onHandleSubmit = (event: KeyboardEvent) => {
    const target = event.target;
    if (Utilities.isFocusableElement(target)) {
      event.preventDefault();
      (target as HTMLElement).click();
    }
  };

  const onHandleNextFocus = (event: KeyboardEvent) => {
    const target = event.target;

    if (Utilities.isFocusableElement(target)) {
      event.preventDefault();

      const nextFocusable = Utilities.findNextFocusable(target as Element, 'next');
      if (nextFocusable) {
        nextFocusable.focus();
      }
    }
  };

  const onHandlePreviousFocus = (event: KeyboardEvent) => {
    const target = event.target;

    if (Utilities.isFocusableElement(target)) {
      event.preventDefault();

      const previousFocusable = Utilities.findNextFocusable(target as Element, 'previous');
      if (previousFocusable) {
        previousFocusable.focus();
      }
    }
  };

  useHotkeys('ArrowDown', onHandleNextFocus);
  useHotkeys('ArrowUp', onHandlePreviousFocus);
  useHotkeys('ArrowRight', onHandleNextFocus);
  useHotkeys('ArrowLeft', onHandlePreviousFocus);
  useHotkeys('Enter', onHandleSubmit);
  useHotkeys(' ', onHandleSubmit);
};

interface ClosytActionBarProps { }

const ClosytActionBar: React.FC<ClosytActionBarProps> = () => {
  let navigate = useNavigate();
  React.useEffect(() => {
  }, []);

  useGlobalNavigationHotkeys();

  return (
    <div className={styles.root}>
      <ActionBar
        items={[
          {
            icon: Hanger,
            body: 'ITEMS',
            selected: window.location.pathname === "/items",
            openHotkey: 'ctrl+i',
            onClick: () => { navigate("/items") },
          },
          {
            body: 'TAGS',
            icon: Tags,
            selected: window.location.pathname === "/tags",
            openHotkey: 'ctrl+t',
            onClick: () => { navigate("/tags") },
          },
          {
            body: 'OUTFITS',
            icon: Outfit,
            selected: window.location.pathname === "/outfits",
            openHotkey: 'ctrl+o',
            onClick: () => { navigate("/outfits") },
          },
          {
            body: 'CALENDAR',
            icon: Calendar,
            selected: window.location.pathname === "/calendar",
            openHotkey: 'ctrl+i',
            onClick: () => { navigate("/calendar") },
          },
        ]}
      />
    </div>
  );
};

export default ClosytActionBar;
