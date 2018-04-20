<template>
  <nav class="header-nav">
    <router-link :to="{name: 'home'}">
      <div class="cnode-icon">
        <img src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg"
             alt="cnode icon">
      </div>
    </router-link>
    <router-link :to="{name: 'search'}"
                 class="search">
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
  width: 1280px;
  height: @nav-width;
  background: #444;
  display: flex;
  margin-bottom: 10px;
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    z-index: -1;
    background: #444444;
  }
}

.search {
  margin-right: 598px;
  display: flex;
  align-content: center;
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
  line-height: 60px;
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


