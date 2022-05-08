<template>
<HeaderNav :id="'/'+$route.params.navId" />
<div class="text">
    <PagNav />
     <router-view/>
</div>
</template>

<script>
import PagNav from './PagNav.vue'
import HeaderNav from '../../components/HeaderNav.vue'
// import Article from '../Article/Article.vue'

export default {
    name: 'Pag',
    components:{ PagNav, HeaderNav },
      setup () {
  }
}
</script>
<style scoped>
.text {
  position: absolute;
  top: .5rem;
  width: 100%;
}
</style>