import { PATH } from './path'

(function () {
  'use strict'

  // *** EVENT LISTENERS
  document.body.addEventListener('click', e => {
    const target = e.target;

    if (
      target.closest(PATH.feedPack.card) ||
      target.closest(PATH.feedPack.orderBtn)
    ) {
      console.log('pick!')
    }
  })
})()
