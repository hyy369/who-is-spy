// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

let people_number = 0;
let spy_number = 0;
let white_board = 0;
let normal_man = 0;
let assignment = [];
let choose_word = ["", ""];
let role_image = ["", ""];
let spy_win = 0;

Vue.prototype.global_data = {
  people_number: people_number,
  spy_number: spy_number,
  white_board: white_board,
  normal_man: normal_man,
  assignment: assignment,
  choose_word: choose_word,
  role_image: role_image,
  spy_win: spy_win
};

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
