import * as _m0 from "protobuf/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "@osmonauts/helpers";
export interface StoreKVPair {
  storeKey: string;
  delete: boolean;
  key: Uint8Array;
  value: Uint8Array;
}

function createBaseStoreKVPair(): StoreKVPair {
  return {
    storeKey: "",
    delete: false,
    key: new Uint8Array(),
    value: new Uint8Array()
  };
}

export const StoreKVPair = {
  encode(message: StoreKVPair, writer = _m0.Writer.create()): _m0.Writer {
    if (message.storeKey !== "") {
      writer.uint32(10).string(message.storeKey);
    }

    if (message.delete === true) {
      writer.uint32(16).bool(message.delete);
    }

    if (message.key.length !== 0) {
      writer.uint32(26).bytes(message.key);
    }

    if (message.value.length !== 0) {
      writer.uint32(34).bytes(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): StoreKVPair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreKVPair();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.storeKey = reader.string();
          break;

        case 2:
          message.delete = reader.bool();
          break;

        case 3:
          message.key = reader.bytes();
          break;

        case 4:
          message.value = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): StoreKVPair {
    return {
      storeKey: isSet(object.storeKey) ? String(object.storeKey) : "",
      delete: isSet(object.delete) ? Boolean(object.delete) : false,
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
    };
  },

  toJSON(message: StoreKVPair): unknown {
    const obj: any = {};
    message.storeKey !== undefined && (obj.storeKey = message.storeKey);
    message.delete !== undefined && (obj.delete = message.delete);
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StoreKVPair>, I>>(object: I): StoreKVPair {
    const message = createBaseStoreKVPair();
    message.storeKey = object.storeKey ?? "";
    message.delete = object.delete ?? false;
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    return message;
  }

};