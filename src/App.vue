<template>
  <div id="app">
    <nav>
      <Navbar/>
    </nav>
    <main>
      <Suspense>
        <router-view/>
      </Suspense>
    </main>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  components: {Navbar}
}
</script>

<style lang="scss">
html,body{
  margin: 0;
  padding: 0;
}
html{
  font-size: 100px;
}
#app{
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  color:#bbbbbb;
  nav{
    height: 100vh;
    width: 250px;
    position: fixed;
    background: #545c64;
  }
  //清除nav脱离文档流的影响
  &::before{
    width: 250px;
    content: "";
    display: block;
  }
  main{
    flex: 1;
    min-height: 100vh;
    padding: 10px 20px;
    background: #121212;
  }
}
</style>