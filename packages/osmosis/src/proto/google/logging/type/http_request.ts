/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";

/**
 * A common proto for logging HTTP requests. Only contains semantics
 * defined by the HTTP specification. Product-specific logging
 * information MUST be defined in a separate message.
 */
export interface HttpRequest {
  /** The request method. Examples: `"GET"`, `"HEAD"`, `"PUT"`, `"POST"`. */
  requestMethod: string;
  /**
   * The scheme (http, https), the host name, the path and the query
   * portion of the URL that was requested.
   * Example: `"http://example.com/some/info?color=red"`.
   */

  requestUrl: string;
  /**
   * The size of the HTTP request message in bytes, including the request
   * headers and the request body.
   */

  requestSize: string;
  /**
   * The response code indicating the status of response.
   * Examples: 200, 404.
   */

  status: number;
  /**
   * The size of the HTTP response message sent back to the client, in bytes,
   * including the response headers and the response body.
   */

  responseSize: string;
  /**
   * The user agent sent by the client. Example:
   * `"Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; Q312461; .NET
   * CLR 1.0.3705)"`.
   */

  userAgent: string;
  /**
   * The IP address (IPv4 or IPv6) of the client that issued the HTTP
   * request. This field can include port information. Examples:
   * `"192.168.1.1"`, `"10.0.0.1:80"`, `"FE80::0202:B3FF:FE1E:8329"`.
   */

  remoteIp: string;
  /**
   * The IP address (IPv4 or IPv6) of the origin server that the request was
   * sent to. This field can include port information. Examples:
   * `"192.168.1.1"`, `"10.0.0.1:80"`, `"FE80::0202:B3FF:FE1E:8329"`.
   */

  serverIp: string;
  /**
   * The referer URL of the request, as defined in
   * [HTTP/1.1 Header Field
   * Definitions](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html).
   */

  referer: string;
  /**
   * The request processing latency on the server, from the time the request was
   * received until the response was sent.
   */

  latency: string;
  /** Whether or not a cache lookup was attempted. */

  cacheLookup: boolean;
  /**
   * Whether or not an entity was served from cache
   * (with or without validation).
   */

  cacheHit: boolean;
  /**
   * Whether or not the response was validated with the origin server before
   * being served from cache. This field is only meaningful if `cache_hit` is
   * True.
   */

  cacheValidatedWithOriginServer: boolean;
  /**
   * The number of HTTP response bytes inserted into cache. Set only when a
   * cache fill was attempted.
   */

  cacheFillBytes: string;
  /** Protocol used for the request. Examples: "HTTP/1.1", "HTTP/2", "websocket" */

  protocol: string;
}

function createBaseHttpRequest(): HttpRequest {
  return {
    requestMethod: "",
    requestUrl: "",
    requestSize: "0",
    status: 0,
    responseSize: "0",
    userAgent: "",
    remoteIp: "",
    serverIp: "",
    referer: "",
    latency: undefined,
    cacheLookup: false,
    cacheHit: false,
    cacheValidatedWithOriginServer: false,
    cacheFillBytes: "0",
    protocol: ""
  };
}

