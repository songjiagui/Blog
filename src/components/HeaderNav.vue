<template>
    <div class="home">
    <div class="logo">
      <router-link to="/">
        <span class="logo__tag">阿贵的博客</span>
      </router-link>
      <div class="logo__nav">
        <el-menu mode="horizontal"
        :default-active="id"
        class="logo__nav__list"
        :ellipsis="false"
        router>
          <el-menu-item v-for="item in list" :key="item.id" :index="item.id">
            {{ item.name }}
          </el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>

export default {
   name: 'HeaderNav',
  props: ['id'],
  setup() {
    const list = [
      {
        id: '/',
        name: "首页",
      },
      {
        id: '/Base',
        name: "前端基础"
      },
      {
        id: '/Frame',
        name: "前端框架"
      },
      {
        id: '/Other',
        name: "前端相关"
      },
      {
        id: '/Network',
        name: "网络"
      }
    ]
    return { list }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

.logo {
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

  a {
    text-decoration: none;
    color: #000;
  }

  &__nav {
    display: flex;
    height: .5rem;
    flex-wrap: nowrap;
    justify-content: flex-end;

    &__list {
      margin: .1rem 0 .1rem .2rem;
      font-size: .16rem;
      line-height: .3rem;
    }

    .el-menu--horizontal {
      border-bottom: none;
    }
  }

  &__item {
    color: #39a3ff;
    border-bottom: 2px solid #39a3ff;
  }
}
</style>
