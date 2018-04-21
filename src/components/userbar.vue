<template>
  <div class="user-info">
    <div class="user-detail">
      <h2>作者</h2>
      <router-link :to="{name: 'user_info', params: {name: user.loginname}}">
        <img :src="user.avatar_url">
        <h3>
          {{user.loginname}}
        </h3>
      </router-link>
      <div class="score">
        积分： {{user.score}}
      </div>
    </div>
    <ul class="recent-replies">
      <h3>最近回复</h3>
      <li v-for="reply in user.recent_replies"
          :key="reply.id">
        <router-link :to="{name: 'post_info', params: {id: reply.id,name: reply.author.loginname}}">
          {{reply.title}}
        </router-link>
      </li>
    </ul>
    <ul class="recent-topics">
      <h3>最近主题</h3>
      <li v-for="topics in recentTopics"
          :key="topics.id">
        <router-link :to="{name: 'post_info', params: {id: topics.id, name: topics.author.loginname }}">
          {{topics.title}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UserBar',
  data() {
    return {
      user: {
        loginname: 'Tom',
        recent_topics: []
      }
    }
  },
  methods: {
    getData() {
      this.$http({
        url: `https://cnodejs.org/api/v1/user/${this.$route.params.name}`,
        method: 'get'
      })
        .then(response => {
          if (response.data.success === true) {
            this.user = response.data.data
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  beforeMount() {
    this.getData()
  },
  computed: {
    recentTopics() {
      return this.user.recent_topics.slice(0, 5)
    }
  },
  watch: {
    //监控同级别下的路由复用组件，进行数据更新
    $route() {
      this.getData()
    }
  }
}
</script>

<style lang="less" scoped>
.user-info {
  max-height: 800px;
  width: 270px;
  margin-left: 10px;
}
.user-detail {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);
  background: #ffffff;
  h2 {
    background: rgba(212, 205, 205, 0.17);
    padding: 10px 10px;
    font-size: 16px;
    font-weight: normal;
  }
  a {
    display: flex;
    align-items: center;
    padding: 10px;
    img {
      width: 48px;
      height: 48px;
    }
  }
  h3 {
    transition: all 0.3s ease;
    background: transparent;
    &:hover {
      transform: scale(1.2);
      color: #000000;
    }
  }
}
h3 {
  background: rgba(212, 205, 205, 0.17);
  margin-left: 20px;
  font-size: 16px;
  padding: 10px 0;
  color: #a8a3a3;
  font-weight: normal;
}
.score {
  padding: 10px;
  font-size: 14px;
}

.recent-replies,
.recent-topics {
  background: #ffffff;
  margin: 10px 0;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);
  li {
    padding: 10px;
    height: 30px;
    line-height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    a {
      transition: all 0.3s ease;
    }
    &:hover {
      a {
        color: #888888;
        text-decoration: underline;
      }
    }
  }
}
</style>

