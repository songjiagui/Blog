<template>
  <div class="home">
    <div class="logo">
      <span class="logo__tag">阿贵的博客</span>
      <div class="logo__nav">
        <input type="text" class="logo__nav__search">
        <div class="logo__nav--fist"
        v-for="item in list"
        :key="item.id"
        >{{item.name}}</div>
      </div>
    </div>
    <div class="box">
      <img src="../assets/img/班扬.jpg" alt="好好学习" class="box__img">
      <span class="box__title">阿贵的主页</span>
      <span class="box__text">阿贵的博客</span>
      <span class="box__but">快速起步</span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  setup () {
    const list = [
      {
        id: 1,
        name: "HTML"
      },
        {
        id: 2,
        name: "CSS"
      },
        {
        id: 3,
        name: "JavaScript"
      },
        {
        id: 4,
        name: "vue.js"
      },
       {
        id: 5,
        name: "小程序"
      }
      ]
      return{ list }
  }
}
</script>
<style scoped lang="scss">
.home {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background: #fff;
}
.logo{
  position: absolute;
  height: .5rem;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 .3rem;
  border-bottom: #9f9f9f 1px solid;
  &__tag {
    display: flex;
    float: left;
    line-height: .5rem;
    font-size: .25rem;
    font-weight: 600;
  }
  &__nav{
    display: flex;
    height: .5rem;
    flex-wrap: nowrap;
    justify-content: flex-end;
    &__search{
      line-height: 0.4rem;
      margin: .05rem 0;
      display: flex;
      width: 3rem;
      border-radius: .5rem;
    }
    &--fist{
      margin-left: .2rem;
      font-size: .2rem;
      line-height: .5rem;
    }
  }
}
.box{
  position: absolute;
  top: .5rem;
  padding: 0 .3rem;
  &__img{
    display: flex;
    height: 40%;
    margin: .5rem auto 0 auto;
    width: 40%;
  }
  &__title{
    display: flex;
    line-height: .5rem;
    font-size: .3rem;
    justify-content: center;

  }
  &__text{
    display: flex;
    line-height: .5rem;
    font-size: .2rem;
    justify-content: center;
  }
  &__but{
    display: flex;
    line-height: .5rem;
    width: 2rem;
    background-color: #3eaf7c;
    font-size: .2rem;
    justify-content: center;
    margin: .2rem auto;
    border-radius: .5rem;
    color: #fff;
  }
}
</style>