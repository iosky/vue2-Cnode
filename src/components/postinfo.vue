<template>
  <div class="article">
    <div class="article-main-content">
      <h2>{{post.title}}</h2>
      <div class="article-detail">
        <div class="time">发布时间： {{post.create_at | timeFormat}}</div>
        <div class="author">作者: {{post.author.loginname}}</div>
        <div class="visit-count">{{ post.visit_count }} 次浏览</div>
      </div>
      <div class="article-content"
           v-html="post.content">
      </div>
    </div>
    <ul class="replies">
      <h2>{{ post.reply_count }} 回复</h2>
      <li v-for="reply in post.replies"
          :key="reply.id"
          class="reply-item">
        <router-link :to="{ name: 'user_info', params: {name: reply.author.loginname }}">
          <img :src="reply.author.avatar_url"
               :alt="reply.author.loginname"
               :title="reply.author.loginname">
          <div class="reply-main">
            <div class="detail">
              <span>
                {{ reply.author.loginname }}
              </span>
              <!-- FIXME: 循环引用 -->
              <!-- <span>
                {{ index ++ }}楼
              </span> -->
              <span>
                {{ reply.create_at | timeFormat }}
              </span>
            </div>
            <div class="reply"
                 v-html="reply.content"></div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PostInfo',
  data() {
    return {
      post: {
        author: {
          loginname: 'Tom'
        }
      }
    }
  },
  methods: {
    getData() {
      this.$http({
        url: `https://cnodejs.org/api/v1/topic/${this.$route.params.id}`,
        method: 'get'
      })
        .then(response => {
          if (response.data.success === true) {
            this.post = response.data.data
            console.log(response.data.data)
          }
        })
        .catch(err => {
          console.log(err)
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
        return Number.parseInt(time / 31536000000) + '年前'
      }
    }
  },
  beforeMount() {
    this.getData()
  },
  watch: {
    $route() {
      this.getData()
    }
  }
}
</script>

<style lang="less">
.article {
  width: 1000px;
  h2 {
    background: #ffffff;
    padding: 20px 60px;
  }
}
.article-detail {
  display: flex;
  background: #ffffff;
  padding: 10px 0;
  border-bottom: 1px solid #cac4c4;
  * {
    margin: 0 20px;
    position: relative;
    cursor: pointer;
    transition: all 0.2s ease;
    &::before {
      content: '';
      display: block;
      position: absolute;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      top: 50%;
      left: -10px;
      transform: translateY(-50%);
      background: #444;
    }
    &:hover {
      color: #888;
    }
  }
}
.markdown-text {
  line-height: 1.8;
  p {
    white-space: pre-wrap;
  }
  img {
    height: auto;
    max-width: 100%;
  }
}

.article-content {
  padding: 20px;
  background: #ffffff;
}

.replies {
  background: #ffffff;
  margin-top: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);

  h2 {
    background: #f6f6f6;
    font-size: 16px;
    color: #444;
    font-weight: normal;
    padding: 20px 20px;
  }

  .reply-item {
    padding: 10px 10px 20px 10px;
    border-bottom: 1px solid #cac4c4;
    a {
      display: flex;
    }
    img {
      margin: 10px;
      width: 48px;
      height: 48px;
    }
  }
}
.reply-main {
  width: 950px;
}

.detail {
  color: #999;
  transition: all 0.3s ease;
  &:hover {
    text-decoration: underline;
    color: firebrick;
  }
}
.article-main-content {
  background: #ffffff;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.16);
}
</style>
