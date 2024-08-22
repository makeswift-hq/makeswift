import { defineConfig, Options } from 'tsup'

export default defineConfig(() => {
  const commonOptions = {
    entry: [
      'src/**/*.{ts,tsx}',
      '!src/**/*.test.{ts,tsx}',
      '!src/**/__tests__/**',
    ],
    bundle: false,
    minify: false,
    sourcemap: true,
    legacyOutput: true,
    esbuildOptions(options, { format }) {
      if (format === 'cjs')
        options.supported = { ...options.supported, 'dynamic-import': false }
    },
  } satisfies Options

  const esmOptions: Options = {
    ...commonOptions,
    entry: [...commonOptions.entry],
    format: 'esm',
  }

  const cjsOptions: Options = {
    ...commonOptions,
    format: 'cjs',
    outDir: 'dist/cjs',
  }

  return [esmOptions, cjsOptions]
})
