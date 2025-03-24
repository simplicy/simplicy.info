'use client';

import styles from './ButtonGroup.module.scss';

import * as Utilities from '../common/utilities';

import ActionButton from './ActionButton';
import DropdownMenuTrigger from './DropdownMenuTrigger';

const ButtonGroup = (props: any) => {
  if (!props.items) {
    return null;
  }

  return (
    <div className={Utilities.classNames(styles.root, props.isFull ? styles.full : null)}>
      {props.items.map((each: any) => {
        if (each.items) {
          return (
            <DropdownMenuTrigger key={each.body} items={each.items} hotkey={each.openHotkey}>
              <ActionButton hotkey={each.hotkey} isSelected={each.selected} icon={each.icon}>
                {each.body}
              </ActionButton>
            </DropdownMenuTrigger>
          );
        }

        return (
          <ActionButton key={each.body} icon={each.icon} onClick={each.onClick} hotkey={each.hotkey} isSelected={each.selected}>
            {each.body}
          </ActionButton>
        );
      })}
    </div>
  );
};

export default ButtonGroup;
