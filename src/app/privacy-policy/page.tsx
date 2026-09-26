import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${company.name} handles information submitted through this website.`,
  alternates: { canonical: "/privacy-policy" },
  robots: { index: false },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={`How ${company.name} handles the information you send through this website.`}
    >
      <h2>Information we collect</h2>
      <p>
        When you submit an enquiry or quotation request we collect the name, company, email
        address, phone number and consignment details you provide. We also collect standard
        analytics data about how the website is used.
      </p>
      <h2>How we use it</h2>
      <p>
        Enquiry details are used to prepare a quotation and to deliver the service requested.
        Analytics data is used to improve the website. We do not sell your information.
      </p>
      <h2>Sharing</h2>
      <p>
        Details may be shared with carriers, terminals and regulatory authorities only where it
        is necessary to clear, transport or supply your cargo.
      </p>
      <h2>Retention and your rights</h2>
      <p>
        Enquiry records are retained for as long as needed for the engagement and applicable
        record-keeping obligations. You may request a copy of the information we hold about
        you, or ask us to correct or delete it, by contacting {company.email}.
      </p>
    </LegalPage>
  );
}
