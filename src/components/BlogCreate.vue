<template>
  <div class="blogCreate">
    <InfoSection info-section-tile="input area">
      <template v-slot:other>
        <el-button type="danger" @click="clearInputArea">清空</el-button>
        <el-button type="primary">上传</el-button>
        <el-button type="success" @click="downloadInputArea">下载</el-button>
      </template>
      <el-input type="textarea" v-model="inputArea" placeholder="please enter blog content" rows="15"/>
    </InfoSection>
    <InfoSection info-section-tile="preview area">
      <template v-slot:other>
        <el-button type="primary">全屏</el-button>
      </template>
      <div id="blogPreviewArea" v-html="converter.makeHtml(inputArea)"/>
    </InfoSection>
  </div>
</template>

<script lang="ts">

import InfoSection from "@/components/InfoSection.vue";
import {onBeforeUnmount, ref} from "vue";
import showdown from "showdown";
export default {
  name: "blogCreate",
  components: {InfoSection},
  async setup (){
    //进入时读取是否有未完成博客
    const inputArea=ref(localStorage.getItem("IncompleteBlog")||"")
    const converter= new showdown.Converter()
    //退出时保存未完成博客
    onBeforeUnmount(()=>{
      localStorage.setItem("IncompleteBlog",inputArea.value)
    })
    //清空输入区内容
    function clearInputArea(){
      inputArea.value=''
    }
    //下载输入区内容
    function downloadInputArea(){
      //创建a标签
      const aTag=document.createElement('a')
      aTag.download="未命名博客.md"
      aTag.style.display="none"
      //获取内容
      const blogBlob=new Blob([inputArea.value])
      //获取路径
      aTag.href=URL.createObjectURL(blogBlob)
      //触发a标签并且删除a标签
      aTag.click()
      document.body.removeChild(aTag)
    }
    return {
      inputArea,
      converter,
      clearInputArea,
      downloadInputArea
    }
  }
}
</script>

<style lang="scss" scoped>
#blogPreviewArea{
  border:1px solid #bbbbbb;
  padding: 0 10px;
  height: 400px;
  overflow-x: hidden;
}
</style>