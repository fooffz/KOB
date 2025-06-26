<template>
    <div class="playground">
        <GameMap />
    </div>
</template>

<script>

import GameMap from './GameMap.vue';

export default{
    components:{
        GameMap
    }
}

</script>

<style scoped>
div.playground {
    width: 60vw; /* 60v 表示 60%， 下面同理 */
    height: 70vh;
    margin: 40px auto;
    background-color: lightblue;
}
</style>