import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms governing use of the ${company.name} website.`,
  alternates: { canonical: "/terms" },
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro={`Terms governing the use of this website and enquiries submitted through it.`}
    >
      <h2>Use of this website</h2>
      <p>
        The content of this website is provided for general information about {company.name}{" "}
        and its services. It does not constitute a binding offer.
      </p>
      <h2>Quotations</h2>
      <p>
        Quotations are prepared on the basis of the information supplied in your enquiry and
        are subject to confirmation of cargo details, applicable duties and taxes, and terminal
        or carrier charges at the time of handling.
      </p>
      <h2>Service terms</h2>
      <p>
        Clearing, forwarding, warehousing and supply services are governed by the engagement
        terms agreed in writing for each assignment.
      </p>
      <h2>Intellectual property</h2>
      <p>
        The trade name, logo and website content are the property of {company.name} and may not
        be reproduced without permission.
      </p>
    </LegalPage>
  );
}
