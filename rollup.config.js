import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import alias from 'rollup-plugin-alias';
import copy from 'rollup-plugin-cpy';
import cleaner from 'rollup-plugin-cleaner';
import replace from 'rollup-plugin-replace';
import pkg from './package.json';

const input = 'src/ReactEditableSvgLabel.js';

export default [
  // UMD.
  {
    input,
    external: ['react', 'react-portal'],
    output: {
      name: 'ReactEditableSvgLabel',
      file: pkg.browser,
      format: 'umd',
      globals: {
        react: 'React',
        'react-portal': 'Portal'
      }
    },
    plugins: [
      babel({ exclude: 'node_modules/**' }),
      resolve(),
      commonjs()
    ]
  },

  // CommonJS + ES6 module.
  {
    input,
    external: ['react', 'react-portal', 'prop-types'],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    plugins: [
      babel()
    ]
  },

  // Example app using SystemJS.
  // {
  //   input: 'example/src/example.js',
  //   output: {
  //     name: 'Example',
  //     dir: 'example/dist',
  //     format: 'system',
  //     sourcemap: true
  //   },
  //   experimentalCodeSplitting: true,
  //   manualChunks: {
  //     'dependencies': [
  //       // Specify filenames for now.
  //       // https://github.com/rollup/rollup-plugin-node-resolve/issues/164
  //       'node_modules/react/react.js',
  //       'node_modules/react-dom/index.js',
  //       'node_modules/prop-types/index.js'
  //     ],
  //     'react-editable-svg-label': [
  //       'src/ReactEditableSvgLabel.js'
  //     ]
  //   },
  //   plugins: [
  //     babel({ exclude: 'node_modules/**' }),
  //     alias({
  //       'react-editable-svg-label': 'src/ReactEditableSvgLabel.js'
  //     }),
  //     commonjs(),
  //     resolve(),
  //     copy({
  //       files: [
  //         'example/src/index.html',
  //         'example/src/example.css',
  //         'node_modules/systemjs/dist/s.js',
  //         'node_modules/systemjs/dist/extras/named-register.js'
  //       ],
  //       dest: 'example/dist'
  //     }),
  //     replace({
  //       'process.env.NODE_ENV': JSON.stringify('production')
  //     }),
  //     cleaner({
  //       targets: ['example/dist']
  //     })
  //   ]
  // }

  // Example app using IIFE.
  {
    input: 'example/src/example.js',
    output: {
      name: 'Example',
      file: 'example/dist/example.js',
      format: 'iife',
      sourcemap: true
    },
    plugins: [
      babel({ exclude: 'node_modules/**' }),
      alias({
        'react-editable-svg-label': 'src/ReactEditableSvgLabel.js'
      }),
      commonjs(),
      resolve(),
      copy({
        files: [
          'example/src/index.html',
          'example/src/example.css'
        ],
        dest: 'example/dist'
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      cleaner({
        targets: ['example/dist']
      })
    ]
  }
];
