<template>
    <div ref="parent" class="gamemap">
        <canvas ref="canvas">
        </canvas>
    </div>
</template>

<script>
import { GameMap } from '@/assets/scripts/GameMap'; //计算的活，扔到GameMap.js中
import { ref,onMounted } from 'vue' //vue中定义对象都用ref, onMounted：组件挂载完后，执行的操作

export default{
    setup() {
        let parent = ref(null);
        let canvas = ref(null);

        onMounted(() => { //组件挂载完成后，创建一个GameMap
            new GameMap(canvas.value.getContext('2d'), parent.value)
        });

        return {
            parent,
            canvas
        }
    }
}

</script>

<style scoped>

div.gamemap {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>