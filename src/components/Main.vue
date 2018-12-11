<template>
  <div>
    <div class="block"></div>
    <div class="play-number">
      <h1>Who is Spy</h1>
    </div>
    <br>
    <div class="play-number">
      <h3>Number of players: {{number}}</h3>
    </div>
    <br>
    <input type="range" name="points" v-model="number" min="4" max="9" class="weui-slider__inner">
    <br>
    <div class="weui-flex">
      <div class="weui-flex__item">
        <h3>
          Number of spy: {{spy_number}}
        </h3>
      </div>
       
      <div class="weui-flex__item">
        <h3>
          Number of Innocent(s): {{number - spy_number}}
        </h3>
      </div>
    </div>
    <br>
    <div class="weui-flex">
      <div class="weui-flex__item">
        <h3>
          Enable whiteboard:
        </h3>
      </div>
       
      <div class="weui-flex__item">
        <h3>
          <input class="weui-switch" type="checkbox" v-model="need_white"/>
        </h3>
      </div>
    </div>
    <br>
      <button type="button" @click="click_ok" class="weui-btn weui-btn_primary">Start</button>
      <br>
    <button type="button" @click="show_rules" class="weui-btn weui-btn_default">{{see_rule?'Hide the Rules':' Learn the Rules'}}</button>
    <div class="weui-flex" :class="{hidden: !see_rule}">
      <img class="rule_image" src="https://busyteacher.org/uploads/posts/2016-07/1467664165_bt-submission-dnisbet-game-who-is-the-spy-0.png"  alt="" srcset="">
      <p> Image source: busyteacher.org (https://busyteacher.org/24039-who-is-the-spy-talking-game.html)</p>
    </div>
  </div>
</template>

<script>
import 'weui/dist/style/weui.min.css'
export default {
  name: "Main",
  data() {
    return {
      number: 6,
      spy_number: 1,
      need_white: 0,
      word: [
        ["the Hobbits ", "Lord of the Rings"],
        ['Pocket money','Salary'],
        ['Florida', 'California'],
        ['Father', 'Mother'],
        ['Butterfly', 'Bee'],
        ['Sushi', 'Sashimi'],
        ['Spaghetti','Pasta'],
        ['Programmer','Engineer'],
        // ['Instagram','Facebook'],
        // ['Uber', 'Lyft'],
        // ['Maroon 5', 'One Republic'],
        // ['Cocacola','Pepsi'],
        // ['TTYL','BRB'],
        // ['Siri', 'Alexa']
      ],
      see_rule: 0,
    }
  },
  methods: {
    click_ok: function() {
      //adata = this.number;
      this.global_data.people_number = this.number
      this.global_data.spy_number = this.spy_number
      this.global_data.white_board = 1
      this.global_data.normal_man = this.number - this.spy_number - 1;
      this.global_data.choose_word = this.word[Math.floor(Math.random()*this.word.length)];
      this.global_data.assignment = new Array(this.number);
      for(let loop_i = 0; loop_i < this.number; ++loop_i) this.global_data.assignment[loop_i] = 0;
      let blank_index = Math.floor(Math.random()*this.word.length);
      this.global_data.assignment[blank_index] = 1;
      if(this.need_white){
        while(this.global_data.assignment[blank_index]) blank_index =Math.floor(Math.random()*this.word.length);
        this.global_data.assignment[blank_index] = 2;
      }
      console.log(this.global_data.assignment);
      var GphApiClient = require('giphy-js-sdk-core')
      let client = GphApiClient('uLHEHrFfLLE5Ll5Q02RW033oFQoLg1Ox')
      client.search('gifs', {'q': this.global_data.choose_word[0]}).then((response) => {
        this.global_data.role_image[0] = response.data[0].images.downsized.url
      }).catch((err) => {

      })

      client.search('gifs', {'q': this.global_data.choose_word[1]}).then((response) => {
        this.global_data.role_image[1] = response.data[0].images.downsized.url
      }).catch((err) => {

      })
      this.$router.push('confirm')
    },
    show_rules: function() {
      this.see_rule = !this.see_rule
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.block {
  height: 100px;
  width: 100%;
  display: block;
}
.play-number {
  text-align: center;
}
.hidden {
  display: none;
}
input[type="range"] {
  display: block;
  -webkit-appearance: none;
  width: 100%;
  height: 2px;
  border-radius: 5px;
  margin: 0 auto;
  outline: 0;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  background-color: #ffffff;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
}
</style>
