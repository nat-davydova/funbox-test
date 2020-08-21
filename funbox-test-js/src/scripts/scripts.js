import 'element-closest/browser'

import {
  pickFeedPack,
  disableFeedPack
} from './modules/feedPack/feedPack'

import { PATH } from './path'

(function () {
  'use strict'

  // *** EVENT LISTENERS
  document.addEventListener('DOMContentLoaded', () => {
    disableFeedPack()
  })

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
