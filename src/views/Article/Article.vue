<template>
    <div class="content">
        <span class="content__header">
            {{ key.key }}
        </span>
        <div v-for="item in list" :key="item.title">
            <div class="content__title">{{ item.title }}</div>
            <div class="content__text" v-for="(items, index ) in item.text" :key="index">
                <div class="content__text__name">{{ items.name }}</div>
                <div class="content__text__content">&emsp;&emsp;{{ items.content }}</div>
                <prism-editor class="content__text__editor" v-model="items.code" :highlight="highlighter"
                    :readonly="true" line-numbers v-if="items.code">
                </prism-editor>
            </div>
        </div>
        <div class="content__jump">
            <router-link :to="'/'+ key.backUrl" class="content__jump__back">
                {{ key.back }}
            </router-link>
            <router-link :to="'/'+ key.nextUrl" class="content__jump__next">
                {{ key.next }}
            </router-link>
        </div>
    </div>
</template>

<script>
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/themes/prism-tomorrow.css'
import { ref } from '@vue/reactivity'
import { get } from '../../assets/requr'
import { useRoute } from 'vue-router'
export default {
    name: 'Article',
    components: {
        PrismEditor,
    },
    setup() {
        const route = useRoute()
        const list = ref([])
        const key = ref([])
        const nearbyList = async () => {
            let url = route.params.id
            if (!url) {
                url = route.path + '/' + 'home'
            } else {
                url = route.path
            }
            const result = await get(url)
            if (result?.data) {
                if (result?.data){
                    list.value = result.data
                key.value = result.meta
                }
            }
        }
        nearbyList()
        const highlighter = (code) => {
            return highlight(code, languages.js);
        }
        return { list, key, highlighter }
    }
}
</script>

<style  lang = "scss" scoped>
@import '@/assets/css/index.scss';

.content {
    margin: 0.1rem 0.3rem;
    min-height: 2rem;
    overflow: hidden;
    &__header {
        display: block;
        font-size: .4rem;
        text-align: center;
    }

    &__title {
        display: block;
        margin: .2rem 0;
        font-size: .21rem;
        font-weight: 700;
        word-break: break-all;
    }

    &__text {
        display: block;
        margin: .1rem 0;

        &__name {
            display: block;
            margin: .05rem 0;
            font-size: .17rem;
        }

        &__content {
            display: block;
            margin: .05rem 0;
            line-height: .3rem;
            font-size: .16rem;
        }

        &__editor {
            background: #2d2d2d;
            color: #ccc;
            font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
            font-size: .14rem;
            line-height: 1.5;
            padding: 5px;
        }
    }

    &__jump {
        display: flex;
        line-height: 0.5rem;
        border-top: 1px $border-gray solid;
        width: 100%;
        margin: .5rem 0 1rem 0;
        justify-content: space-between;
        font-size: .16rem;

        a {
            color: $element-blue;
            text-decoration: none;
        }
    }
}
</style>
