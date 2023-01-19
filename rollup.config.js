import esbuild from 'rollup-plugin-esbuild'

export default [
    {
      input: `src/index.ts`,
      plugins: [esbuild()],
      output: [
        {
          name: '@tiptap/extension-font-family',
          file: `dist/tiptap-extension-font-family.cjs`,
          format: 'cjs',
          sourcemap: true,
        },
        {
            name: '@tiptap/extension-font-family',
            file: `dist/tiptap-extension-font-family.umd.cjs`,
            format: 'umd',
            sourcemap: true,
          },
          {
            name: '@tiptap/extension-font-family',
            file: `dist/tiptap-extension-font-family.esm.js`,
            format: 'es',
            sourcemap: true,
          }
      ]
    }
  ]