export interface Image {
  author      : string;
  download_url: string;
  height      : number;
  id          : string;
  url         : string;
  width       : number;
}

export interface ImageStoreState {
  detailImage   : Image;
  favoriteImages: Image[];
  images        : Image[];
  loading       : boolean;

  addFavoriteImage    : (id: string) => void;
  cleanFavoriteImages : () => void;
  cleanImages         : () => void;
  cleanImageDetail    : () => void;
  getImages           : (value: number) => void;
  getImageDetail      : (id: string) => void;
}
