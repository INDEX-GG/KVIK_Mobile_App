import React, { FC } from 'react';
import {
  IAdditionalFieldsItem,
  ICheckListUIProps,
  IPeriodUIProps,
  ITextAdditionalFields,
  ITextListAdditionalFields,
  ITextListUIProps,
  ITextNumberAdditionalFields,
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

  return true ? (
    <>
      {isTextList &&
        (isTextListRenderType ? (
          <SelectColorUI />
        ) : (
          // <TextListUI
          //   {...(props as IAdditionalFieldsItem & ITextListAdditionalFields)}
          // />
          null
        ))}
      {/*{isText && (*/}
      {/*  <TextUI {...(props as IAdditionalFieldsItem & ITextAdditionalFields)} />*/}
      {/*)}*/}
      {/*{isNumber && (*/}
      {/*  <TextNumberUI*/}
      {/*    {...(props as IAdditionalFieldsItem & ITextNumberAdditionalFields)}*/}
      {/*  />*/}
      {/*)}*/}
      {/*{isCheckList && <CheckListUI {...(props as ICheckListUIProps)} />}*/}
      {/*{isBoolean && (*/}
      {/*  <CheckBoxBooleanUI*/}
      {/*    alias={props.alias}*/}
      {/*    title={props.title}*/}
      {/*    required={props.required}*/}
      {/*  />*/}
      {/*)}*/}
      {/*{isPeriod && <PeriodUI {...(props as IPeriodUIProps)} />}*/}
      {/*{isTime && <TimeTextListUI {...(props as ITextListUIProps)} />}*/}
    </>
  ) : null;
};

export default React.memo(AdditionFieldsItem);
