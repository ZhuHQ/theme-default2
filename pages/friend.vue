<template>
  <div class="friendly">
    <div v-for="item in list" :key="item.id" class="item" @click="go(item.href)" style="cursor: pointer">
      <el-avatar class="img" :size="100" :src="item.logo"></el-avatar>
      <div class="name">{{ item.name }}</div>
      <div class="desc">{{ item.description }}</div>
    </div>
  </div>
</template>

<script>
import { fetchLinkList } from '~/api/index'

export default {
  name: 'friend',
  async asyncData({ app, store, params }) {
    let result = await fetchLinkList(app.$axios.$request)
    return {
      title: '友情链接' + '-' + store.state.config.name,
      list: result.models
    }
  },
  head() {
    return {
      title: this.title
    }
  },
  methods:{
    go(href){
      window.location.href = href
    }
  }
}
</script>

<style scoped lang="scss">
  .friendly {
    width: 1000px;
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    justify-items: center;

    .item {
      text-align: center;
      margin: 20px;
      padding: 30px;
      border: 1px solid rgb(245, 245, 245);
      border-radius: 10px;

      .name {
        margin: 5px;
        text-align: center;
      }

      .desc {
        margin: 5px;
      }
    }

    .item:hover {
      box-shadow: 0 2px 4px rgba(0, 0, 0, .22), 0 0 6px rgba(0, 0, 0, .05)
    }
  }
</style>
