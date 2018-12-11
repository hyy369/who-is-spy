<template>
    <div>
        <div class="player" :class="{
            hidden: display_role
        }">
            <div class="placeholder-block">

            </div>
            <h2 class="title">Player: {{now_number}}</h2>
            <br>
            <div>
                <button @click="isme_click" type="button" class="weui-btn weui-btn_default" :class="{
                    'weui-btn_default' : disable_button > 0
                }">{{disable_button > 0? 'Waiting for ' + disable_button + ' second':'Yes. It\'s Me'}}</button>
            </div>
        </div>
        <div class="role" :class="{
            hidden: !display_role
        }">
            <div class="placeholder-block"></div>
            <h2 class="title">Player {{now_number}}'s</h2>
            <br>
            <div class="display-image">
                <img class="in-image" :src="player_info.url" alt="">
            </div>
            <br>
            <h3 class="title">Your word is {{player_info.word}}</h3>
            <br>
            <div>
                <button @click="next_click" type="button" class="weui-btn weui-btn_default">Ok. I Get</button>
            </div>
        </div>
    </div>
</template>

<script>
import 'weui/dist/style/weui.min.css'
export default {
    name: 'Confirm',
    data: function() {
        return {
            now_number: 0,
            display_role: 0,
            disable_button: 3,
            player_info: {
                url: "",
                word: ""
            }
        }
    },
    methods: {
        load_down: function() {
            this.disable_button -= 1;
            console.log(this.disable_button)
            if(this.disable_button) setTimeout(this.load_down,1000);
        },
        isme_click: function () {
            if(this.disable_button <= 0) {
                if(2 == this.global_data.assignment[this.now_number]) {
                    this.player_info.url = "";
                    this.player_info.word = "none";
                } else {
                    this.player_info.url = this.global_data.role_image[this.global_data.assignment[this.now_number]];
                    this.player_info.word = this.global_data.choose_word[this.global_data.assignment[this.now_number]];
                }
                this.display_role = 1;
            } 
        },
        next_click: function() {
            if(this.now_number != this.global_data.people_number - 1) {
                this.disable_button = 3;
                this.display_role = 0;
                this.now_number++;
                this.load_down();
            } else {
                this.$router.push('/game')
            }
        }
    },
    mounted: function () {
        this.load_down()
    }
}
</script>

<style scoped>
.hidden {
    display: none;
}
.placeholder-block {
    display: block;
    width: 100%;
    height: 100px;
}
.title {
    text-align: center;
}
.display-image {
    height: 200px;
    width: 200px;
    border-color: beige;
    border-width: 2px;
    border-radius: 10px;
    border-style: solid;
    margin-left: auto;
    margin-right: auto;
}
.in-image {
    width: 100%;
    height: 100%;
}
</style>
