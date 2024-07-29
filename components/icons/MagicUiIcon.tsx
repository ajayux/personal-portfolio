import React from "react";

function MagicUiIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="128"
      height="128"
      fill="none"
      viewBox="0 0 128 128"
    >
      <path fill="url(#pattern0_56_19)" d="M0 0H128V128H0z"></path>
      <defs>
        <pattern
          id="pattern0_56_19"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.00781)" xlinkHref="#image0_56_19"></use>
        </pattern>
        <image
          id="image0_56_19"
          width="128"
          height="128"
          xlinkHref="data:image/png;base64,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"
        ></image>
      </defs>
    </svg>
  );
}

export default MagicUiIcon;
