<template>
  <div class="post-list">
    <ul class="list-item">
      <li v-for="item in post"
          :key="item.id">
        <router-link :to="{name: 'user_info', params: {name: item.author.loginname}}">
          <img :src="item.author.avatar_url"
               :alt="item.author.loginname">
        </router-link>
        <div class="num">
          {{item.reply_count}} / {{item.visit_count}}
        </div>
        <router-link :to="{name: 'post_content', params: {author_id: item.author_id}}"
                     class="title">
          {{item.title}}
        </router-link>
        <div class="time">
          {{item.last_reply_at | timeFormat}}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PostList',
  data() {
    return {
      post: {}
    }
  },
  methods: {
    getData() {
      this.$http({
        url: 'https://cnodejs.org/api/v1/topics',
        method: 'get',
        params: {
          page: 1,
          limit: 20
        }
      })
        .then(response => {
          if (response.data.success === true) {
            this.post = response.data.data
            console.log(response.data.data)
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  filters: {
    timeFormat(createTime) {
      if (!createTime) {
        return ''
      }
      let date = new Date(createTime)
      let time = new Date().getTime() - date.getTime()
      if (time < 0) {
        return ''
      } else if (time / 1000 < 30) {
        return '刚刚'
      } else if (time / 1000 < 60) {
        return Number.parseInt(time / 1000) + '秒前'
      } else if (time / 60000 < 60) {
        return Number.parseInt(time / 60000) + '分钟前'
      } else if (time / 3600000 < 24) {
        return Number.parseInt(time / 3600000) + '小时前'
      } else if (time / 86400000 < 31) {
        return Number.parseInt(time / 86400000) + '天前'
      } else if (time / 2592000000 < 12) {
        return Number.parseInt(time / 2592000000) + '月前'
      } else {
        return Number.parseInt(time < 31536000000) + '年前'
      }
    }
  },
  beforeMount() {
    this.getData()
  }
}
</script>

<style lang="less" scoped>
.post-list {
  width: 1000px;
  background: #fff;
}

.list-item li {
  display: flex;
  align-content: center;
  height: 30px;
  padding: 10px 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  line-height: 30px;
  transition: all 0.1s ease;
  img {
    width: 30px;
    height: 30px;
    margin-right: 20px;
  }
  .num {
    width: 100px;
    margin-right: 60px;
  }
  .title {
    width: 700px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &:hover {
      text-decoration: underline;
    }

    &:visited {
      color: #888888;
    }
  }
  .time {
    width: 70px;
    text-align: right;
  }

  &:hover {
    background: #f5f5f5;
  }
}
</style>

