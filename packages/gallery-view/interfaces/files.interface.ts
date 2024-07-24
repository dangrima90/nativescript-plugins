export interface IFiles {
  id: string;
  albunName: string;
  data: Array<IFileData>;
  isSelected: boolean;
  icon: string;
}

export interface IFileData {
  id: string;
  uri: string;
  isSelected: boolean;
  info?: any;
}
