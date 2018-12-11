import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Display from '@/components/Display'
import Confirm from '@/components/Confirm'
import Game from '@/components/Game'
import GameOver from '@/components/GameOver'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/display',
      name: 'Dislpay',
      component: Display
    },
    {
      path: '/confirm',
      name: 'Confirm',
      component: Confirm
    },
    {
      path: '/game',
      name: 'Game',
      component: Game
    },
    {
      path: '/gameover',
      name: 'GameOver',
      component: GameOver
    }
  ]
})
