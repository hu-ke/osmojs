import * as _m0 from "protobuf/minimal";
import { isSet, bytesFromBase64, base64FromBytes, Long } from "@osmonauts/helpers";
import { AccessConfig } from "./types";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export interface StoreCodeProposal {
  title: string;
  description: string;
  runAs: string;
  wasmByteCode: Uint8Array;
  instantiatePermission: AccessConfig;
}

function createBaseStoreCodeProposal(): StoreCodeProposal {
  return {
    title: "",
    description: "",
    runAs: "",
    wasmByteCode: new Uint8Array(),
    instantiatePermission: undefined
  };
}

export const StoreCodeProposal = {
  encode(message: StoreCodeProposal, writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.runAs !== "") {
      writer.uint32(26).string(message.runAs);
    }

    if (message.wasmByteCode.length !== 0) {
      writer.uint32(34).bytes(message.wasmByteCode);
    }

    if (message.instantiatePermission !== undefined) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(58).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): StoreCodeProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreCodeProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.runAs = reader.string();
          break;

        case 4:
          message.wasmByteCode = reader.bytes();
          break;

        case 7:
          message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): StoreCodeProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      runAs: isSet(object.runAs) ? String(object.runAs) : "",
      wasmByteCode: isSet(object.wasmByteCode) ? bytesFromBase64(object.wasmByteCode) : new Uint8Array(),
      instantiatePermission: isSet(object.instantiatePermission) ? AccessConfig.fromJSON(object.instantiatePermission) : undefined
    };
  },

  toJSON(message: StoreCodeProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.runAs !== undefined && (obj.runAs = message.runAs);
    message.wasmByteCode !== undefined && (obj.wasmByteCode = base64FromBytes(message.wasmByteCode !== undefined ? message.wasmByteCode : new Uint8Array()));
    message.instantiatePermission !== undefined && (obj.instantiatePermission = message.instantiatePermission ? AccessConfig.toJSON(message.instantiatePermission) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StoreCodeProposal>, I>>(object: I): StoreCodeProposal {
    const message = createBaseStoreCodeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.runAs = object.runAs ?? "";
    message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
    message.instantiatePermission = object.instantiatePermission !== undefined && object.instantiatePermission !== null ? AccessConfig.fromPartial(object.instantiatePermission) : undefined;
    return message;
  }

};
export interface InstantiateContractProposal {
  title: string;
  description: string;
  runAs: string;
  admin: string;
  codeId: Long;
  label: string;
  msg: Uint8Array;
  funds: Coin[];
}

function createBaseInstantiateContractProposal(): InstantiateContractProposal {
  return {
    title: "",
    description: "",
    runAs: "",
    admin: "",
    codeId: Long.UZERO,
    label: "",
    msg: new Uint8Array(),
    funds: []
  };
}

export const InstantiateContractProposal = {
  encode(message: InstantiateContractProposal, writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.runAs !== "") {
      writer.uint32(26).string(message.runAs);
    }

    if (message.admin !== "") {
      writer.uint32(34).string(message.admin);
    }

    if (!message.codeId.isZero()) {
      writer.uint32(40).uint64(message.codeId);
    }

    if (message.label !== "") {
      writer.uint32(50).string(message.label);
    }

    if (message.msg.length !== 0) {
      writer.uint32(58).bytes(message.msg);
    }

    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): InstantiateContractProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstantiateContractProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.runAs = reader.string();
          break;

        case 4:
          message.admin = reader.string();
          break;

        case 5:
          message.codeId = (reader.uint64() as Long);
          break;

        case 6:
          message.label = reader.string();
          break;

        case 7:
          message.msg = reader.bytes();
          break;

        case 8:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): InstantiateContractProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      runAs: isSet(object.runAs) ? String(object.runAs) : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      codeId: isSet(object.codeId) ? Long.fromString(object.codeId) : Long.UZERO,
      label: isSet(object.label) ? String(object.label) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: InstantiateContractProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.runAs !== undefined && (obj.runAs = message.runAs);
    message.admin !== undefined && (obj.admin = message.admin);
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.label !== undefined && (obj.label = message.label);
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));

    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.funds = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InstantiateContractProposal>, I>>(object: I): InstantiateContractProposal {
    const message = createBaseInstantiateContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.runAs = object.runAs ?? "";
    message.admin = object.admin ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.label = object.label ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};
