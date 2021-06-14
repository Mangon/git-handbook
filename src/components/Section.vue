<template>
    <div :style="sectionStyle" class="section-container" :class="section.key" @click.stop="onSectionClick">
        <div class="section-title">{{section.title}}</div>
        <div class="section-bar"></div>
    </div>
</template>

<script>
export default {
    name: 'Section',
    props: ['section'],
    data() {
        return {
            sectionStyle: ''
        };
    },
    created() {
        this.event.$on('sectionHeightChange', sectionHeight => {
            this.sectionStyle = `height:${sectionHeight}px;`;
        });
    },
    methods: {
        onSectionClick() {
            this.$emit('sectionClick', this.section.key);
        }
    }
}
</script>

<style lang="less">
.home.stash {
    .section-container.stash {
        color: white;
        background-color: #c03030;
    }
}
.home.workspace {
    .section-container.workspace {
        color: white;
        background-color: #f15050;
    }
}
.home.index {
    .section-container.index {
        color: white;
        background-color: #ff9742;
    }
}
.home.local {
    .section-container.local {
        color: white;
        background-color: #cc0074;
    }
}
.home.remote {
    .section-container.remote {
        color: white;
        background-color: #c03030;
    }
}
</style>

<style lang="less" scoped>
@import "../assets/css/var.less";

.flex-center {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.section-container {
    position: relative;
    flex: 1;
    width: @section-container-width;
    min-height: 100%;
    border-radius: 5px;
    cursor: pointer;
    opacity: .7;
    box-shadow: 3px 3px 2px #ccc;
    &.current {
        color: white;
    }
    &.stash {
        color: #bf3030;
        background-color: #b3a2a2;
        &.current {
            background-color: #c03030;
        }
    }
    &.workspace {
        color: #f15050;
        background-color: #e3c4c4;
        &.current {
            background-color: #f15050;
        }
    }
    &.index {
        color: #ff9640;
        background-color: #e9d1be;
        &.current {
            background-color: #ff9742;
        }
    }
    &.local {
        color: #cd0074;
        background-color: #cc66a0;
        &.current {
            background-color: #cc0074;
        }
    }
    &.remote {
        color: #bf3030;
        background-color: #b3a2a2;
        &.current {
            background-color: #c03030;
        }
    }
    .flex-center();

    &:not(:first-child) {
        margin-left: @section-gap;
    }

    .section-title {
        font-size: 30px;
        height: @section-title-height;
    }

    @media screen and (max-width: 590px) {
        .section-title {
            height: @section-title-height * 2;
        }
    }
    @media screen and (max-width: 440px) {
        .section-title {
            height: @section-title-height * 3;
        }
    }
    .section-bar {
        flex: 1 0 auto;
        border: 1px dashed #6e1c1c;
        width: @section-bar-width;
    }
}
</style>