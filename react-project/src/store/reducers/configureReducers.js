
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducers from "./rootReducers";
import { createStoreHook } from "react-redux";

export function configureStore(){
    return createStoreHook  (rootReducers,devToolsEnhancer())
}