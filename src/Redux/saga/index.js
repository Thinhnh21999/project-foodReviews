import { takeEvery, call, put } from "redux-saga/effects";
import { fetchCarts } from "../../service/cartsApi";
import { actionType, setCartsAction, setPramsAction } from "../action";

function* getCartsSaga(action) {
  try {
    const result = yield call(fetchCarts, action.payload);
    yield put(setCartsAction(result.data.data));
    yield put(setPramsAction(result.data.pagination));
    console.log(result.data);
  } catch (error) {
    console.log("error");
  }
}

export default function* mySaga() {
  yield takeEvery(actionType.GET_CARTS_SAGA, getCartsSaga);
}
