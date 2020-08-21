import { hideElem, showElem } from '../../utils'
import * as packConsts from './consts'

import { PATH } from '../../path'

const pickPack = (pack, ctaText, pickText) => {
  pack.dataset.packPicked = packConsts.PACK_PICKED_VAL
  hideElem(ctaText)
  showElem(pickText)
}

const unpickPack = (pack, ctaText, pickText) => {
  pack.dataset.packPicked = packConsts.PACK_UNPICKED_VAL
  hideElem(pickText)
  showElem(ctaText)
}

export const pickFeedPack = (pack) => {
  // check if pack is disabled or not, if disabled - no picking allowed
  const packDisabledVal = pack.dataset.packDisabled

  if (packDisabledVal === packConsts.PACK_DISABLED_VAL) {
    return
  }

  // if pack is not disabled, picking functional
  const packPickedVal = pack.dataset.packPicked
  const packCTAtext = pack.querySelector(PATH.feedPack.ctaText)
  const packPickedtext = pack.querySelector(PATH.feedPack.pickedText)
  const packCard = pack.querySelector(PATH.feedPack.card)

  if (packPickedVal !== packConsts.PACK_PICKED_VAL) {
    pickPack(pack, packCTAtext, packPickedtext)
  } else {
    unpickPack(pack, packCTAtext, packPickedtext)
  }

  packCard.classList.add('js-no-hover')

  packCard.addEventListener('mouseleave', () => {
    packCard.classList.remove('js-no-hover')
  },
  {
    once: true
  })
}
