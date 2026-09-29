import { org } from "@/lib/siteData";

export const metadata = { title: "Gallery — " + org.name };

export default function GalleryLayout({ children }) {
  return children;
}
