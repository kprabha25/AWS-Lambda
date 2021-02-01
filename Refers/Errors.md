ERROR in ./node_modules/apollo-env/lib/fetch/url.js 3:12-26
Module not found: Error: Can't resolve 'url' in 'E:\2020\AWS\AWS-Lambda\node_modules\apollo-env\lib\fetch'

BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.
This is no longer the case. Verify if you need this module and configure a polyfill for it.

If you want to include a polyfill, you need to:
        - add a fallback 'resolve.fallback: { "url": require.resolve("url/") }'
        - install 'url'
If you don't want to include a polyfill, you can use an empty module like this:
        resolve.fallback: { "url": false }

https://stackoverflow.com/questions/64557638/how-to-polyfill-node-core-modules-in-webpack-5
Webpack Error - configuration.node has an unknown property 'fs'
https://babeljs.io/setup#installation

https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/webpack.html