import * as _m0 from "protobuf/minimal";
import { bytesFromBase64, base64FromBytes } from "@osmonauts/helpers";
export interface GenesisState {
  genTxs: Uint8Array[];
}

function createBaseGenesisState(): GenesisState {
  return {
    genTxs: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.genTxs) {
      writer.uint32(10).bytes(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.genTxs.push(reader.bytes());

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      genTxs: Array.isArray(object?.genTxs) ? object.genTxs.map((e: any) => bytesFromBase64(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};

    if (message.genTxs) {
      obj.genTxs = message.genTxs.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.genTxs = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.genTxs = object.genTxs?.map(e => e) || [];
    return message;
  }

};