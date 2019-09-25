import { put } from "redux-saga/effects";
import {
  failureDetail,
  failureList,
  successDetail,
  successList
} from "../reducers/characters";
import create from "../../services/config";

const api = create("people");

export function* getCharacter() {
  try {
    const response = yield api.getAll({});

    if (response.ok) {
      const { results } = response.data;
      yield put(successList(results));
    } else {
      yield put(failureList(response.originalError));
    }
  } catch (e) {
    yield put(failureList(e));
  }
}

export function* getCharacterDetail({ payload: id }) {
  try {
    const response = yield api.getOne(id, {});

    if (response.ok) {
      const { data } = response;
      yield put(successDetail(data));
    } else {
      yield put(failureDetail(response.originalError));
    }
  } catch (e) {
    yield put(failureDetail(e));
  }
}
