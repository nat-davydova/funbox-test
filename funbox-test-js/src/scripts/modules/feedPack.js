const PACK_DISABLED_VAL = 'disabled'

export const pickFeedPack = pack => {

  const packDisabledVal = pack.dataset.packDisabled;

  if (packDisabledVal === PACK_DISABLED_VAL) {
    return
  }
}
