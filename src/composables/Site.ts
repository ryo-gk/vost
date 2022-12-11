import config from '../../blog.config.json'

export interface Config {
  name: string
}

export function useSiteConfig(): Config {
  return config as Config
}
