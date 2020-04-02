import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import typescript from 'rollup-plugin-typescript';
import { uglify } from "rollup-plugin-uglify";
import { terser } from "rollup-plugin-terser";

import packageJSON from "./package.json";
const input = "./src/index.tsx";
const minifyExtension = pathToFile => pathToFile.replace(/\.js$/, ".min.js");

export default [
  // CommonJS
  {
    input,
    output: {
      file: packageJSON.main,
      format: "cjs"
    },
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      commonjs(),
      typescript({importHelpers: false})
    ]
  },
  {
    input,
    output: {
      file: minifyExtension(packageJSON.main),
      format: "cjs"
    },
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      commonjs(),
      typescript({importHelpers: false}),
      uglify()
    ]
  },
  // ES
  {
    input,
    output: {
      file: packageJSON.module,
      format: "es",
      exports: "named"
    },
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      commonjs(),
      typescript({importHelpers: false})
    ]
  },
  {
    input,
    output: {
      file: minifyExtension(packageJSON.module),
      format: "es",
      exports: "named"
    },
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      commonjs(),
      typescript({importHelpers: false}),
      terser()
    ]
  }
];