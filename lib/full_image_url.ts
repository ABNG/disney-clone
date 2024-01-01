export const FullImageUrl = (imagePath?: string, fullSize?: boolean) =>
  imagePath
    ? `${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${
        fullSize ? "original" : "w500"
      }${imagePath}`
    : "https://links.papareact.com/o8z";
