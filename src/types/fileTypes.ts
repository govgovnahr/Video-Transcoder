export type InputFilesType = {
  video?: File[];
  audio?: File[];
  image?: File[];
  other?: File[];
};

export type FileNameTypes = {
  video?: string[];
  audio?: string[];
  image?: string[];
  other?: string[];
};

export type FileTypes = keyof InputFilesType;

export type FileTransformType = {
  state: 'Move' | 'Insert' | 'Delete';
  position?: number;
  file?: File;
  type: FileTypes;
  secondPosition?: number;
};

export type FileConfigType = {
  primaryType: FileTypes | string;
  types: Array<{ name: FileTypes | string; number: { min: number; max: number } }>;
};

export type CustomFileType = {
  name: string;
  type: FileTypes;
};

export type FileWithPreview = File & {
  preview: string;
  customType: 'video' | 'audio' | 'image' | 'other';
};
