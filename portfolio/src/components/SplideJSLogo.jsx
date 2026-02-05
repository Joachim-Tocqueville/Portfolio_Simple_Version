import * as React from "react";

const SplideJsLogo = (props) => (
    <svg
        width="200"
        height="200"
        version="1.1"
        viewBox="0 0 52.9 52.9"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
    >
        <defs>
            <linearGradient id="logo-d">
                <stop stopColor="#c0e900" offset="0" />
                <stop stopColor="#00c3f3" offset="1" />
            </linearGradient>
            <linearGradient
                id="logo-e"
                x1="-17.6"
                x2="-39"
                y1="125"
                y2="125"
                gradientTransform="matrix(-.9412 0 0 -.9412 -10.48 143.8)"
                gradientUnits="userSpaceOnUse"
                xlinkHref="#logo-d"
            />
            <linearGradient
                id="logo-f"
                x1="-42.4"
                x2="-11.2"
                y1="125"
                y2="125"
                gradientTransform="matrix(.9412 0 0 .9412 63.36 -91.31)"
                gradientUnits="userSpaceOnUse"
                xlinkHref="#logo-d"
            />
        </defs>
        <path
            d="m8.803 17.65 26.45 26.45-8.803 8.803-26.45-26.45zm-8.803 8.803 26.45-26.45 8.803 8.803-26.45 26.45z"
            fill="url(#logo-e)"
        />
        <path
            d="m44.1 35.25-26.45-26.45 8.803-8.803 26.45 26.45zm8.803-8.803-26.45 26.45-8.803-8.803 26.45-26.45z"
            fill="url(#logo-f)"
        />
    </svg>
);

export default SplideJsLogo;
