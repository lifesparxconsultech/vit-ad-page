import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclaimer — EduCollege',
  description: 'Important legal information about using the EduCollege platform.',
};

const sections = [
  {
    id: 'disclaimer',
    title: 'Disclaimer',
    content: (
      <>
        The information provided on EduCollege (educollege.in and its subdomains) is intended for general guidance purposes only. While we make every effort to ensure the accuracy and completeness of the content published on our platform, we make no representations or warranties of any kind, express or implied, regarding the accuracy, reliability, suitability, or availability of any information, programs, fees, eligibility criteria, or admission processes mentioned on this website.
      </>
    ),
  },
  {
    id: 'role',
    title: 'Role as Admission Facilitator',
    content: (
      <>
        EduCollege is an independent education counselling and admission facilitation service operated by Lifesparx Consultech Private Limited. We are not an official representative, branch, or department of any university. All academic decisions, degree conferment, fee structures, and admission approvals are solely the responsibility of the respective universities. Students are advised to verify all program details directly with the university before making any decisions.
      </>
    ),
  },
  {
    id: 'no-guarantee',
    title: 'No Guarantee of Admission',
    content: (
      <>
        Enquiring through EduCollege or paying a counselling service fee does not guarantee admission into any program or university. Admission is subject to the eligibility criteria, seat availability, and approval of the respective university at all times.
      </>
    ),
  },
  {
    id: 'third-party',
    title: 'Third Party Brands & Trademarks',
    content: (
      <>
        University names, logos, trademarks, and brand identities referenced on this website belong to their respective owners. Their mention on our platform is purely for informational purposes and does not imply any official endorsement, affiliation, or partnership unless explicitly stated in writing.
      </>
    ),
  },
  {
    id: 'fees',
    title: 'Fee & Program Information',
    content: (
      <>
        University fees, program structures, batch dates, and eligibility criteria are subject to change at the discretion of the respective university. EduCollege shall not be held liable for any discrepancies arising from changes made by the university after the time of publication.
      </>
    ),
  },
  {
    id: 'testimonials',
    title: 'Testimonials & Success Stories',
    content: (
      <>
        Any testimonials, reviews, or student success stories published on this website represent individual experiences and may not reflect typical outcomes. Results may vary based on individual effort, eligibility, and university criteria.
      </>
    ),
  },
  {
    id: 'data',
    title: 'Data & Privacy',
    content: (
      <>
        EduCollege collects personal information solely for the purpose of counselling and admission facilitation. We do not sell or share your data with third-party marketing databases. For complete details, refer to our{' '}
        <Link href="/privacy-policy" className="text-gray-900 underline">Privacy Policy</Link>.
      </>
    ),
  },
  {
    id: 'liability',
    title: 'Limitation of Liability',
    content: (
      <>
        EduCollege and Lifesparx Consultech Private Limited shall not be liable for any direct, indirect, incidental, or consequential loss or damage arising from the use of information on this website or reliance on any content published herein.
      </>
    ),
  },
  {
    id: 'governing-law',
    title: 'Governing Law',
    content: (
      <>
        This disclaimer is governed by the laws of India. Any disputes arising shall be subject to the jurisdiction of courts in Uttar Pradesh.
      </>
    ),
  },
];

export default function DisclaimerPage() {
  return (
    <main className="max-w-full mx-auto px-6 py-20 bg-white">

      <h1 className="text-3xl font-bold text-gray-900 mb-2">Disclaimer</h1>
      <p className="text-gray-400 text-sm mb-10">Last updated: June 2026</p>

      <div className="space-y-10">
        {sections.map((section, i) => (
          <div key={section.id} id={section.id}>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              {i + 1}. {section.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}

        <div className="border-t border-gray-200 pt-8 mt-12">
          <p className="text-sm text-gray-500">
            For any questions about this disclaimer, contact us at{' '}
            <a href="mailto:info@educollege.in" className="text-gray-900 underline">info@educollege.in</a>
            {' '}or call{' '}
            <a href="tel:+918920854291" className="text-gray-900 underline">+91 8920854291</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
