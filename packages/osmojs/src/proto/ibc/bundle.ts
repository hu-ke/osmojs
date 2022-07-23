import * as _108 from "./applications/transfer/v1/genesis";
import * as _109 from "./applications/transfer/v1/query";
import * as _110 from "./applications/transfer/v1/transfer";
import * as _111 from "./applications/transfer/v1/tx";
import * as _112 from "./applications/transfer/v2/packet";
import * as _113 from "./core/channel/v1/channel";
import * as _114 from "./core/channel/v1/genesis";
import * as _115 from "./core/channel/v1/query";
import * as _116 from "./core/channel/v1/tx";
import * as _117 from "./core/client/v1/client";
import * as _118 from "./core/client/v1/genesis";
import * as _119 from "./core/client/v1/query";
import * as _120 from "./core/client/v1/tx";
import * as _121 from "./core/commitment/v1/commitment";
import * as _122 from "./core/connection/v1/connection";
import * as _123 from "./core/connection/v1/genesis";
import * as _124 from "./core/connection/v1/query";
import * as _125 from "./core/connection/v1/tx";
import * as _126 from "./core/port/v1/query";
import * as _127 from "./core/types/v1/genesis";
import * as _128 from "./lightclients/localhost/v1/localhost";
import * as _129 from "./lightclients/solomachine/v1/solomachine";
import * as _130 from "./lightclients/solomachine/v2/solomachine";
import * as _131 from "./lightclients/tendermint/v1/tendermint";
import * as _244 from "./applications/transfer/v1/tx.amino";
import * as _245 from "./core/channel/v1/tx.amino";
import * as _246 from "./core/client/v1/tx.amino";
import * as _247 from "./core/connection/v1/tx.amino";
import * as _248 from "./applications/transfer/v1/tx.registry";
import * as _249 from "./core/channel/v1/tx.registry";
import * as _250 from "./core/client/v1/tx.registry";
import * as _251 from "./core/connection/v1/tx.registry";
import * as _252 from "./applications/transfer/v1/query.rpc.query";
import * as _253 from "./core/channel/v1/query.rpc.query";
import * as _254 from "./core/client/v1/query.rpc.query";
import * as _255 from "./core/connection/v1/query.rpc.query";
import * as _256 from "./core/port/v1/query.rpc.query";
import * as _257 from "./applications/transfer/v1/tx.rpc.msg";
import * as _258 from "./core/channel/v1/tx.rpc.msg";
import * as _259 from "./core/client/v1/tx.rpc.msg";
import * as _260 from "./core/connection/v1/tx.rpc.msg";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._108,
        ..._109,
        ..._110,
        ..._111,
        ..._244,
        ..._248,
        ..._252,
        ..._257
      };
      export const v2 = { ..._112
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._113,
        ..._114,
        ..._115,
        ..._116,
        ..._245,
        ..._249,
        ..._253,
        ..._258
      };
    }
    export namespace client {
      export const v1 = { ..._117,
        ..._118,
        ..._119,
        ..._120,
        ..._246,
        ..._250,
        ..._254,
        ..._259
      };
    }
    export namespace commitment {
      export const v1 = { ..._121
      };
    }
    export namespace connection {
      export const v1 = { ..._122,
        ..._123,
        ..._124,
        ..._125,
        ..._247,
        ..._251,
        ..._255,
        ..._260
      };
    }
    export namespace port {
      export const v1 = { ..._126,
        ..._256
      };
    }
    export namespace types {
      export const v1 = { ..._127
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._128
      };
    }
    export namespace solomachine {
      export const v1 = { ..._129
      };
      export const v2 = { ..._130
      };
    }
    export namespace tendermint {
      export const v1 = { ..._131
      };
    }
  }
}