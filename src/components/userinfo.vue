<template>
  <div class="user-info">
    <div class="main">
      <router-link :to="{name: 'home'}"
                   class="home">主页</router-link>
      <div class="main-content">
        <div class="user-content">
          <img :src="user.avatar_url"
               :alt="user.loginname"
               :title="user.title">
          <h3>
            {{user.loginname}}
          </h3>
        </div>
        <div class="user-detail">
          <p>
            {{user.score}} 积分
          </p>
          <p>
            @
            <a :href="github">{{user.githubUsername}}</a>
          </p>
          <p>
            注册时间: {{user.create_at | timeFormat}}
          </p>
        </div>
      </div>
    </div>
    <ul class="recent-topics">
      <h2>最近主题</h2>
      <li v-for="item in user.recent_topics"
          :key="item.id">
        <router-link :to="{name: 'post_info' ,params: {id: item.id, name: item.author.loginname}}">
          {{item.title}}
        </router-link>
      </li>
    </ul>
    <ul class="recent-replies">
      <h2>最近回复</h2>
      <li v-for="item in user.recent_replies"
          :key="item.id">
        <router-link :to="{name: 'post_info', params: {id: item.id, name: item.author.loginname}}">
          {{item.title}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  data() {
    return {
      user: {}
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
        .catch(error => {
          console.log(error)
        })
    }
  },
  beforeMount() {
    this.getData()
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
        return Number.parseInt(time / 31536000000) + '年前'
      }
    }
  },
  computed: {
    github() {
      return `https://github.com/${this.user.githubUsername}`
    }
  },
  watch: {
    $route() {
      this.getData()
    }
  }
}
</script>

<style lang="less" scoped>
.user-info {
  width: 1000px;
}
.main {
  background: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);
  .home {
    display: block;
    font-size: 16px;
    padding: 10px;
    background: #f6f6f6;
    color: #80bd01;
    transition: all 0.4s ease;
    &:hover {
      text-decoration: underline;
    }
  }
  img {
    width: 48px;
    height: 48px;
  }
}
h2 {
  font-size: 16px;
  padding: 10px;
  font-weight: normal;
  color: #888;
  background: #f6f6f6;
}

.main-content {
  padding: 10px;
}
.user-content {
  display: flex;
  align-items: center;

  h3 {
    margin-left: 10px;
    color: #444444;
  }
}
.user-detail {
  color: #444444;
  a {
    transition: all 0.3s ease;
    color: #444444;
    &:hover {
      color: #000000;
      text-decoration: underline;
    }
  }
}

.recent-topics,
.recent-replies {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);
  background: #ffffff;
  margin-top: 20px;
  padding-left: 10px;
  transition: all 0.4s ease;
  li {
    height: 50px;
    line-height: 50px;
    a {
      transition: all 0.3s ease;
      &:hover {
        text-decoration: underline;
        color: #888888;
      }
    }
  }

  &:hover {
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
  }
}
</style>
