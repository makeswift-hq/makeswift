export type PM = 'npm' | 'pnpm' | 'yarn'

export function detectPackageManager(): PM {
  const userAgent = process.env.npm_config_user_agent || ''

  if (userAgent.startsWith('yarn')) {
    return 'yarn'
  }

  if (userAgent.startsWith('pnpm')) {
    return 'pnpm'
  }

  return 'npm'
}
