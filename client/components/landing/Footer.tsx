import { date } from "zod/v3";

const ShareIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const footerCols = [
  { heading: "Platform", links: ["Programs", "Institutions", "Doctors"] },
  { heading: "Resources", links: ["Help Center", "Blog", "API Docs"] },
  { heading: "Security", links: ["Privacy", "Terms", "Compliance"] },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 px-8 pt-10 pb-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-1.5 text-teal-700 font-bold text-base tracking-tight mb-2">MediLink</div>
            <p className="text-xs text-gray-400 leading-relaxed mb-4">Trusted precision in healthcare. Connecting patients, providers, and institutions through advanced technology.</p>
            <div className="flex items-center gap-3 text-gray-400">
              <button className="hover:text-teal-600 transition-colors" aria-label="Share">
                <ShareIcon />
              </button>
              <button className="hover:text-teal-600 transition-colors" aria-label="Contact">
                <MailIcon />
              </button>
            </div>
          </div>
          {footerCols.map(({ heading, links }) => (
            <div key={heading}>
              <p className="text-sm font-semibold text-gray-700 mb-3">{heading}</p>
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-gray-400 hover:text-teal-600 transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-100 pt-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} MediLink Healthcare Platform. Trust and Precision in Care.</p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-gray-400 hover:text-teal-600">
              Cookies
            </a>
            <a href="#" className="text-xs text-gray-400 hover:text-teal-600">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
