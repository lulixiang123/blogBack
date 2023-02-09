<template>
  <div id="Navbar">
    <div id="date">
      <div><el-icon size="14px"><Calendar /></el-icon> {{time.date.year+'年'+time.date.month+'月'+time.date.day+'日'}}</div>
      <div>{{time.time.hours+':'+time.time.minutes+':'+time.time.seconds}} {{'星期'+time.weekDay}}</div>
    </div>
    <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" default-active="2" text-color="#fff" router>
      <el-menu-item index="home">
        <el-icon><House /></el-icon>
        <span>Home</span>
      </el-menu-item>
      <el-menu-item index="blog">
        <el-icon><Document /></el-icon>
        <span>Blog</span>
      </el-menu-item>
      <el-menu-item index="Collect">
        <el-icon><Star /></el-icon>
        <span>Collect</span>
      </el-menu-item>
      <el-menu-item index="project">
        <el-icon><Box /></el-icon>
        <span>project</span>
      </el-menu-item>
      <el-menu-item index="setting">
        <el-icon><Suitcase /></el-icon>
        <span>Setting</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import {reactive,computed} from "vue";
import {Calendar,House,Document,Star,Box,Suitcase} from "@element-plus/icons-vue";

export default {
  name: "Navbar",
  components: {Calendar,House,Document,Star,Box,Suitcase},
  setup(){
    //获取当前时间
    let nowTime=new Date()
    const rawTime:{
      date:{
        year:number|string
        month:number|string
        day:number|string
      },
      time:{
        hours:number|string
        minutes:number|string
        seconds:number|string
      }
      weekDay:number|string
    }=reactive({
      date:{
        year:nowTime.getFullYear(),
        month:nowTime.getMonth()+1,
        day:nowTime.getDate(),
      },
      time:{
        hours:nowTime.getHours(),
        minutes:nowTime.getMinutes(),
        seconds:nowTime.getSeconds(),
      },
      weekDay:nowTime.getDay()
    })
    //定时器获取时间
    setInterval(()=>{
      nowTime=new Date()
      rawTime.date.year=nowTime.getFullYear()
      rawTime.date.month=nowTime.getMonth()+1
      rawTime.date.day=nowTime.getDate()
      rawTime.time.hours=new Date().getHours()
      rawTime.time.minutes=new Date().getMinutes()
      rawTime.time.seconds=new Date().getSeconds()
      rawTime.weekDay=nowTime.getDay()
    },1000)
    const chineseNumber=['一','二','三','四','五','六','天']
    //处理时间
    const time=computed(()=>{
      rawTime.weekDay=chineseNumber[rawTime.weekDay as number]
      for (const key in rawTime.time) {
        if(rawTime.time[key as keyof typeof rawTime.time]<10){
          rawTime.time[key as keyof typeof rawTime.time]='0'+rawTime.time[key as keyof typeof rawTime.time]
        }
      }
      return rawTime
    })
    return{
      time
    }
  }
}
</script>

<style lang="scss" scoped>
#Navbar{
  color: white;
  width: 100%;
  #date{
    padding: 15px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.16rem;
    font-weight: bold;
    border-bottom: 1px solid #434a50;
    div{
      padding: 5px 0;
    }
  }
}
:deep(ul){
  border: none;
}
:deep(.el-menu-item){
  justify-content: center;
  font-weight: bold;
}
</style>