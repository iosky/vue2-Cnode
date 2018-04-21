<template>
  <div class="article">
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
  background: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);
  h2 {
    padding: 20px 60px;
  }
}
.article-detail {
  display: flex;
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
  padding-left: 20px;
}
</style>
