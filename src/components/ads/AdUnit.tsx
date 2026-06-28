"use client";

import { useEffect } from "react";

interface AdUnitProps {
  slot: string;
  format?: "auto" | "fluid" | "rectangle";
  style?: React.CSSProperties;
}

export default function AdUnit({ slot, format = "auto", style }: AdUnitProps) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      try {
        // @ts-ignore
        const adsbygoogle = window.adsbygoogle || [];
        if (adsbygoogle.length >= 0) {
          adsbygoogle.push({});
        }
      } catch (err) {
        // Only log real errors, ignore "already filled" errors which are common in dev
        if (err instanceof Error && !err.message.includes("already have ads")) {
          console.error("Adsense error:", err);
        }
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [slot]); // Re-run if slot changes

  return (
    <div className="ad-container my-8 flex justify-center overflow-hidden">
      <ins
        className="adsbygoogle"
        style={style || { display: "block", minWidth: "250px", minHeight: "90px" }}
        data-ad-client="ca-pub-8710423330759174"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}
