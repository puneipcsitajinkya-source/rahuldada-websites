import { org } from "@/lib/siteData";
import MediaCoverageClient from "./MediaCoverageClient";

export const metadata = {
  title: "Media Coverage — " + org.name,
  description:
    "Television features, print newspaper articles, and on-ground field video documentation highlighting Navchaitanya Yuva Mandal's environmental and community initiatives in Maharashtra.",
};

export default function MediaCoveragePage() {
  return <MediaCoverageClient />;
}
