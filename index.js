const js = import("./node_modules/<NPM_USER_NAME>/sample_webassembly/sample_webassembly.js");
js
    .then(m => m.greet("WebAssembly"))
    .catch(console.error);