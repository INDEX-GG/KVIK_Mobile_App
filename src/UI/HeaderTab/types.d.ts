export interface HeaderTabProps {
  title: string;
  arrow?: boolean;
  resultKey?: string;
  dynamicFunction?: () => any;
  children?: JSX.Element;
  childrenStyles?: {};
}
