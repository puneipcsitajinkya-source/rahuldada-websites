import { org } from "@/lib/siteData";
import CompliancesClient from "./CompliancesClient";

export const metadata = {
  title: "Compliances — Annual Reports & Audit Reports",
  description:
    "Access Navchaitanya Bahuuddeshiya Vikas Yuva Mandal's annual reports and audit reports. Full transparency across all financial years.",
};

export default function CompliancesPage() {
  return <CompliancesClient />;
}
