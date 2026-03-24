import FooterTop from './footer/FooterTop';
import FooterLinks from './footer/FooterLinks';
import FooterNewsletter from './footer/FooterNewsletter';
import FooterBottom from './footer/FooterBottom';

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] dark:bg-[#161617] border-t border-black/[0.06] dark:border-white/[0.06]">
      <FooterTop />
      <FooterLinks />
      <FooterNewsletter />
      <FooterBottom />
    </footer>
  );
}