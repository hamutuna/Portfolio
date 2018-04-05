// @flow
import React from 'react';

export default () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="68"
    height="108"
    viewBox="0 0 68 108"
    style={{
      display: 'none',
    }}
  >
    <svg width="48" height="54" id="jumpToTop" y="0">
      <use xlinkHref="#jumpToTop-path0_fill" />
      <defs>
        <path
          id="jumpToTop-path0_fill"
          fillRule="evenodd"
          fill="currentColor"
          d="M0 6V0h48v6H0zm21 18h-9l12-12 12 12h-9v30h-6V24z"
        />
      </defs>
    </svg>
    <svg width="68" height="54" id="mail" y="0">
      <use xlinkHref="#mail-path0_fill" transform="translate(.67 .33)" />
      <defs>
        <path
          id="mail-path0_fill"
          fillRule="evenodd"
          fill="currentColor"
          d="M6.667 0H60c3.667 0 6.667 3 6.667 6.667v40c0 3.666-3 6.666-6.667 6.666H6.667C3 53.333 0 50.333 0 46.667l.033-40C.033 3 3 0 6.667 0zm26.666 30L60 13.334V6.667L33.334 23.333 6.666 6.668v6.667L33.333 30z"
        />
      </defs>
    </svg>
  </svg>
);
