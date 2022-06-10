export type PhotoType = string | 'lastPhoto';
export type HandleDeletePhotoItem = (file: string) => () => void;

export interface IPhotoItemProps {
  photo: PhotoType;
  photoName: string;
  isDeleteMode: boolean;
  deleteArray: string[];
  handleAddPhotoInDeleteArray: HandleDeletePhotoItem;
  onToggleDeleteMode: (photo: string) => () => void;
  onPressLastPhoto: () => void;
}
