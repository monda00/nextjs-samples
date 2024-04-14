"use client";

import React, { useEffect } from "react";
import tocbot from "tocbot";

function Toc() {
  useEffect(() => {
    tocbot.init({
      tocSelector: ".toc",
      contentSelector: ".post",
      headingSelector: "h2, h3",
      scrollSmoothOffset: -350,
      headingsOffset: 350,
    });

    return () => tocbot.destroy();
  }, []);

  return (
    <div className="sticky top-0 pt-16 ml-8">
      <h2 className="text-xl border-l-4 border-secondary pl-1">ToC</h2>
      <div className="toc px-0 pb-8 text-base"></div>
    </div>
  );
}

export default Toc;
