<template>
    <div
        class="command-line"
        :class="cls"
        :style="styl"
        @mouseenter="onCommanMouselenter"
        @mouseout="onCommandMouseOut"
        @click.stop="onCommandClick">{{command.key}}</div>
</template>

<script>
import data from '@/assets/js/command';
import utils from '@/assets/js/utils';

export default {
    name: 'command',
    props: ['command', 'sectionWidth'],
    data() {
        return {
            width: '100',
            left: '100',
            cls: ''
        }
    },
    computed: {
        styl() {
            return `width: ${this.width}px;left: ${this.left}px;`;
        }
    },
    watch: {
        sectionWidth: function() {
            this.getWidthAndLeft();
        }
    },
    created() {
        this.getWidthAndLeft();
    },
    methods: {
        getWidthAndLeft: function() {
            const command = this.command;
            this.cls = `direction-${command.direction} left-${command.left} right-${command.right}`;
            const leftIndex = data.locations.indexOf(command.left);
            const rightIndex = data.locations.indexOf(command.right);
            if (command.left === command.right) {
                this.width = this.sectionWidth;
                this.left = leftIndex * (this.sectionWidth + 20);
            } else {
                const distance = rightIndex - leftIndex;
                const halfSectionWidth = (this.sectionWidth - 10) / 2;
                this.width = (halfSectionWidth * 2 + 20) * distance + 10 * (distance - 1);
                this.left = (this.sectionWidth + 20) * leftIndex + halfSectionWidth + 10;
            }
        },
        onCommanMouselenter() {
            const command = this.command;
            this.cls = `direction-${command.direction} left-${command.left} right-${command.right} hover`;
            this.$emit('focus', this.command);
        },
        onCommandMouseOut() {
            const command = this.command;
            this.cls = `direction-${command.direction} left-${command.left} right-${command.right}`;
            this.$emit('blur', this.command);
        },
        onCommandClick() {
            utils.copy(`git ${this.command.key}`);
            this.$emit('click', this.command);
        }
    }
}
</script>
<style lang="less">
.home .direction-status.hover {
    background-color: #766060;
    opacity: 1;
}
.home.stash {
    .left-stash,
    .right-stash {
        display: block;
    }
    .direction-left,
    .direction-right {
        background-color: #a13636;
        &::before {
            border-right-color:#a13636;
        }
        &::after {
            border-left-color: #a13636;
        }
        &.hover {
            background-color: #7a2929;
            opacity: 1;
            &::before {
                border-right-color:#7a2929;
            }
            &::after {
                border-left-color: #7a2929;
            }
        }
    }
}
.home.workspace {
    .left-workspace,
    .right-workspace {
        display: block;
    }
    .direction-left,
    .direction-right {
        background-color: #e75a5a;
        &::before {
            border-right-color:#e75a5a;
        }
        &::after {
            border-left-color: #e75a5a;
        }
        &.hover {
            background-color: #e12d2d;
            opacity: 1;
            &::before {
                border-right-color:#e12d2d;
            }
            &::after {
                border-left-color: #e12d2d;
            }
        }
    }
}
.home.index {
    .left-index,
    .right-index {
        display: block;
    }
    .direction-left,
    .direction-right {
        background-color: #f6984c;
        &::before {
            border-right-color:#f6984c;
        }
        &::after {
            border-left-color: #f6984c;
        }
        &.hover {
            background-color: #f37c1b;
            opacity: 1;
            &::before {
                border-right-color:#f37c1b;
            }
            &::after {
                border-left-color: #f37c1b;
            }
        }
    }
}
.home.local {
    .left-local,
    .right-local {
        display: block;
    }
    .direction-left,
    .direction-right {
        background-color: #c20a72;
        &::before {
            border-right-color:#c20a72;
        }
        &::after {
            border-left-color: #c20a72;
        }
        &.hover {
            background-color: #790647;
            opacity: 1;
            &::before {
                border-right-color:#790647;
            }
            &::after {
                border-left-color: #790647;
            }
        }
    }
}
.home.remote {
    .left-remote,
    .right-remote {
        display: block;
    }
    .direction-left,
    .direction-right {
        background-color: #a13636;
        &::before {
            border-right-color:#a13636;
        }
        &::after {
            border-left-color: #a13636;
        }
        &.hover {
            background-color: #7a2929;
            opacity: 1;
            &::before {
                border-right-color:#7a2929;
            }
            &::after {
                border-left-color: #7a2929;
            }
        }
    }
}
</style>
<style lang="less" scoped>
.command-line {
    position: relative;
    display: none;
    margin-bottom: 4px;
    padding: 2px 0;
    line-height: 13px;
    opacity: .9;
    cursor: pointer;
    pointer-events: auto;
}

.direction-status,
.direction-left,
.direction-right {
    background-color: #846C6C;
    color: #f8f7f7;
}

.direction-left::before {
    content: " ";
    width: 0;
    height: 0;
    border: 9px solid transparent;
    position: absolute;
    left: -18px;
    top: 0;
    border-right-color: #846C6C;
}
.direction-right::after {
    content: " ";
    width: 0;
    height: 0;
    border: 9px solid transparent;
    position: absolute;
    right: -18px;
    top: 0;
    border-left-color: #846C6C;
}
</style>