<template>
<div>
   <el-menu
   class="nav"
   mode="vertical"
   >
    <el-menu-item>
        常用工具
    </el-menu-item>
   <div v-for="item in list"
    :key="item.id">
    <el-sub-menu
    :index="item.id"
    > 
    <template #title>
        <span>{{item.id}}</span>
    </template>
    <el-menu-item
    v-for="items in item.nav"
    :key="items.name"
    :index="items.name" 
    >
    {{items.name}}
    </el-menu-item>
    </el-sub-menu>
    </div>
   </el-menu>
   <div class="content">
       <span class="content__header">
           前端学习
       </span>
       <span class="content__jump">555</span>
   </div>
</div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { get } from '../../assets/requr'
import { useRoute, useRouter } from 'vue-router'
import { watch } from "vue"

export default {
    name: 'Pag',
    setup () {
    const route = useRoute()
    const router = useRouter()
    const list = ref([])
    const nearbyList = async () => {
   const result = await get(`${route.path}`)
   if (result?.data){
       if (result?.data)
        list.value = result.data
   }
    }
    watch(router.currentRoute, () => {
        location.reload()
        });
    nearbyList()
    console.log(list)
    return { list }
    }
}
</script>

<style lang="scss" scoped>
.nav{
    width: 2.5rem;
    margin: .1rem .2rem;
    overflow-y: auto;
    float: left;
}
.el-menu-item.is-active {
    background-color: #e1f1ff;
    border-left: 2px solid #39a3ff;
}
.content{
    position: absolute;
    margin-top: .1rem;
    float: right;
    left: 3rem;
    right: .3rem;
    min-height: 2rem;
    &__header{
        display: block;
        font-size: .4rem;
        text-align: center;
    }
    &__jump{
        position: absolute;
        bottom: 0;
        line-height: .4rem;
        border-top: 1px #9f9f9f solid;
        width: 100%;
    }
}
</style>