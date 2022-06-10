import React, { FC } from 'react';

interface ICollapseUIProps {
  isVisible: boolean;
  children: React.ReactChildren | React.ReactNode;
}

const CollapseUI: FC<ICollapseUIProps> = ({ isVisible, children
}) => {
  return <>{isVisible ? <>{children}</> : null}</>;
};

export default React.memo(CollapseUI);
