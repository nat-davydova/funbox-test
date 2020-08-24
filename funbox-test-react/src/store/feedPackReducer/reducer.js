import { feedPacksConfig } from "./config";

const initState = {
  feedPacks: [...feedPacksConfig]
};

const reducer = (state = initState, action) => {
  return state;
};

export default reducer;
