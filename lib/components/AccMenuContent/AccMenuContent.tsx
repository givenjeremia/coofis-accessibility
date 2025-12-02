import { FC } from "react";
import classNames from "classnames";
import AccMenuContentBlock from "../AccMenuContentBlock/AccMenuContentBlock";
import AccContent from "../AccContent/AccContent";
import AccColors from "../AccColors/AccColors";
import AccTools from "../AccTools/AccTools";
import { AccessibilikState, ChangeAccDraftHander } from "../../types";
import styled from "./AccMenuContent.module.scss";
import { CollapsedState, CollapsedStateKeys } from "../../config";

interface AccMenuContentProps {
  accState: AccessibilikState;
  onChangeAccState: (fn: ChangeAccDraftHander) => void;
  onCollapse: (name: CollapsedStateKeys) => void;
  collapsedState: CollapsedState;
}

const AccMenuContent: FC<AccMenuContentProps> = ({
  accState,
  onChangeAccState,
  onCollapse,
  collapsedState,
}) => {
  // ✅ ADA card yang expand?
  const hasExpanded = Object.values(collapsedState).some(
    ({ isExpanded }) => isExpanded
  );

  return (
    <div
      className={classNames(
        styled.accMenuContent,
        hasExpanded && styled.singleColumn // 🔥 INI KUNCINYA
      )}
    >
      <AccMenuContentBlock
        isAccMenuContentActive={hasExpanded}
        onCollapse={onCollapse}
        isExpanded={collapsedState.content.isExpanded}
        name={collapsedState.content.name as CollapsedStateKeys}
        Icon={collapsedState.content.icon}
        tKey="content.title"
      >
        <AccContent accState={accState} onChangeAccState={onChangeAccState} />
      </AccMenuContentBlock>

      <AccMenuContentBlock
        isAccMenuContentActive={hasExpanded}
        onCollapse={onCollapse}
        isExpanded={collapsedState.colors.isExpanded}
        name={collapsedState.colors.name as CollapsedStateKeys}
        Icon={collapsedState.colors.icon}
        tKey="colors.title"
      >
        <AccColors accState={accState} onChangeAccState={onChangeAccState} />
      </AccMenuContentBlock>

      <AccMenuContentBlock
        isAccMenuContentActive={hasExpanded}
        onCollapse={onCollapse}
        isExpanded={collapsedState.tools.isExpanded}
        name={collapsedState.tools.name as CollapsedStateKeys}
        Icon={collapsedState.tools.icon}
        tKey="tools.title"
      >
        <AccTools accState={accState} onChangeAccState={onChangeAccState} />
      </AccMenuContentBlock>
    </div>
  );
};

export default AccMenuContent;
