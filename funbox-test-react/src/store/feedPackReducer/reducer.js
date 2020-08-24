import { feedPacksConfig } from "./config";

import * as actionTypes from "store/actions/actions";

const initState = {
  feedPacks: [...feedPacksConfig]
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_PICKING_STATE:
      console.log(action.id);
      return state;
    default:
      return state;
  }
};

export default reducer;
