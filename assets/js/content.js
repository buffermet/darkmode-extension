(()=>{
  const className = "buffermet-dark";
  const css = `
    html[buffermet-dark=true] {
      background-color: white;
      filter: invert(1) hue-rotate(180deg) !important;
    }
    html[buffermet-dark=true] video,
    html[buffermet-dark=true] img {
      filter: invert(1) hue-rotate(180deg) !important;
    }
  `;
  const stylesheet = document.createElement("style");
  stylesheet.type = "text/css";
  stylesheet.innerHTML = css;
  document.documentElement.append(stylesheet);

  globalThis.addEventListener("keydown", e => {
    if (e.ctrlKey && e.shiftKey && e.code === "KeyD") {
      const html = document.documentElement;
      const attr = html.getAttribute(className);
      if (attr === "true") {
        html.removeAttribute(className);
      } else {
        html.setAttribute(className, "true");
      }
    }
  });
})();
