<template>
  <div id="app">  
      <!-- <change-lang-tab/>	 -->
      <router-view></router-view>
  </div> 
</template>
<script> 
  // import ChangeLangTab from 'components/changeLangTab'
export default {
  name: 'App',
  components: {
    // ChangeLangTab
  }

  
}
</script>
<style>
*{
  margin:0;
  padding: 0;
  list-style: none;
}
a{
	text-decoration: none;
}

</style>

