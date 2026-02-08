import { Template, TemplateUI } from '@/types'
import picocolors from 'picocolors'

export const templateArr: Template[] = [
  {
    name: 'template-vue',
    display: 'Vue',
    color: picocolors.blue,
    templateUI: [
      {
        name: 'elementUI',
        display: 'ElementUI',
        color: picocolors.bgCyan,
      },
      {
        name: 'vant',
        display: 'Vant',
        color: picocolors.bgCyan,
      },
      {
        name: 'tDesign',
        display: 'TDesign',
        color: picocolors.bgCyan,
      },
    ],
  },
  {
    name: 'template-electron',
    display: 'Electron',
    color: picocolors.bgYellow,
  },
  {
    name: 'template-test',
    display: 'test',
    color: picocolors.bgGreen,
  },
]
export const templateUI: TemplateUI[] = [
  {
    name: '',
    display: 'NoUI',
    color: picocolors.bgCyan,
  },
  {
    name: 'element-ui',
    display: 'ElementUI',
    color: picocolors.bgCyan,
  },
  {
    name: 'vant',
    display: 'Vant',
    color: picocolors.bgCyan,
  },
  {
    name: 't-design',
    display: 'TDesign',
    color: picocolors.bgCyan,
  },
]
export const templatePlugins: TemplateUI[] = [
  {
    name: '',
    display: 'No',
    color: picocolors.bgCyan,
  },
  {
    name: 'css',
    display: 'css',
    color: picocolors.bgCyan,
  },
  {
    name: 'external-global',
    display: 'external-global',
    color: picocolors.bgCyan,
  },
  {
    name: 'visualizer',
    display: 'visualizer',
    color: picocolors.bgCyan,
  },
  {
    name: 'vite-compression',
    display: 'vite-compression',
    color: picocolors.bgCyan,
  },
]
