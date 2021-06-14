<template>
    <div class="desc-container">
        <span class="desc-title">{{desc.title}}</span>
        <span class="desc-content" v-html="desc.desc"></span>
    </div>
</template>

<script>
export default {
    props: ['desc']
}
</script>
<style lang="less" scoped>
.desc-container {
    position: fixed;
    box-sizing: border-box;
    width: 100vw;
    bottom: 0;
    z-index: 1;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F6EBD9;
    opacity: .9;

    .desc-title {
        color: black;
        font-weight: 500;
        margin-right: 20px;
        white-space: nowrap;
    }
    .desc-content {
        text-align: left;
    }
}
</style>