export interface MigrateContractProposal {
  title: string;
  description: string;
  contract: string;
  codeId: Long;
  msg: Uint8Array;
}

function createBaseMigrateContractProposal(): MigrateContractProposal {
  return {
    title: "",
    description: "",
    contract: "",
    codeId: Long.UZERO,
    msg: new Uint8Array()
  };
}

export const MigrateContractProposal = {
  encode(message: MigrateContractProposal, writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }

    if (!message.codeId.isZero()) {
      writer.uint32(40).uint64(message.codeId);
    }

    if (message.msg.length !== 0) {
      writer.uint32(50).bytes(message.msg);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): MigrateContractProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMigrateContractProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 4:
          message.contract = reader.string();
          break;

        case 5:
          message.codeId = (reader.uint64() as Long);
          break;

        case 6:
          message.msg = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MigrateContractProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      codeId: isSet(object.codeId) ? Long.fromString(object.codeId) : Long.UZERO,
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array()
    };
  },

  toJSON(message: MigrateContractProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.contract !== undefined && (obj.contract = message.contract);
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MigrateContractProposal>, I>>(object: I): MigrateContractProposal {
    const message = createBaseMigrateContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contract = object.contract ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.msg = object.msg ?? new Uint8Array();
    return message;
  }

};
export interface SudoContractProposal {
  title: string;
  description: string;
  contract: string;
  msg: Uint8Array;
}

function createBaseSudoContractProposal(): SudoContractProposal {
  return {
    title: "",
    description: "",
    contract: "",
    msg: new Uint8Array()
  };
}

export const SudoContractProposal = {
  encode(message: SudoContractProposal, writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }

    if (message.msg.length !== 0) {
      writer.uint32(34).bytes(message.msg);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): SudoContractProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSudoContractProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.contract = reader.string();
          break;

        case 4:
          message.msg = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SudoContractProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array()
    };
  },

  toJSON(message: SudoContractProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.contract !== undefined && (obj.contract = message.contract);
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SudoContractProposal>, I>>(object: I): SudoContractProposal {
    const message = createBaseSudoContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contract = object.contract ?? "";
    message.msg = object.msg ?? new Uint8Array();
    return message;
  }

};
export interface ExecuteContractProposal {
  title: string;
  description: string;
  runAs: string;
  contract: string;
  msg: Uint8Array;
  funds: Coin[];
}

function createBaseExecuteContractProposal(): ExecuteContractProposal {
  return {
    title: "",
    description: "",
    runAs: "",
    contract: "",
    msg: new Uint8Array(),
    funds: []
  };
}

export const ExecuteContractProposal = {
  encode(message: ExecuteContractProposal, writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.runAs !== "") {
      writer.uint32(26).string(message.runAs);
    }

    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }

    if (message.msg.length !== 0) {
      writer.uint32(42).bytes(message.msg);
    }

    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): ExecuteContractProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecuteContractProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.runAs = reader.string();
          break;

        case 4:
          message.contract = reader.string();
          break;

        case 5:
          message.msg = reader.bytes();
          break;

        case 6:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ExecuteContractProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      runAs: isSet(object.runAs) ? String(object.runAs) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: ExecuteContractProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.runAs !== undefined && (obj.runAs = message.runAs);
    message.contract !== undefined && (obj.contract = message.contract);
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));

    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.funds = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExecuteContractProposal>, I>>(object: I): ExecuteContractProposal {
    const message = createBaseExecuteContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.runAs = object.runAs ?? "";
    message.contract = object.contract ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};
