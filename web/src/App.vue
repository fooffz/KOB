<template>
  <div>
    <div>Bot nickname:{{ bot_name }}</div>
    <div>Bot ability:{{ bot_rating }}</div>
  </div>
  <router-view></router-view>
</template>

<script>
import $ from 'jquery';
import { ref } from 'vue';
export default{
  name:"App",
  setup:() =>{
    let bot_name = ref("");
    let bot_rating = ref("");
    
    $.ajax({
      url:"http://127.0.0.1:3000/pk/getbotinfo/",
      type:"get",
      success: resp=>{
        console.log(resp);
        bot_name.value = resp.name;
        bot_rating.value = resp.rating;
      } 
    }
    )

    return{
      bot_name,
      bot_rating
    }
  }
}
</script>

<style>
</style>
