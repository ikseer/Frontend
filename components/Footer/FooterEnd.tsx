// Main
import { Link } from '@/navigation';

// Icons
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
          </div>
        </div>
      </div>
    </div>
  );
}
