<template>
  <nav class="header-nav">
    <div class="nav-wrapper">
      <router-link :to="{name: 'home'}">
        <div class="cnode-icon">
          <img src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg"
               alt="cnode icon">
        </div>
      </router-link>
      <router-link :to="{name: 'search'}">
        <form action=""
              id="search-form"
              class="nav-form">
          <input type="text"
                 name="nav-input"
                 id="seach-input">
        </form>
      </router-link>
      <ul class="nav-item">
        <li>
          <router-link :to="{name: 'home'}">首页</router-link>
        </li>
        <li>
          <router-link :to="{name: 'home'}">新手入门</router-link>
        </li>
        <li>
          <router-link :to="{name: 'home'}">API</router-link>
        </li>
        <li>
          <router-link :to="{name: 'home'}">关于</router-link>
        </li>
        <li>
          <router-link :to="{name: 'home'}">注册</router-link>
        </li>
        <li>
          <router-link :to="{name: 'home'}">登录</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
@nav-width: 60px;
.header-nav {
  width: 100%;
  height: @nav-width;
  background: #444;
}

.nav-wrapper {
  width: 80%;
  height: @nav-width;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.cnode-icon {
  width: 120px;
  height: @nav-width;
  margin-right: 30px;

  img {
    width: 120px;
    height: @nav-width;
  }
}
.nav-form {
  padding-right: 469px;
  input {
    border-radius: 100000px;
    height: @nav-width / 2.5;
    padding-left: 24px;
    background: url('https://o4j806krb.qnssl.com/public/images/search.e53b380a.hashed.png')
      4px 4px no-repeat #888;
    transition: all 0.4s ease;
    &:hover,
    &:focus {
      background: url('https://o4j806krb.qnssl.com/public/images/search.e53b380a.hashed.png')
        4px 4px no-repeat #fff;
    }
  }
}
.nav-item {
  display: flex;
  height: @nav-width;
  align-content: center;
  justify-content: center;
  li {
    margin: 0 10px;
    line-height: @nav-width;
    a {
      color: #ccc;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>


