import React, { useState } from 'react';

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      content: (
        <div>
          <p className="text-gray-300 mb-4">
            Welcome to Swaget Infocomm Solutions LLP! These terms and conditions outline the rules and regulations for the use of Swaget Infocomm Solutions LLP's Website, located at{" "}
            <a href="http://swaget.in/" className="text-yellow-400 hover:text-yellow-500">
              http://swaget.in/
            </a>
            .
          </p>
          <p className="text-gray-300 mb-4">
            By accessing this website, we assume you accept these terms and conditions. Do not continue to use Swaget Infocomm Solutions LLP if you do not agree to take all of the terms and conditions stated on this page.
          </p>
        </div>
      )
    },
    {
      id: "terminology",
      title: "Terminology",
      content: (
        <div>
          <p className="text-gray-300 mb-4">
            The following terminology applies to these Terms and Conditions, Privacy Statement, and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person logging on this website and compliant to the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance, and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of the provision of the Company's stated services, in accordance with and subject to, prevailing law of the Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization, and/or he/she or they, are taken as interchangeable and therefore as referring to the same.
          </p>
        </div>
      )
    },
    {
      id: "cookies",
      title: "Cookies",
      content: (
        <div>
          <p className="text-gray-300 mb-4">
            We employ the use of cookies. By accessing Swaget Infocomm Solutions LLP, you agreed to use cookies in agreement with the Swaget Infocomm Solutions LLP's Privacy Policy.
          </p>
          <p className="text-gray-300 mb-4">
            Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
          </p>
        </div>
      )
    },
    {
      id: "license",
      title: "License",
      content: (
        <div>
          <p className="text-gray-300 mb-4">
            Unless otherwise stated, Swaget Infocomm Solutions LLP and/or its licensors own the intellectual property rights for all material on Swaget Infocomm Solutions LLP. All intellectual property rights are reserved. You may access this from Swaget Infocomm Solutions LLP for your own personal use subjected to restrictions set in these terms and conditions.
          </p>
          <p className="text-gray-300 mb-4">
            You must not:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-300">
            <li>Republish material from Swaget Infocomm Solutions LLP</li>
            <li>Sell, rent or sub-license material from Swaget Infocomm Solutions LLP</li>
            <li>Reproduce, duplicate or copy material from Swaget Infocomm Solutions LLP</li>
            <li>Redistribute content from Swaget Infocomm Solutions LLP</li>
          </ul>
          <p className="text-gray-300 mb-4">
            This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the Terms And Conditions Generator.
          </p>
        </div>
      )
    },
    {
      id: "comments",
      title: "Comments",
      content: (
        <div>
          <p className="text-gray-300 mb-4">
            Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Swaget Infocomm Solutions LLP does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Swaget Infocomm Solutions LLP, its agents, and/or affiliates. Comments reflect the views and opinions of the person who posts their views and opinions. To the extent permitted by applicable laws, Swaget Infocomm Solutions LLP shall not be liable for the Comments or for any liability, damages, or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
          </p>
          <p className="text-gray-300 mb-4">
            Swaget Infocomm Solutions LLP reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive, or causes a breach of these Terms and Conditions.
          </p>
          <p className="text-gray-300 mb-4">
            You warrant and represent that:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-300">
            <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so.</li>
            <li>The Comments do not invade any intellectual property right, including without limitation copyright, patent, or trademark of any third party.</li>
            <li>The Comments do not contain any defamatory, libelous, offensive, indecent, or otherwise unlawful material which is an invasion of privacy.</li>
            <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
          </ul>
          <p className="text-gray-300 mb-4">
            You hereby grant Swaget Infocomm Solutions LLP a non-exclusive license to use, reproduce, edit, and authorize others to use, reproduce, and edit any of your Comments in any and all forms, formats, or media.
          </p>
        </div>
      )
    },
    {
      id: "hyperlinking",
      title: "Hyperlinking to our Content",
      content: (
        <div>
          <p className="text-gray-300 mb-4">
            The following organizations may link to our Website without prior written approval:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-300">
            <li>Government agencies</li>
            <li>Search engines</li>
            <li>News organizations</li>
            <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses</li>
            <li>System-wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Website.</li>
          </ul>
          <p className="text-gray-300 mb-4">
            These organizations may link to our home page, to publications, or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site.
          </p>
        </div>
      )
    },
    {
      id: "iframes",
      title: "iFrames",
      content: (
        <div>
          <p className="text-gray-300 mb-4">
            Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.
          </p>
        </div>
      )
    },
    {
      id: "web-designing",
      title: "Web Designing Terms and Conditions",
      content: (
        <div>
          <p className="text-gray-300 mb-4">
            <strong className="text-yellow-400">Payment Terms:</strong>
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-300">
            <li>To initiate the project, 50% of the total project fee must be paid upfront. This payment is non-refundable.</li>
            <li>The remaining 50% of the total project fee is due upon completion of the project, but before the website is made live.</li>
            <li>Payments will be accepted through bank transfer, credit card, or any other agreed-upon method, in Indian Rupees (INR).</li>
            <li>Late payments beyond 7 days incur a fee of 1.5% per month. Non-payment within 30 days may result in project suspension.</li>
          </ul>
          
          <p className="text-gray-300 mb-4">
            <strong className="text-yellow-400">Renewal and Maintenance:</strong>
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-300">
            <li>Annual renewal fee is required for hosting, maintenance, and domain services.</li>
            <li>This fee may increase based on external charges but will not exceed ₹600.</li>
            <li>Non-payment before expiration will suspend services and may take the website offline.</li>
          </ul>
          
          <p className="text-gray-300 mb-4">
            <strong className="text-yellow-400">Modifications and Revisions:</strong>
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-300">
            <li>Three (3) free revisions included during the development phase (within agreed scope).</li>
            <li>Additional changes beyond scope will incur charges based on hourly rates or separate quotes.</li>
            <li>Post-launch modifications are considered additional work and will be charged separately.</li>
          </ul>
          
          <p className="text-gray-300 mb-4">
            <strong className="text-yellow-400">Content and Intellectual Property:</strong>
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-300">
            <li>Client must provide all content (text, images, videos, logos) and ensure it doesn't infringe third-party rights.</li>
            <li>Upon full payment, Client owns final design and IP rights (excluding third-party elements).</li>
            <li>Client is responsible for acquiring licenses for third-party materials (plugins, stock images, etc.).</li>
          </ul>
          
          <p className="text-gray-300 mb-4">
            <strong className="text-yellow-400">Timelines and Deadlines:</strong>
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-300">
            <li>Project timeline will be mutually agreed upon based on complexity.</li>
            <li>Delays caused by Client (late content/approvals) will extend timeline and may incur charges.</li>
            <li>Not liable for delays due to force majeure (natural disasters, strikes, etc.).</li>
          </ul>
          
          <p className="text-gray-300 mb-4">
            <strong className="text-yellow-400">Legal Compliance:</strong>
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-300">
            <li>Client must ensure website complies with all applicable laws (GDPR, Indian IT Act, etc.).</li>
            <li>Client indemnifies Swaget.in against claims from unlicensed content or legal violations.</li>
          </ul>
          
          <p className="text-gray-300 mb-4">
            <strong className="text-yellow-400">Termination:</strong>
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-300">
            <li>Client may terminate with written notice but must pay for completed work (upfront 50% non-refundable).</li>
            <li>Swaget.in may terminate for payment breaches or Terms violations without refund.</li>
          </ul>
          
          <p className="text-gray-300 mb-4">
            <strong className="text-yellow-400">Dispute Resolution:</strong>
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-300">
            <li>Disputes will first go through mediation, then binding arbitration under Indian law.</li>
            <li>Governing law is Indian law, with legal proceedings in Varanasi.</li>
          </ul>
          
          <p className="text-gray-300 mb-4">
            <strong className="text-yellow-400">Miscellaneous:</strong>
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-300">
            <li>This Agreement supersedes all prior agreements.</li>
            <li>Terms may be updated with notice; continued service use constitutes acceptance.</li>
            <li>If any provision is unenforceable, remainder stays in effect.</li>
          </ul>
          
          <p className="text-gray-300 mt-6">
            <em>By proceeding with our services, you acknowledge reading and agreeing to these Terms and Conditions.</em>
          </p>
        </div>
      )
    },
    {
      id: "content-liability",
      title: "Content Liability",
      content: (
        <div>
          <p className="text-gray-300 mb-4">
            We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third-party rights.
          </p>
        </div>
      )
    },
    {
      id: "reservation-of-rights",
      title: "Reservation of Rights",
      content: (
        <div>
          <p className="text-gray-300 mb-4">
            We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
          </p>
        </div>
      )
    },
    {
      id: "disclaimer",
      title: "Disclaimer",
      content: (
        <div>
          <p className="text-gray-300 mb-4">
            To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-300">
            <li>Limit or exclude our or your liability for death or personal injury.</li>
            <li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation.</li>
            <li>Limit any of our or your liabilities in any way that is not permitted under applicable law.</li>
            <li>Exclude any of our or your liabilities that may not be excluded under applicable law.</li>
          </ul>
          <p className="text-gray-300 mb-4">
            The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-300">
            <li>Are subject to the preceding paragraph.</li>
            <li>Govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort, and for breach of statutory duty.</li>
          </ul>
          <p className="text-gray-300 mb-4">
            As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-yellow-400">Swaget</div>
              <div className="ml-2 text-sm text-gray-400">Infocomm Solutions LLP</div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Home</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Services</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">About</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          {/* Title Section */}
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 py-8 px-6">
            <h1 className="text-3xl font-bold text-gray-900">Terms and Conditions</h1>
            <p className="text-yellow-100 mt-2 text-sm">Last updated: March 23, 2025</p>
          </div>
          
          {/* Introduction */}
          <div className="p-6 border-b border-gray-700">
            <div className="mb-4">
              <h2 className="text-lg font-medium text-yellow-400 mb-2">Welcome to Swaget Infocomm Solutions LLP</h2>
              <p className="text-gray-300 italic">
                These terms and conditions outline the rules and regulations for the use of Swaget Infocomm Solutions LLP's Website.
              </p>
            </div>
          </div>
          
          {/* Accordion Sections */}
          <div>
            {sections.map((section) => (
              <div key={section.id} className="border-b border-gray-700">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-700 focus:outline-none transition-colors"
                >
                  <h2 className="text-lg font-semibold text-yellow-400">{section.title}</h2>
                  <svg
                    className={`w-5 h-5 text-yellow-400 transform ${activeSection === section.id ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {activeSection === section.id && (
                  <div className="px-6 py-4 bg-gray-700">
                    {section.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom Contact Card */}
        <div className="mt-8 bg-gradient-to-r from-yellow-500 to-yellow-600 border border-yellow-400 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-900">Need clarification about our terms?</h3>
          <p className="mt-2 text-gray-800">
            Our customer support team is available to assist you with any questions regarding our terms and conditions.
          </p>
          <div className="mt-4">
            <a href="mailto:info@swaget.in" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-yellow-600 bg-gray-900 hover:bg-gray-800 transition-colors">
              Contact Support
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsAndConditions;