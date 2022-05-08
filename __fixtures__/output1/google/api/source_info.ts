import * as _m0 from "protobuf/minimal";
import { Any } from "../protobuf/any";
export interface SourceInfo {
  sourceFiles: Any[];
}

function createBaseSourceInfo(): SourceInfo {
  return {
    sourceFiles: []
  };
}

export const SourceInfo = {
  encode(message: SourceInfo, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.sourceFiles) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): SourceInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sourceFiles.push(Any.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SourceInfo {
    return {
      sourceFiles: Array.isArray(object?.sourceFiles) ? object.sourceFiles.map((e: any) => Any.fromJSON(e)) : []
    };
  },

  toJSON(message: SourceInfo): unknown {
    const obj: any = {};

    if (message.sourceFiles) {
      obj.sourceFiles = message.sourceFiles.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.sourceFiles = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SourceInfo>, I>>(object: I): SourceInfo {
    const message = createBaseSourceInfo();
    message.sourceFiles = object.sourceFiles?.map(e => Any.fromPartial(e)) || [];
    return message;
  }

};