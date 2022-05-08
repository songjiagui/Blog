<template>
<HeaderNav :id='$route.path' />
 <div class="text">
  <div class="box">
    <img src="../assets/img/1.png" alt="好好学习" class="box__img" />
    <span class="box__title">阿贵的主页</span>
    <span class="box__text">阿贵的博客</span>
    <router-link to="/Base">
      <span class="box__but"> 快速起步 </span>
    </router-link>
    <div class="box__tag">里面的资料一部分来自于网络，若有侵权请联系，QQ：2240549390</div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderNav from '../components/HeaderNav.vue'
export default {
  name: "Home",
  components:{ HeaderNav },
  setup () {
  }
}
</script>
<style scoped lang="scss">
@import "../assets/css/index.scss";
.text {
  position: absolute;
  top: .5rem;
  width: 100%;
}
.box {
  &__img {
    display: flex;
    height: 15%;
    margin: 0.5rem auto 0 auto;
    width: 15%;
  }

  &__title {
    display: flex;
    line-height: 0.5rem;
    font-size: 0.3rem;
    justify-content: center;
  }

  &__text {
    display: flex;
    line-height: 0.5rem;
    font-size: 0.2rem;
    justify-content: center;
  }

  &__but {
    display: flex;
    line-height: 0.5rem;
    width: 2rem;
    background-color: $element-blue;
    font-size: 0.2rem;
    justify-content: center;
    margin: 0.2rem auto;
    border-radius: 0.5rem;
    color: #fff;
  }

  &__tag {
    display: flex;
    line-height: 0.5rem;
    width: 80%;
    margin: 0 auto;
    justify-content: center;
    font-size: 0.15rem;
    color: #6c6c6c;
    border-top: $border-gray 1px solid;
  }

  a {
    text-decoration: none;
  }
}

</style>
