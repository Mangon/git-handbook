<template>
    <div class="home" :class="currentSection.key">
        <header class="header">GIT 命令速查手册</header>
        <div class="content">
            <div class="section-list" @click="onSectionListClick">
                <c-section
                    :ref="item.key"
                    v-for="(item, index) in locations"
                    :key="index"
                    :section="item"
                    @sectionClick="onSectionClick"/>
                <div class="command-list" v-if="currentSection.key">
                    <c-command
                        v-for="(item, index) in commands"
                        :key="index"
                        :command="item"
                        :section-width="sectionWidth"
                        @click="onCommandClick"
                        @focus="onCommandFocus"/>
                </div>
            </div>
        </div>
        <c-desc v-if="desc.title" :desc="desc"/>
        <footer />
    </div>
</template>

<script>
import Section from '@/components/Section';
import Desc from '@/components/Desc';
import Command from '@/components/Command';
import data from '@/assets/js/command';
import utils from '@/assets/js/utils';

export default {
    name: 'Home',
    components: {
        'c-section': Section,
        'c-command': Command,
        'c-desc': Desc
    },
    data() {
        const query = this.$route.query;
        let lang = query.lang || 'zh-cn';
        if (!data.translations[lang]) {
            lang = 'zh-cn';
        }
        return {
            locations: data.translations[lang].locations,
            commands: data.commands.map(item => {
                const commands = data.translations[lang].commands.filter(command => {
                    return command.key === item.key;
                });
                commands.length > 0 && (item.desc = commands[0].desc);
                return item;
            }),
            desc: {
                title: '',
                desc: ''
            },
            sectionWidth: '0', // section 宽度
            currentSection: {},
            currentCommand: {},
            lang
        }
    },
    watch: {
        currentSection: function() {
            this.$nextTick(() => {
                this.noticeSection();
            });
        }
    },
    mounted() {
        this.sectionWidth = this.$refs.stash[0].$el.clientWidth;
        window.onresize = utils.debounce(() => {
            this.sectionWidth = this.$refs.stash[0].$el.clientWidth;
            this.noticeSection();
        }, 100);
    },
    methods: {
        noticeSection() {
            const dom = document.querySelector('.command-list');
            if (dom) {
                const windowWidth = window.innerWidth;
                const sectionHeight = dom.clientHeight + 43 * (windowWidth < 440 ? 3 : (windowWidth < 590 ? 2 : 1));
                this.event.$emit('sectionHeightChange', sectionHeight);
            }
        },
        onSectionClick(key) {
            this.currentSection = data.translations[this.lang].locations.filter(item => item.key === key)[0];
            this.desc = {
                title: this.currentSection.title,
                desc: this.currentSection.desc
            };
        },
        onSectionListClick() {
            this.currentSection = '';
            this.desc = {};
        },
        onCommandFocus(command) {
            this.desc = {
                title: `git ${command.key}`,
                desc: command.desc
            };
        },
        onCommandClick(command) {
            this.desc = {
                title: `git ${command.key}`,
                desc: command.desc
            };
        }
    }
};
</script>

<style lang="less" scoped>
@import "../assets/css/var";
header {
    font-size: 50px;
    height: @header-height;
    color: white;
    background: black;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.content {
    overflow: scroll;
}
.section-list {
    box-sizing: border-box;
    height: calc(~'100vh - '@header-height);
    padding: @section-list-padding;
    display: flex;
    position: relative;
}
.command-list {
    position: absolute;
    top: calc(@section-list-padding + @section-title-height);
    display: flex;
    flex-direction: column;
    pointer-events: none;
    margin-bottom: 100px; // TODO: desc 高度
}
@media screen and (max-width: 590px) {
    .command-list {
        top: calc(@section-list-padding + @section-title-height * 2);
    }
}
@media screen and (max-width: 440px) {
    .command-list {
        top: calc(@section-list-padding + @section-title-height * 3);
    }
}
</style>