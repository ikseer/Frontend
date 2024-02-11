import { Link } from '@/navigation';

import { LuTwitter } from 'react-icons/lu';
import { LuFacebook } from 'react-icons/lu';
import { LuLinkedin } from 'react-icons/lu';
import { LuInstagram } from 'react-icons/lu';

export default function FooterEnd() {
  const footerHeaderValues = ['Terms', 'Privacy', 'Status', 'Contact Us'];
  const footerEndIcons = [
    <LuTwitter key="twitter" />,
    <LuFacebook key="facebook" />,
    <LuLinkedin key="linkedin" />,
    <LuInstagram key="instagram" />,
  ];
  return (
    <div className="pt-5 mt-5 border-t border-gray-200 dark:border-gray-700">
      <div className="sm:flex sm:justify-between sm:items-center">
        <div className="flex items-center gap-x-3">
          {footerHeaderValues.map((val, indx) => (
            <Link
              key={`${indx} - ${val}`}
              href="/tmp"
              className="text-sm cursor-pointer inline-flex gap-x-2 text-gray-600 hover:text-gray-800 
                 dark:text-gray-400 dark:hover:text-gray-200
                dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              {val}
            </Link>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <div className="space-x-4">
            {footerEndIcons.map((val, indx) => (
              <a
                key={`${indx} - ${val}`}
                className="inline-block text-gray-500 hover:text-gray-800 
                dark:hover:text-gray-200 text-lg cursor-pointer"
                href="#"
              >
                {val}
              </a>
            ))}
            {/* <a className="inline-block text-gray-500 hover:text-gray-800 dark:hover:text-gray-200" href="#">
                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
