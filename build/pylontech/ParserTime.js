"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var ParserTime_exports = {};
__export(ParserTime_exports, {
  ParserTime: () => ParserTime
});
module.exports = __toCommonJS(ParserTime_exports);
var import_ParserBase = __toESM(require("./ParserBase"));
const COMMAND = "time";
class ParserTime extends import_ParserBase.default {
  constructor() {
    super(...arguments);
    this._noConvertKeys = ["Code"];
  }
  isParser(data) {
    const prompt = /(>)(\S+)$/gm;
    return this._isParser(data, prompt, COMMAND);
  }
  parseData(data) {
    const row = /(.+\S)\s+(\d{2,4}-[0-1]\d-[0-3]\d [0-2]\d:[0-5]\d:[0-5]\d)/gm;
    const result = this._parseDataNameValN(data, row, COMMAND);
    Object.keys(result.time).forEach((key) => {
      result.time[key].write = true;
      result.time[key].function = "settime";
    });
    return result;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ParserTime
});
//# sourceMappingURL=ParserTime.js.map