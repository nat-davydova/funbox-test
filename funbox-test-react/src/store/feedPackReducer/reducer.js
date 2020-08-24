import cloneDeep from "lodash/cloneDeep";

import { feedPacksConfig } from "./config";

import * as actionTypes from "store/actions/actions";

const initState = {
  feedPacks: [...feedPacksConfig]
};

const findActualPack = (packsArr, id) => {
  let actualPack;

  for (let i = 0; i < packsArr.length; i++) {
    if (packsArr[i].id === id) {
      actualPack = packsArr[i];
      break;
    }
  }

  return actualPack;
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_PICKING_STATE:
      const feedPacksArr = cloneDeep(state.feedPacks);
      const packToPick = findActualPack(feedPacksArr, action.id);

      if (!packToPick.isDisabled) {
        packToPick.isPicked = !packToPick.isPicked;
      }

      return {
        ...state,
        feedPacks: feedPacksArr
      };
    default:
      return state;
  }
};

export default reducer;
