import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { useCollapseUI } from './useCollapseUI';

interface ICollapseUIProps {
  ContainerComponent: FC;
  ChildrenComponent: FC;
}

const CollapseUI: FC<ICollapseUIProps> = ({
  ContainerComponent,
  ChildrenComponent,
}) => {
  const { isVisible, handleToggleVisible } = useCollapseUI();
  return (
    <TouchableOpacity onPress={handleToggleVisible}>
      <ContainerComponent />
      {isVisible ? (
        <>
          <ChildrenComponent />
        </>
      ) : null}
    </TouchableOpacity>
  );
};

export default React.memo(CollapseUI);
