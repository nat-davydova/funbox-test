import { hideElem, showElem } from '../../utils'
import * as packConsts from './consts'

import { PATH } from '../../path'

const disablePack = pack => {
  const packCTA = pack.querySelector(PATH.feedPack.ctaText)
  const packPickedTxt = pack.querySelector(PATH.feedPack.pickedText)
  const packDisabledTxt = pack.querySelector(PATH.feedPack.disabledText)

  hideElem(packCTA)
  hideElem(packPickedTxt)
  showElem(packDisabledTxt)
}

export const disableFeedPack = () => {
  const packsToDisable = Array.from(
    document.querySelectorAll(`${PATH.feedPack.pack}[data-pack-disabled = ${packConsts.PACK_DISABLED_VAL}]`)
  )

  packsToDisable.forEach(elem => disablePack(elem))
}
