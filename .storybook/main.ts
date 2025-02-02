import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  core: {
    // https://storybook.js.org/docs/configure/telemetry
    disableTelemetry: true,
  },
  stories: [
    './stories/**/*.mdx',
    './stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-themes',
    '@storybook/addon-interactions',
    // '@chromatic-com/storybook',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
}

export default config
