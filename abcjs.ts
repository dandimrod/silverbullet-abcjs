
export function widget(
  bodyText: string,
): { html: string; script: string } {
  return {
    html: `
    <style>
      html[data-theme=dark] {
        color-scheme: dark;
        --root-background-color: #111;
        --root-color: #fff;
      }
      html {
        --root-background-color: #fff;
        --root-color: inherit;
      }
      body{
        margin:0;
        background-color:var(--root-background-color);
        color:var(--root-color);
      }
    </style>
    <div id="abc-paper"></div>`,
    script: `
    loadJsByUrl("https://cdn.jsdelivr.net/npm/abcjs@6.3.0/dist/abcjs-basic-min.js").then(() => {
      ABCJS.renderAbc("abc-paper", \`${bodyText.replace(/\$/g,'//$').replace(/`/g, '\\`')}\`);
      updateHeight();
    });
    document.addEventListener("click", () => {
      api({type: "blur"});
    });
    `,
  };
}
