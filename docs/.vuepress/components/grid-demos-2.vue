<template>
  <div>
    <r-row gutter="10">
      <r-col span="8"><div class="content">8</div></r-col>
      <r-col span="8"><div class="content">8</div></r-col>
      <r-col span="8"><div class="content">8</div></r-col>
    </r-row>
    <r-row gutter="10">
      <r-col span="6"><div class="content">6</div></r-col>
      <r-col span="6"><div class="content">6</div></r-col>
      <r-col span="6"><div class="content">6</div></r-col>
      <r-col span="6"><div class="content">6</div></r-col>
    </r-row>
    <r-row gutter="10">
      <r-col span="4"><div class="content">4</div></r-col>
      <r-col span="4"><div class="content">4</div></r-col>
      <r-col span="4"><div class="content">4</div></r-col>
      <r-col span="4"><div class="content">4</div></r-col>
      <r-col span="4"><div class="content">4</div></r-col>
      <r-col span="4"><div class="content">4</div></r-col>
    </r-row>
  </div>
</template>

<script>
  import Col from '../../../src/col';
  import Row from '../../../src/row';

  export default {
    components: {
      'r-col': Col,
      'r-row': Row
    }
  }
</script>

<style scoped>
  *{
    box-sizing: border-box;
  }
  .row{
    margin: 10px 0;
  }
  .content{
    height: 50px;
    border: 1px solid #cccccc;
    background: #79bbff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
