<template>
  <div id="Home">
    <div id="base">
      <div class="title">Main Info</div>
      <InfoSection info-section-tile="user information">
        <div class="infoItem" v-for="(value,key) in personInfo">
          <div class="infoItemKey">{{key}}</div>
          <div class="infoItemValue">{{value}}</div>
        </div>
      </InfoSection>
    </div>
    <div id="other">
      <div class="title">Other Info</div>
      <InfoSection info-section-tile="contact information">
        <div class="infoItem" v-for="item in contactInformation">
          <div class="infoItemKey">{{item.relateName}}</div>
          <div class="infoItemValue">{{item.relateIdentification}}</div>
        </div>
      </InfoSection>
    </div>
  </div>
</template>

<script lang="ts">

import {reactive} from "vue";
import PersonInfo from "@/types/PersonInfo";
import ContactInformation from "@/types/ContactInformation";
import InfoSection from "@/components/InfoSection.vue";
import Fetch from "@/utils/Fetch";

export default {
  name: "Home",
  components: {InfoSection},
  async setup(){
    const personInfo:PersonInfo= reactive(await Fetch(process.env.VUE_APP_API+'user',{method:"GET"}))
    const contactInformation:Array<ContactInformation>= reactive(await Fetch(process.env.VUE_APP_API+'relate',{method:"GET"}))
    return {
      personInfo,
      contactInformation
    }
  }
}
</script>

<style lang="scss" scoped>
#Home{
  font-size: 0.16rem;
  justify-content: space-around;
  #base,#other{
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
        padding:0 20px;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>