export const HttpRequest = {
  encode(message: HttpRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestMethod !== "") {
      writer.uint32(10).string(message.requestMethod);
    }

    if (message.requestUrl !== "") {
      writer.uint32(18).string(message.requestUrl);
    }

    if (message.requestSize !== "0") {
      writer.uint32(24).int64(message.requestSize);
    }

    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }

    if (message.responseSize !== "0") {
      writer.uint32(40).int64(message.responseSize);
    }

    if (message.userAgent !== "") {
      writer.uint32(50).string(message.userAgent);
    }

    if (message.remoteIp !== "") {
      writer.uint32(58).string(message.remoteIp);
    }

    if (message.serverIp !== "") {
      writer.uint32(106).string(message.serverIp);
    }

    if (message.referer !== "") {
      writer.uint32(66).string(message.referer);
    }

    if (message.latency !== undefined) {
      Duration.encode(toDuration(message.latency), writer.uint32(114).fork()).ldelim();
    }

    if (message.cacheLookup === true) {
      writer.uint32(88).bool(message.cacheLookup);
    }

    if (message.cacheHit === true) {
      writer.uint32(72).bool(message.cacheHit);
    }

    if (message.cacheValidatedWithOriginServer === true) {
      writer.uint32(80).bool(message.cacheValidatedWithOriginServer);
    }

    if (message.cacheFillBytes !== "0") {
      writer.uint32(96).int64(message.cacheFillBytes);
    }

    if (message.protocol !== "") {
      writer.uint32(122).string(message.protocol);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HttpRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHttpRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.requestMethod = reader.string();
          break;

        case 2:
          message.requestUrl = reader.string();
          break;

        case 3:
          message.requestSize = longToString((reader.int64() as Long));
          break;

        case 4:
          message.status = reader.int32();
          break;

        case 5:
          message.responseSize = longToString((reader.int64() as Long));
          break;

        case 6:
          message.userAgent = reader.string();
          break;

        case 7:
          message.remoteIp = reader.string();
          break;

        case 13:
          message.serverIp = reader.string();
          break;

        case 8:
          message.referer = reader.string();
          break;

        case 14:
          message.latency = fromDuration(Duration.decode(reader, reader.uint32()));
          break;

        case 11:
          message.cacheLookup = reader.bool();
          break;

        case 9:
          message.cacheHit = reader.bool();
          break;

        case 10:
          message.cacheValidatedWithOriginServer = reader.bool();
          break;

        case 12:
          message.cacheFillBytes = longToString((reader.int64() as Long));
          break;

        case 15:
          message.protocol = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): HttpRequest {
    return {
      requestMethod: isSet(object.requestMethod) ? String(object.requestMethod) : "",
      requestUrl: isSet(object.requestUrl) ? String(object.requestUrl) : "",
      requestSize: isSet(object.requestSize) ? String(object.requestSize) : "0",
      status: isSet(object.status) ? Number(object.status) : 0,
      responseSize: isSet(object.responseSize) ? String(object.responseSize) : "0",
      userAgent: isSet(object.userAgent) ? String(object.userAgent) : "",
      remoteIp: isSet(object.remoteIp) ? String(object.remoteIp) : "",
      serverIp: isSet(object.serverIp) ? String(object.serverIp) : "",
      referer: isSet(object.referer) ? String(object.referer) : "",
      latency: isSet(object.latency) ? String(object.latency) : undefined,
      cacheLookup: isSet(object.cacheLookup) ? Boolean(object.cacheLookup) : false,
      cacheHit: isSet(object.cacheHit) ? Boolean(object.cacheHit) : false,
      cacheValidatedWithOriginServer: isSet(object.cacheValidatedWithOriginServer) ? Boolean(object.cacheValidatedWithOriginServer) : false,
      cacheFillBytes: isSet(object.cacheFillBytes) ? String(object.cacheFillBytes) : "0",
      protocol: isSet(object.protocol) ? String(object.protocol) : ""
    };
  },

  toJSON(message: HttpRequest): unknown {
    const obj: any = {};
    message.requestMethod !== undefined && (obj.requestMethod = message.requestMethod);
    message.requestUrl !== undefined && (obj.requestUrl = message.requestUrl);
    message.requestSize !== undefined && (obj.requestSize = message.requestSize);
    message.status !== undefined && (obj.status = Math.round(message.status));
    message.responseSize !== undefined && (obj.responseSize = message.responseSize);
    message.userAgent !== undefined && (obj.userAgent = message.userAgent);
    message.remoteIp !== undefined && (obj.remoteIp = message.remoteIp);
    message.serverIp !== undefined && (obj.serverIp = message.serverIp);
    message.referer !== undefined && (obj.referer = message.referer);
    message.latency !== undefined && (obj.latency = message.latency);
    message.cacheLookup !== undefined && (obj.cacheLookup = message.cacheLookup);
    message.cacheHit !== undefined && (obj.cacheHit = message.cacheHit);
    message.cacheValidatedWithOriginServer !== undefined && (obj.cacheValidatedWithOriginServer = message.cacheValidatedWithOriginServer);
    message.cacheFillBytes !== undefined && (obj.cacheFillBytes = message.cacheFillBytes);
    message.protocol !== undefined && (obj.protocol = message.protocol);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HttpRequest>, I>>(object: I): HttpRequest {
    const message = createBaseHttpRequest();
    message.requestMethod = object.requestMethod ?? "";
    message.requestUrl = object.requestUrl ?? "";
    message.requestSize = object.requestSize ?? "0";
    message.status = object.status ?? 0;
    message.responseSize = object.responseSize ?? "0";
    message.userAgent = object.userAgent ?? "";
    message.remoteIp = object.remoteIp ?? "";
    message.serverIp = object.serverIp ?? "";
    message.referer = object.referer ?? "";
    message.latency = object.latency ?? undefined;
    message.cacheLookup = object.cacheLookup ?? false;
    message.cacheHit = object.cacheHit ?? false;
    message.cacheValidatedWithOriginServer = object.cacheValidatedWithOriginServer ?? false;
    message.cacheFillBytes = object.cacheFillBytes ?? "0";
    message.protocol = object.protocol ?? "";
    return message;
  }

};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> } : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

function toDuration(duration: string): Duration {
  return {
    seconds: Long.fromNumber(Math.floor(parseInt(duration) / 1_000_000_000)),
    nanos: parseInt(duration) % 1_000_000_000
  };
}

function fromDuration(duration: Duration): string {
  return parseInt(duration.seconds) * 1_000_000_000 + parseInt(duration.nanoseconds);
}

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = (Long as any);

  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}