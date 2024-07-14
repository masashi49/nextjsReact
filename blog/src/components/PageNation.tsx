import Link from 'next/link';
import React from 'react';

const PageNation = ({
  prevText = '',
  prevUrl = '',
  nextText = '',
  nextUrl = '',
}) => {
  return (
    <>
      <ul className="flex justify-between p-2">
        {prevText && prevUrl && (
          <li>
            <Link href={prevUrl}>←{prevText}</Link>
          </li>
        )}
        {nextText && nextUrl && (
          <li>
            <Link href={nextUrl}>{nextText}→</Link>
          </li>
        )}
      </ul>
    </>
  );
};

export default PageNation;
