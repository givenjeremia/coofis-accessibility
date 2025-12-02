import { FC, useEffect, useRef, useState } from "react";
import { ACC_MENU_CONTAINER_ID } from "../../constants";
import Header from "../Header/Header";
import { AccessibilikState, ChangeAccDraftHander } from "../../types";
import { produce } from "immer";
import Footer from "../Footer/Footer";
import styled from "./AccessibilityMenu.module.scss";
import AccMenuContent from "../AccMenuContent/AccMenuContent";
import {
  CollapsedState,
  CollapsedStateKeys,
  collapsedStateInit,
} from "../../config";

interface AccessibilityMenuProps {
  display: string;
  accState: AccessibilikState;
  onChangeAccState: (fn: ChangeAccDraftHander) => void;
  onInit: () => void;
  onShow: () => void;
  showAcc: boolean;
}

const AccessibilityMenu: FC<AccessibilityMenuProps> = ({
  accState,
  display,
  onInit,
  onChangeAccState,
  onShow,
  showAcc,
}) => {
  const [collapsedState, setCollapsedState] =
    useState<CollapsedState>(collapsedStateInit);

  const selectRef = useRef<any>(null);

  useEffect(() => {
    if (selectRef.current) {
      selectRef.current.focus();
    }
  }, []);

  const toggleCollapseHandler = (name: CollapsedStateKeys) => {
    setCollapsedState((prev) =>
      produce(collapsedStateInit, (draft) => {
        draft[name].isExpanded = !prev[name].isExpanded;
      })
    );
  };

  const isAnyExpanded = Object.values(collapsedState).some(
    (item) => item.isExpanded
  );

  return (
    <div id={ACC_MENU_CONTAINER_ID} className={styled.accAccessibilityMenu}>
      <div
        style={{ display }}
        className={`${styled.accMenu} ${
          isAnyExpanded ? styled.isExpanded : ""
        }`}
      >
        <Header onShow={onShow} onInit={onInit} />

        <AccMenuContent
          onCollapse={toggleCollapseHandler}
          accState={accState}
          onChangeAccState={onChangeAccState}
          collapsedState={collapsedState}
        />

        <Footer />
      </div>

      {showAcc && <div className={styled.accAccessibilityMenu__overlay} />}
    </div>
  );
};

export default AccessibilityMenu;
