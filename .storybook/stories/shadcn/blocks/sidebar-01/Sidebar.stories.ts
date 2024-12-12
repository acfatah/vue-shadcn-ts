import { vueRouter } from 'storybook-vue3-router'
import App from '~/App.vue'
import DefaultSource from './layouts/SidebarSimpleLayout.vue?raw'
import routes from './routes.ts'

/**
 * A simple sidebar with navigation grouped by section.
 */
export default {
  title: 'shadcn/Blocks/Sidebar 01',
  component: App,
  tags: ['autodocs'],
  decorators: [vueRouter(routes)],
  parameters: {
    layout: 'fullscreen',
  },
}

export const Default = {
  parameters: {
    docs: {
      source: {
        code: DefaultSource,
      },
    },
  },
}
