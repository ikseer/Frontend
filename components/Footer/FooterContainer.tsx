import { Link } from '@/navigation';
import React from 'react';

interface StackContainerType {
  headers:
    | [{ [key: string]: [string, string | URL][] }]
    | [
        {
          [key: string]: [string, URL | string][];
        },
        {
          [key: string]: [string, URL | string][];
        },
      ];
}
export default function FooterContainer({ headers }: StackContainerType) {
  return (
    <div>
      {headers.map((header, indx) => (
        <div key={`${indx} - ${header}`}>
          <h4 className="mt-4 text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">
            {Object.keys(header)[0]}
          </h4>
          <div className="mt-3 grid space-y-3 text-sm">
            {Object.values(header).map((value) =>
              value.map((val, ind) => (
                <Link
                  key={`${ind} - ${val}`}
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  // in the future change this to val[1]
                  href={'/tmp'}
                >
                  {val[0]}{' '}
                </Link>
              )),
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