export interface UpdateAdminProposal {
  title: string;
  description: string;
  newAdmin: string;
  contract: string;
}

function createBaseUpdateAdminProposal(): UpdateAdminProposal {
  return {
    title: "",
    description: "",
    newAdmin: "",
    contract: ""
  };
}

export const UpdateAdminProposal = {
  encode(message: UpdateAdminProposal, writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }

    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): UpdateAdminProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAdminProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.newAdmin = reader.string();
          break;

        case 4:
          message.contract = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): UpdateAdminProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : "",
      contract: isSet(object.contract) ? String(object.contract) : ""
    };
  },

  toJSON(message: UpdateAdminProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateAdminProposal>, I>>(object: I): UpdateAdminProposal {
    const message = createBaseUpdateAdminProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.newAdmin = object.newAdmin ?? "";
    message.contract = object.contract ?? "";
    return message;
  }

};
export interface ClearAdminProposal {
  title: string;
  description: string;
  contract: string;
}

function createBaseClearAdminProposal(): ClearAdminProposal {
  return {
    title: "",
    description: "",
    contract: ""
  };
}

export const ClearAdminProposal = {
  encode(message: ClearAdminProposal, writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): ClearAdminProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClearAdminProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.contract = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ClearAdminProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      contract: isSet(object.contract) ? String(object.contract) : ""
    };
  },

  toJSON(message: ClearAdminProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClearAdminProposal>, I>>(object: I): ClearAdminProposal {
    const message = createBaseClearAdminProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contract = object.contract ?? "";
    return message;
  }

};
export interface PinCodesProposal {
  title: string;
  description: string;
  codeIds: Long[];
}

function createBasePinCodesProposal(): PinCodesProposal {
  return {
    title: "",
    description: "",
    codeIds: []
  };
}

export const PinCodesProposal = {
  encode(message: PinCodesProposal, writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    writer.uint32(24).fork();

    for (const v of message.codeIds) {
      writer.uint64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): PinCodesProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePinCodesProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.codeIds.push((reader.uint64() as Long));
            }
          } else {
            message.codeIds.push((reader.uint64() as Long));
          }

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PinCodesProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      codeIds: Array.isArray(object?.codeIds) ? object.codeIds.map((e: any) => Long.fromString(e)) : []
    };
  },

  toJSON(message: PinCodesProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);

    if (message.codeIds) {
      obj.codeIds = message.codeIds.map(e => (e || Long.UZERO).toString());
    } else {
      obj.codeIds = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PinCodesProposal>, I>>(object: I): PinCodesProposal {
    const message = createBasePinCodesProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.codeIds = object.codeIds?.map(e => Long.fromValue(e)) || [];
    return message;
  }

};
export interface UnpinCodesProposal {
  title: string;
  description: string;
  codeIds: Long[];
}

function createBaseUnpinCodesProposal(): UnpinCodesProposal {
  return {
    title: "",
    description: "",
    codeIds: []
  };
}

export const UnpinCodesProposal = {
  encode(message: UnpinCodesProposal, writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    writer.uint32(24).fork();

    for (const v of message.codeIds) {
      writer.uint64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): UnpinCodesProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnpinCodesProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.codeIds.push((reader.uint64() as Long));
            }
          } else {
            message.codeIds.push((reader.uint64() as Long));
          }

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): UnpinCodesProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      codeIds: Array.isArray(object?.codeIds) ? object.codeIds.map((e: any) => Long.fromString(e)) : []
    };
  },

  toJSON(message: UnpinCodesProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);

    if (message.codeIds) {
      obj.codeIds = message.codeIds.map(e => (e || Long.UZERO).toString());
    } else {
      obj.codeIds = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UnpinCodesProposal>, I>>(object: I): UnpinCodesProposal {
    const message = createBaseUnpinCodesProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.codeIds = object.codeIds?.map(e => Long.fromValue(e)) || [];
    return message;
  }

};