'use client';

import styles from './ActionBar.module.scss';

import * as React from 'react';
import * as Utilities from '../common/utilities';

import Insta from "../assets/insta.svg";
import XLogo from "../assets/x.svg";
import LinkedIn from "../assets/linkedin.svg";
import Github from "../assets/github.svg";


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
            icon: XLogo,
            openHotkey: 'ctrl+i',
            onClick: () => { window.open("https://x.com/simplicy_", "_blank") }
          },
          {
            icon: Github,
            openHotkey: 'ctrl+t',
            onClick: () => { window.open("https://github.com/simplicy", "_blank") }
          },
          {
            icon: Insta,
            openHotkey: 'ctrl+o',
            onClick: () => { window.open("https://instagram.com/simplicy_", "_blank") },
          },
          {
            icon: LinkedIn,
            openHotkey: 'ctrl+o',
            onClick: () => { window.open("https://linkedin.com/in/sean-p-hopkins", "_blank") },
          }
        ]}
      />
    </div>
  );
};

export default ClosytActionBar;
