'use client';

export default function FooterLinks() {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Download', href: '#download' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#about' },
        { name: 'Careers', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Blog', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#' },
        { name: 'Contact Us', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
      ],
    },
    {
      title: 'Compliance',
      links: [
        { name: 'HIPAA', href: '#' },
        { name: 'GDPR', href: '#' },
        { name: 'Security', href: '#' },
        { name: 'Certifications', href: '#' },
      ],
    },
  ];

  return (
    <div className="max-w-[980px] mx-auto px-5 py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
        {footerSections.map((section) => (
          <div key={section.title}>
            <h3 className="text-[12px] font-semibold text-gray-900 dark:text-white tracking-[-0.1px] mb-4">
              {section.title}
            </h3>
            <ul className="flex flex-col gap-[10px]">
              {section.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[12px] text-gray-500 dark:text-[#6e6e73] hover:text-gray-900 dark:hover:text-white transition-colors duration-200 tracking-[-0.1px]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
