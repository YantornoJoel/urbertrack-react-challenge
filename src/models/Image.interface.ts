export interface Image {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export interface ImageStoreState {
  images: Image[];
  getImages: (value: number) => void;
  cleanImages: () => void;
  cleanImageDetail: () => void;
  addFavoriteImage: (id: string) => void;
  getImageDetail: (id: string) => void;
  detailImage: Image;
  favoriteImages: Image[];
  cleanFavoriteImages: () => void;
  loading: boolean;
}
