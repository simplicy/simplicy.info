'use client';

import styles from './ActionBar.module.scss';

import * as React from 'react';
import * as Utilities from '../common/utilities';
import Hanger from "../assets/clothes-hanger.svg";
import Outfit from "../assets/outfit.svg";
import Tags from "../assets/tags.svg";


import { useHotkeys } from '../common/hotkeys';


import ActionBar from '../sacred/ActionBar';

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

  useGlobalNavigationHotkeys();

  return (
    <div className={styles.root}>
      <ActionBar
        items={[
          {
            icon: Hanger,
            body: 'X',
            selected: window.location.pathname === "/items",
            openHotkey: 'ctrl+i',
            onClick: () => { window.open("https://x.com/simplicy_", "_blank") }
          },
          {
            body: 'Github',
            icon: Tags,
            selected: window.location.pathname === "/tags",
            openHotkey: 'ctrl+t',
            onClick: () => { window.open("https://github.com/simplicy", "_blank") }
          },
          {
            body: 'Instagram',
            icon: Outfit,
            selected: window.location.pathname === "/outfits",
            openHotkey: 'ctrl+o',
            onClick: () => { window.open("https://instagram.com/simplicy_", "_blank") },
          },
        ]}
      />
    </div>
  );
};

export default ClosytActionBar;
