const PACK_DISABLED_VAL = 'disabled'
const PACK_PICKED_VAL = 'picked'
const PACK_UNPICKED_VAL = ''

export const pickFeedPack = pack => {
  // check if pack is disabled or not, if disabled - no picking allowed
  const packDisabledVal = pack.dataset.packDisabled

  if (packDisabledVal === PACK_DISABLED_VAL) {
    return
  }

  // if pack is not disabled, picking functional
  const packPickedVal = pack.dataset.packPicked

  if (packPickedVal !== PACK_PICKED_VAL) {
    pack.dataset.packPicked = PACK_PICKED_VAL
  } else {
    pack.dataset.packPicked = PACK_UNPICKED_VAL
  }
}
