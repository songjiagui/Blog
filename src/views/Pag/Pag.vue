<template>
  <HeaderNav :id="'/' + $route.params.navId" />
  <div class="text">
    <PagNavMo v-if='PandM'/>
    <PagNavPc v-if='!PandM'/>
    <div class="pc">
      <router-view />
    </div>
  </div>
</template>

<script>
import PagNavPc from './PagNavPc.vue'
import HeaderNav from '../../components/HeaderNav.vue'
import PagNavMo from './PagNavMo.vue'
// import Article from '../Article/Article.vue'

export default {
  name: 'Pag',
  components: { PagNavPc, HeaderNav, PagNavMo },
  setup() {
    const PandM = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
    return { PandM }
  }
}
</script>
<style>
.text {
  position: absolute;
  top: .5rem;
  width: 100%;
}

.pc {
  z-index: 1;
}
</style>