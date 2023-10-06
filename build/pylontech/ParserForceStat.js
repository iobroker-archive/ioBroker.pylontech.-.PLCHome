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
var ParserForceStat_exports = {};
__export(ParserForceStat_exports, {
  ParserForceStat: () => ParserForceStat
});
module.exports = __toCommonJS(ParserForceStat_exports);
var import_ParserBase = __toESM(require("./ParserBase"));
const COMMAND = "stat";
class ParserForceStat extends import_ParserBase.default {
  isParser(data) {
    const prompt = /(>)(\S+)$/gm;
    return this._isParser(data, prompt, COMMAND);
  }
  parseData(data) {
    const row = /(.+\S)\s*:(.*)/gm;
    return this._parseDataNameValN(data, row, COMMAND);
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ParserForceStat
});
//# sourceMappingURL=ParserForceStat.js.map