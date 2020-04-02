// actions related to get suggestions
import {
  ADD_SUGGESTIONS,
  SHOW_SUGGESTIONS,
  LOAD_CONTENT,
  HIDE_SUGGETIONS,
  CHANGE_SUGGESTION
} from "./types";

export function addSuggestions(text) {
  return {
    type: ADD_SUGGESTIONS,
    payload: text
  };
}

export function showSuggestions() {
  return {
    type: SHOW_SUGGESTIONS
  };
}
export function loadContent(text) {
  return {
    type: LOAD_CONTENT,
    payload: text
  };
}

export function hideSuggestions() {
  return {
    type: HIDE_SUGGETIONS
  };
}

export function changeSugestions(text) {
  return {
    type: CHANGE_SUGGESTION,
    payload: text
  };
}
