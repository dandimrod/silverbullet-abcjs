var d=typeof window>"u"&&typeof globalThis.WebSocketPair>"u";typeof Deno>"u"&&(self.Deno={args:[],build:{arch:"x86_64"},env:{get(){}}});var i=new Map,c=0;function a(t){self.postMessage(t)}d&&(globalThis.syscall=async(t,...r)=>await new Promise((o,e)=>{c++,i.set(c,{resolve:o,reject:e}),a({type:"sys",id:c,name:t,args:r})}));function l(t,r){d&&(self.addEventListener("message",o=>{(async()=>{let e=o.data;switch(e.type){case"inv":{let s=t[e.name];if(!s)throw new Error(`Function not loaded: ${e.name}`);try{let n=await Promise.resolve(s(...e.args||[]));a({type:"invr",id:e.id,result:n})}catch(n){console.error("An exception was thrown as a result of invoking function",e.name,"error:",n.message),a({type:"invr",id:e.id,error:n.message})}}break;case"sysr":{let s=e.id,n=i.get(s);if(!n)throw Error("Invalid request id");i.delete(s),e.error?n.reject(new Error(e.error)):n.resolve(e.result)}break}})().catch(console.error)}),a({type:"manifest",manifest:r}))}function p(t){let r=atob(t),o=r.length,e=new Uint8Array(o);for(let s=0;s<o;s++)e[s]=r.charCodeAt(s);return e}function g(t){typeof t=="string"&&(t=new TextEncoder().encode(t));let r="",o=t.byteLength;for(let e=0;e<o;e++)r+=String.fromCharCode(t[e]);return btoa(r)}async function f(t,r){if(typeof t!="string"){let o=new Uint8Array(await t.arrayBuffer()),e=o.length>0?g(o):void 0;r={method:t.method,headers:Object.fromEntries(t.headers.entries()),base64Body:e},t=t.url}return syscall("sandboxFetch.fetch",t,r)}globalThis.nativeFetch=globalThis.fetch;function b(){globalThis.fetch=async function(t,r){let o=r&&r.body?g(new Uint8Array(await new Response(r.body).arrayBuffer())):void 0,e=await f(t,r&&{method:r.method,headers:r.headers,base64Body:o});return new Response(e.base64Body?p(e.base64Body):null,{status:e.status,headers:e.headers})}}d&&b();function y(t){return{html:`
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
    <div id="abc-paper"></div>`,script:`
    loadJsByUrl("https://cdn.jsdelivr.net/npm/abcjs@6.3.0/dist/abcjs-basic-min.js").then(() => {
      ABCJS.renderAbc("abc-paper", \`${t.replace(/\$/g,"//$").replace(/`/g,"\\`")}\`);
      updateHeight();
    });
    `}}var u={abcjsWidget:y},h={name:"abcjs",functions:{abcjsWidget:{path:"./abcjs.ts:widget",codeWidget:"abc"}},assets:{}},x={manifest:h,functionMapping:u};l(u,h);export{x as plug};
