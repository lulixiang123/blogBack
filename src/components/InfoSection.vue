<template>
  <div class="infoSection">
    <div class="infoSectionTop">
      <div class="infoSectionTile">{{ infoSectionTile }}</div>
      <div class="other">
        <slot name="other"/>
      </div>
    </div>

    <slot/>
  </div>
</template>

<script lang="ts">

export default {
  name: "InfoSection",
  props:{
    infoSectionTile:{
      type:String,
      default:"infoSectionTile"
    }
  }
}
</script>

<style lang="scss" scoped>
.infoSection{
  border: 1px solid #bbbbbb;
  padding: 10px;
  .infoSectionTop{
    margin: 0 0 10px;
    padding: 0 0 5px 0;
    border-bottom: 1px solid #bbbbbb;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .infoSectionTile{
      font-size: 0.2rem;
    }
  }

}
</style>