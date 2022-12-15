import { App } from 'vue'
import VostHero from '@/components/support/parts/VostHero.vue'
import VostList from '@/components/support/parts/VostList.vue'
import VostPage from '@/components/support/parts/VostPage.vue'
import VostTag from '@/components/support/parts/VostTag.vue'
import VostTags from '@/components/support/parts/VostTags.vue'
import VostHeader from '@/components/support/parts/VostHeader.vue'
import LayoutTwoColumn from '@/components/support/layout/LayoutTwoColumn.vue'

export function register(app: App) {
  app
    .component('VostHeader', VostHeader)
    .component('VostHero', VostHero)
    .component('VostList', VostList)
    .component('VostPage', VostPage)
    .component('VostTag', VostTag)
    .component('VostTags', VostTags)
    .component('LayoutTwoColumn', LayoutTwoColumn)
}
