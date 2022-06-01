export type PhotoType = string | 'lastPhoto';

export interface IPhotoItemProps {
  photo: PhotoType;
  isEditMode: boolean;
  onToggleEditMode: () => void;
  onPressLastPhoto: () => void;
}
