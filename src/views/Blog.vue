<template>
  <div id="Blog">
    <div id="write">
      <div class="title">Blog Create</div>
      <BlogCreate/>
    </div>
    <div id="read">
      <div class="title">Blog Stock</div>
      <InfoSection info-section-tile="blog list">
        <div class="infoItem" v-for="item in blogList">
          <div class="infoItemKey">{{item.blogCompletionTime.slice(0,10)}}</div>
          <div class="infoItemValue">{{item.blogTitle}}</div>
        </div>
      </InfoSection>
    </div>
  </div>
</template>

<script lang="ts">
import InfoSection from "@/components/InfoSection.vue";
import Fetch from "@/utils/Fetch";
import Blog from "@/types/Blog";
import BlogCreate from "@/components/BlogCreate.vue";
export default {
  name: "Blog",
  components: {BlogCreate, InfoSection},
  async setup (){
    const blogList:Array<Blog>=await Fetch(process.env.VUE_APP_API+'blog',{method:"GET"})
    return {
      blogList
    }
  }
}
</script>

<style lang="scss" scoped>
#Blog{
  font-size: 0.16rem;
  justify-content: space-around;
  #write{
    //display: flex;
  }
  #read,#write{
    width: 100%;
    .title{
      font-size: 0.3rem;
      margin: 20px 0 ;
    }
    .infoItem{
      margin: 10px 0;
      padding: 0 5px 0 0;
      border: 1px solid #bbbbbb;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .infoItemKey{
        width: 20%;
        padding: 5px;
        background: #bbbbbb;
        color: #121212;
        letter-spacing: 1px;
        text-align: center;
      }
      .infoItemValue{
        flex: 1;
        padding: 5px;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}

:deep(.el-input__wrapper){
  background: #121212;
}
:deep(.el-textarea__inner){
  background: #121212;
}
:deep(.el-checkbox__inner){
  background: #121212;
}
:deep(.el-radio__inner){
  background: #121212;
}
:deep(.el-switch__core){
  background: #121212;
}
</style>