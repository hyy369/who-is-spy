<template>
    <div>
        <div class="weui-flex">
            <div class="weui-flex__item">
                <button type="button" class="weui-btn weui-btn_default" @click="see_all_role">{{see_all?'Close':'Reveal'}}</button>
            </div>
            <div class="weui-flex__item">
                <button type="button" class="weui-btn weui-btn_default" @click="see_rules">{{see_rule?'Hide the Rules':' Learn the Rules'}}</button>
            </div>
            <div class="weui-flex__item"><button type="button" class="weui-btn weui-btn_primary" @click="begin_kill">Eliminate</button></div>
        </div>
        <div class="weui-flex" :class="{hidden: !see_rule}">
            <img class="rule_image" src="https://busyteacher.org/uploads/posts/2016-07/1467664165_bt-submission-dnisbet-game-who-is-the-spy-0.png"  alt="" srcset="">
            <p> Image source: busyteacher.org (https://busyteacher.org/24039-who-is-the-spy-talking-game.html)</p>
        </div>
        <br>
        <div class="weui-flex" v-for="bitem in [0, 1, 2]" :key="bitem">
            <div class="weui-flex__item" v-for="item in [0, 1, 2]" :key="item">
                <div class = "father" :class="{
                    hidden: item + bitem * 3 >= global.people_number
                }" @click="kill_someone(item + bitem * 3)">
                    <div class="daughter" :style="{
                        background: daughter_bgc[man_status[item + bitem * 3]?2:kill_flag]
                    }" :class="{
                        hidden: see_all
                    }">
                        <div class="daugther-text">
                            {{item + bitem * 3}}
                        </div>
                    </div>
                    <img class="image" :class="{
                        hidden: !see_all
                    }" :src="global.role_image[global.assignment[item + bitem * 3]]" alt="" srcset="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'weui/dist/style/weui.min.css'
export default {
    name: 'Game',
    data: function () {
        return {
            global: {},
            killed_man: [],
            see_all: 0,
            kill_flag: 0,
            daughter_bgc: ['white', '#F76260', '#909090'],
            man_status: [0,0,0,0,0,0,0,0,0],
            game_over: 0,
            see_rule: 0,
        }
    },
    methods: {
        kill_someone: function(index) {
            if(this.kill_flag != 0){
                console.log(index)
                this.killed_man.push(index)
                
                if(this.global.assignment[index] == 1) {
                    this.game_over = 1;
                    this.global_data.spy_win = 0;
                    console.log('Spy lost');
                    this.$router.push('/gameover')
                } else if(this.global.people_number - this.killed_man.length <= 3) {
                    this.game_over = 2;
                    this.global_data.spy_win = 1;
                    console.log('Spy won');
                    this.$router.push('/gameover')
                }
                this.man_status[index] = 1;
                this.kill_flag = 0;
            } else {
                console.log('no '+ index)
            }
        },
        begin_kill: function() {
            this.kill_flag = 1;
            
        },
        see_all_role: function() {
            this.see_all = !this.see_all;
        },
        see_rules: function() {
            this.see_rule = !this.see_rule;
        }
    },
    beforeMount: function () {
        this.global = this.global_data;
        
    }
}
</script>

<style scoped>
.father {
    width: 100%;
    padding: 5%;
}
.daughter {
    width: 90%;
    height: 0;
    padding-top: 90%;
}
.daugther-text {
    position: relative;
    bottom: 60px;
    left: 40px;
}
.hidden {
    display: none;
}
.image {
    width: 90%;
    height: 90%;
}
</style>
