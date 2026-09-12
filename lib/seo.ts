export const SITE_URL = "https://www.pestonesignature.com";
export const SITE_NAME = "Pestone Signature";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/Images/Logo-.png`;
export const DEFAULT_DESCRIPTION =
  "Pestone Signature is a real estate agency in Lekki, Lagos helping you buy, sell and invest in verified properties across Lekki, Ikota, Victoria Island and Lagos, Nigeria.";

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
