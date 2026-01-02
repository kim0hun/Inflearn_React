import classNames from "classnames/bind";
import styles from "./ButtonGroup.module.css";
import { useState } from "react";

export default function ButtonGroup({
  initialButtons,
}: {
  initialButtons: ButtonGroupProps[];
}) {
  const cx = classNames.bind(styles);
  const initialActiveStates: { [key: string]: boolean } = {};
  initialButtons.forEach((btn) => {
    initialActiveStates[btn.id] = false;
  });
  const [activeStates, setActiveStates] = useState(initialActiveStates);
  const handleToggleActiveButton = (id: number, isDisabled: boolean) => {
    if (isDisabled) return;
    setActiveStates((activeStates) => ({
      ...activeStates,
      [id]: !activeStates[id],
    }));
  };
  const handleResetActiveStates = () => {
    const resetActiveStates: { [key: string]: boolean } = {};
    initialButtons.forEach((btn) => {
      resetActiveStates[btn.id] = false;
    });
    setActiveStates(resetActiveStates);
  };
  const activeCount = Object.values(activeStates).filter(Boolean).length;

  return (
    <>
      <h1>Active Count: {activeCount}</h1>
      <div>
        {initialButtons.map((btn) => (
          <button
            className={cx("button", {
              active: activeStates[btn.id],
              disabled: btn.isDisabled,
              highlight: btn.id === 2,
            })}
            onClick={() => handleToggleActiveButton(btn.id, btn.isDisabled)}
          >
            {btn.icon} {btn.label}
          </button>
        ))}
      </div>
      <button className={cx("button")} onClick={handleResetActiveStates}>
        Reset
      </button>
    </>
  );
}
