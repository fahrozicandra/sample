"use strict";(function(){"use strict";const n=require("../../../loader"),a=require("../../../../bootstrap"),u=require("path"),s=require("worker_threads").parentPort,g=a.setupNLS();n.config({baseUrl:a.fileUriFromPath(u.join(__dirname,"../../../../"),{isWindows:process.platform==="win32"}),catchError:!0,nodeRequire:require,nodeMain:__filename,"vs/nls":g,amdModulesPattern:/^vs\//,recordStats:!0});let i=!0,o=[];const c=e=>{if(!i){o.push(e);return}i=!1,d(e)};s.on("message",c);const d=function(e){n([e],function(t){setTimeout(()=>{const l=t.create((r,f)=>{s.postMessage(r,f)},null);for(s.off("message",c),s.on("message",r=>{l.onmessage(r)});o.length>0;){const r=o.shift();l.onmessage(r)}})},t=>console.error(t))};s.on("messageerror",e=>{console.error(e)})})();

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/c722ca6c7eed3d7987c0d5c3df5c45f6b15e77d1/core/vs/platform/extensions/node/extensionHostStarterWorkerMain.js.map