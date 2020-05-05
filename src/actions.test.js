import {addItem, removeItem} from "./actions";
import { ADD_ITEM, REMOVE_ITEM } from "./actionTypes";

test('test addItem, removeItem are function', () => {
  expect(typeof addItem).toEqual("function");
  expect(typeof removeItem).toEqual("function");
});

test('Test addItem returns correct obj', () => {
  const id = 1;
  const respObj = addItem(id);

  expect(respObj).toEqual({
    type: ADD_ITEM,
    payload: id
  });
});

test('Test removeItem returns correct obj', () => {
  const id = 1;
  const respObj = removeItem(id);

  expect(respObj).toEqual({
    type: REMOVE_ITEM,
    payload: id
  });
});