import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import {terser} from 'rollup-plugin-terser';
import pkg from './package.json';

export default {
  input: pkg['main:dev'],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  external: [...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      clean: true,
      typescript: require('typescript'),
      tsconfig: './tsconfig.build.json',
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    process.env.NODE_ENV === 'production' ? terser() : null,
  ],
};
