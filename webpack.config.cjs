//
//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---"\___
//                  ." \\|     |// ".
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ""\---/""  |_/ |
//               \  .-\__  "-"  ___/-. /
//             ___". ."  /--.--\  `. ."___
//          ."" "<  `.___\_<|>_/___." >" "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-"=====
//                       `=---="
//
//
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//           Buddha bless the build script.
//

const path = require('path');

const package = require('./package.json');

module.exports = {
    mode: 'development',
    target: 'web',
    entry: {
        index: './src/index.ts',
    },
    output: {
        filename: '[name].cjs',
        chunkFilename: '[id].js',
        path: path.resolve('lib/'),
        library: package.name,
        libraryTarget: 'umd',
        globalObject: 'this',
        umdNamedDefine: true,
    },
    watchOptions: {
        ignored: ['**/node_modules', 'server/'],
    },
    module: {
        rules: [{
            test: /\.(c?)js$/,
            exclude: /node_modules/,
            resolve: {
                fullySpecified: false,
            },
        }, {
            test: /\.ts$/,
            exclude: /node_modules/,
            use: ['ts-loader'],
        }],
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'],
    },
};
