// Main
import React from 'react';

// Components
import BrandStack from './BrandStack';
import FooterContainer from './FooterContainer';
import FooterEnd from './FooterEnd';

export default function Footer() {
  return (
    <footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto bg-slate-200 dark:bg-zinc-950">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
        <BrandStack />

        <FooterContainer
          headers={[
            {
              Product: [
                ['Pricing', '/tmp'],
                ['Changelog', '/tmp'],
                ['Docs', '/tmp'],
                ['Download', '/tmp'],
              ],
            },
          ]}
        />

        <FooterContainer
          headers={[
            {
              Company: [
                ['About us', '/tmp'],
                ['Blog', '/tmp'],
                ['Careers', '/tmp'],
                ['Customers', '/tmp'],
                ['Newsroom', '/tmp'],
                ['Sitemap', '/tmp'],
              ],
            },
          ]}
        />

        <FooterContainer
          headers={[
            {
              Resources: [
                ['Community', '/tmp'],
                ['Help & Support', '/tmp'],
                ['eBook', '/tmp'],
                ["What's New", '/tmp'],
                ['Status', '/tmp'],
              ],
            },
          ]}
        />

        <FooterContainer
          headers={[
            {
              Developers: [
                ['Api', '/tmp'],
                ['Status', '/tmp'],
                ['GitHub', '/tmp'],
              ],
            },
            {
              Industries: [
                ['Financial Services', '/tmp'],
                ['Education', '/tmp'],
              ],
            },
          ]}
        />
      </div>

      <FooterEnd />
    </footer>
  );
}
