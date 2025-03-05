"use client";

import Script from "next/script";

export const CodepenEmbed = () => {
  return (
    <>
      <div
        className="codepen"
        data-height="434"
        data-theme-id="dark"
        data-default-tab="result"
        data-slug-hash="ZEbjWdx"
        data-pen-title="Super Mario CSS Grid Fader"
        data-user="eljamez"
        style={{
          height: "434px",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid",
          margin: "1em 0",
          padding: "1em",
        }}
      >
        <span>
          See the Pen{" "}
          <a href="https://codepen.io/eljamez/pen/ZEbjWdx">
            Super Mario CSS Grid Fader
          </a>{" "}
          by James Hall (<a href="https://codepen.io/eljamez">@eljamez</a>) on{" "}
          <a href="https://codepen.io">CodePen</a>.
        </span>
      </div>
      <Script src="https://public.codepenassets.com/embed/index.js" async />
    </>
  );
};
