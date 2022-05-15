<template>
    <el-menu
   class="nav--mo"
   mode="horizontal"
   :default-active="id"
   :ellipsis="false"
   router
   >
    <el-menu-item
    v-if="key.key"
    :index="key.url">
        {{key.key}}
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
    :index="key.url+'/'+items.id" 
    >
    {{items.name}}
    </el-menu-item>
    </el-sub-menu>
    </div>
   </el-menu>
</template>

<script>
import { ref } from '@vue/reactivity'
import { get } from '../../assets/requr'
import { useRoute } from 'vue-router'

export default {
    name: 'PagNavMo',
    setup () {
    const route = useRoute()
    // const router = useRouter()
    const list = ref([])
    const key = ref([])
    const nearbyList = async () => {
    const result = await get(`${route.params.navId}`)
    if (result?.data ){
        list.value   = result.data
        key.value = result.meta
      }
    }
    nearbyList()
    const id = decodeURI(route.path)
    return { list, key, id }
    }
}
</script>

<style lang="scss" scoped>
.nav--mo{
    display: flex;
    height: .5rem;
    width: 100%;
    flex-wrap: nowrap;
    overflow-y:hidden;
    overflow-x: auto;
}
.el-menu-item.is-active {
    background-color: #e1f1ff;
    border-left: 2px solid #39a3ff;
}
.el-sub-menu ::v-deep .el-icon{
    display: none;
}
</style>