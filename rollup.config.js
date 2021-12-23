import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import esbuild from 'rollup-plugin-esbuild';

import packageJSON from './package.json';
const input = './src/index.tsx';
const minifyExtension = pathToFile => pathToFile.replace(/\.js$/, '.min.js');

const esbConfig = esbuild({
  // All options are optional
  include: /\.[jt]sx?$/, // default, inferred from `loaders` option
  exclude: /node_modules/, // default
  sourceMap: false, // default
  // minify: process.env.NODE_ENV === 'production',
  minify: true,
  target: 'es2015', // default, or 'es20XX', 'esnext'
  jsxFactory: 'React.createElement',
  jsxFragment: 'React.Fragment',
  // Like @rollup/plugin-replace
  define: {
    __VERSION__: '"x.y.z"'
  },
  tsconfig: 'tsconfig.json', // default
  // Add extra loaders
  loaders: {
    // Add .json files support
    // require @rollup/plugin-commonjs
    '.json': 'json',
    // Enable JSX in .js files too
    '.js': 'jsx'
  }
});

export default [
  // CommonJS
  {
    input,
    output: {
      file: packageJSON.main,
      format: 'cjs'
    },
    plugins: [
      babel({
        exclude: 'node_modules/**'
      }),
      commonjs(),
      typescript()
    ]
  },
  {
    input,
    output: {
      file: minifyExtension(packageJSON.main),
      format: 'cjs'
    },
    plugins: [
      babel({
        exclude: 'node_modules/**'
      }),
      commonjs(),
      typescript(),
      esbConfig
    ]
  },
  // ES
  {
    input,
    output: {
      file: packageJSON.module,
      format: 'es',
      exports: 'named'
    },
    plugins: [
      babel({
        exclude: 'node_modules/**'
      }),
      commonjs(),
      typescript()
    ]
  },
  {
    input,
    output: {
      file: minifyExtension(packageJSON.module),
      format: 'es',
      exports: 'named'
    },
    plugins: [
      babel({
        exclude: 'node_modules/**'
      }),
      commonjs(),
      typescript(),
      esbConfig
    ]
  }
];