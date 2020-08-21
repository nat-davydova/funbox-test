import { pickFeedPack } from './modules/feedPack'

import { PATH } from './path'

(function () {
  'use strict'

  // *** EVENT LISTENERS
  document.body.addEventListener('click', e => {
    const target = e.target

    if (
      target.closest(PATH.feedPack.card) ||
      target.closest(PATH.feedPack.orderBtn)
    ) {
      const feedPackItem = target.closest(PATH.feedPack.pack)

      pickFeedPack(feedPackItem)
    }
  })
})()
