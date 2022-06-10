import React, { FC } from 'react';
import {
  IAdditionalFieldsItem,
  ICheckListUIProps,
  IColorUIProps,
  IPeriodUIProps,
  ITextListUIProps,
  ITextNumberUIProps,
  ITextUIProps,
} from '../../../../models/IAdditionalFieldsModel';
import TextListUI from '../../../../UI/TextListUI/TextListUI';
import TextUI from '../../../../UI/TextUI/TextUI';
import { useAdditionFieldsItem } from './useAdditionFieldsItem';
import TextNumberUI from '../../../../UI/TextNumberUI/TextNumberUI';
import CheckListUI from '../../../../UI/CheckListUI/CheckListUI';
import CheckBoxBooleanUI from '../../../../UI/CheckBoxBooleanUI/CheckBoxBooleanUI';
import PeriodUI from '../../../../UI/PeriodUI/PeriodUI';
import TimeTextListUI from '../../../../UI/TimeTextListUI/TimeTextListUI';
import SelectColorUI from '../../../../UI/SelectColorUI/SelectColorUI';

const AdditionFieldsItem: FC<IAdditionalFieldsItem> = (props) => {
  const {
    isText,
    isNumber,
    isBoolean,
    isTime,
    isTextList,
    isPeriod,
    isCheckList,
    isVisible,
    isTextListRenderType,
  } = useAdditionFieldsItem(props);

  return isVisible ? (
    <>
      {isTextList &&
        (isTextListRenderType ? (
          <SelectColorUI {...(props as IColorUIProps)} />
        ) : (
          <TextListUI {...(props as ITextListUIProps)} />
        ))}
      {isText && <TextUI {...(props as ITextUIProps)} />}
      {isNumber && <TextNumberUI {...(props as ITextNumberUIProps)} />}
      {isCheckList && <CheckListUI {...(props as ICheckListUIProps)} />}
      {isPeriod && <PeriodUI {...(props as IPeriodUIProps)} />}
      {isTime && <TimeTextListUI {...(props as ITextListUIProps)} />}
      {isBoolean && (
        <CheckBoxBooleanUI
          alias={props.alias}
          title={props.title}
          required={props.required}
        />
      )}
    </>
  ) : null;
};

export default React.memo(AdditionFieldsItem);
