
export const getBaseUrl = (): string => {
  return process.env.NEXT_PUBLIC_API_BASE_URL || "https://booking-server-five.vercel.app/";
};

export const CLOUDINARY_API_KEY = (): string => {
  return process.env.CLOUDINARY_API_KEY!;
};

ss