import {isNull, isUndefined} from "lodash";
// nvl
export function nvl(data, reData) {
  if(isNull(data)||isUndefined(data))
    return reData;

  return data;
}

export function cameraRange(data, reData) {
  if(isNull(data)||isUndefined(data)||data === '')
    return reData;

  return data;
}

export function diffObjectData(obj, origin){
  let tempObj = {};
  for (const [key, value] of Object.entries(obj)) {
    if(origin[key] !== value){
      tempObj[key] = value;
    }
  }
  return tempObj;
}

export function sameMergeNotNull(origin, mergeObj){
  for (const [key, value] of Object.entries(origin)) { // eslint-disable-line no-unused-vars
    if(mergeObj[key]){
      origin[key] = mergeObj[key];
    }
  }
  return origin;
}

// 버튼 위치 셋팅
export function setBtnPosition(loc, position, name,btn){
  switch (loc) {
    case "LEFT":
      position["left"][name] = btn;
      break;
    case "CENTER":
      position["center"][name] = btn;
      break;
    case "RIGHT":
      position["right"][name] = btn;
      break;
  }
}
