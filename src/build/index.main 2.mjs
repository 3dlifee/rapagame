// Automatically generated with Reach 0.1.7 (1bd49d90)
/* eslint-disable */
export const _version = '0.1.7';
export const _versionHash = '0.1.7 (1bd49d90)';
export const _backendVersion = 6;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  
  
  const v100 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v103 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:58:50:application',
    fs: ['at ./index.rsh:54:16:application call to [unknown function] (defined at: ./index.rsh:54:20:function exp)'],
    msg: 'getHand',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v100, v103],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:63:9:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v100, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v105, v106], secs: v108, time: v107, didSend: v31, from: v104 } = txn1;
      
      sim_r.txns.push({
        amt: v105,
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v105, v106], secs: v108, time: v107, didSend: v31, from: v104 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v115, time: v114, didSend: v40, from: v113 } = txn2;
  ;
  const v118 = stdlib.eq(v106, stdlib.checkedBigNumberify('./index.rsh:83:17:decimal', stdlib.UInt_max, 0));
  if (v118) {
    ;
    if (v118) {
      ;
      stdlib.protect(ctc1, await interact.seeOutcome(v106), {
        at: './index.rsh:113:20:application',
        fs: ['at ./index.rsh:112:9:application call to [unknown function] (defined at: ./index.rsh:112:36:function exp)'],
        msg: 'seeOutcome',
        who: 'Alice'
        });
      
      return;
      }
    else {
      ;
      stdlib.protect(ctc1, await interact.seeOutcome(v106), {
        at: './index.rsh:113:20:application',
        fs: ['at ./index.rsh:112:9:application call to [unknown function] (defined at: ./index.rsh:112:36:function exp)'],
        msg: 'seeOutcome',
        who: 'Alice'
        });
      
      return;
      }}
  else {
    ;
    if (v118) {
      ;
      stdlib.protect(ctc1, await interact.seeOutcome(v106), {
        at: './index.rsh:113:20:application',
        fs: ['at ./index.rsh:112:9:application call to [unknown function] (defined at: ./index.rsh:112:36:function exp)'],
        msg: 'seeOutcome',
        who: 'Alice'
        });
      
      return;
      }
    else {
      ;
      stdlib.protect(ctc1, await interact.seeOutcome(v106), {
        at: './index.rsh:113:20:application',
        fs: ['at ./index.rsh:112:9:application call to [unknown function] (defined at: ./index.rsh:112:36:function exp)'],
        msg: 'seeOutcome',
        who: 'Alice'
        });
      
      return;
      }}
  
  
  
  };
export async function GameWallet(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for GameWallet expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for GameWallet expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v105, v106], secs: v108, time: v107, didSend: v31, from: v104 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v105), {
    at: './index.rsh:71:23:application',
    fs: ['at ./index.rsh:69:19:application call to [unknown function] (defined at: ./index.rsh:69:23:function exp)'],
    msg: 'acceptWager',
    who: 'GameWallet'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v104, v105, v106],
    evt_cnt: 0,
    funcNum: 1,
    lct: v107,
    onlyIf: true,
    out_tys: [],
    pay: [v105, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [], secs: v115, time: v114, didSend: v40, from: v113 } = txn2;
      
      sim_r.txns.push({
        amt: v105,
        kind: 'to',
        tok: undefined
        });
      const v118 = stdlib.eq(v106, stdlib.checkedBigNumberify('./index.rsh:83:17:decimal', stdlib.UInt_max, 0));
      if (v118) {
        sim_r.txns.push({
          amt: v105,
          kind: 'from',
          to: v113,
          tok: undefined
          });
        if (v118) {
          sim_r.txns.push({
            amt: v105,
            kind: 'from',
            to: v113,
            tok: undefined
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.isHalt = true;
          }
        else {
          sim_r.txns.push({
            amt: v105,
            kind: 'from',
            to: v104,
            tok: undefined
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.isHalt = true;
          }}
      else {
        sim_r.txns.push({
          amt: v105,
          kind: 'from',
          to: v104,
          tok: undefined
          });
        if (v118) {
          sim_r.txns.push({
            amt: v105,
            kind: 'from',
            to: v113,
            tok: undefined
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.isHalt = true;
          }
        else {
          sim_r.txns.push({
            amt: v105,
            kind: 'from',
            to: v104,
            tok: undefined
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc2, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v115, time: v114, didSend: v40, from: v113 } = txn2;
  ;
  const v118 = stdlib.eq(v106, stdlib.checkedBigNumberify('./index.rsh:83:17:decimal', stdlib.UInt_max, 0));
  if (v118) {
    ;
    if (v118) {
      ;
      stdlib.protect(ctc1, await interact.seeOutcome(v106), {
        at: './index.rsh:113:20:application',
        fs: ['at ./index.rsh:112:9:application call to [unknown function] (defined at: ./index.rsh:112:36:function exp)'],
        msg: 'seeOutcome',
        who: 'GameWallet'
        });
      
      return;
      }
    else {
      ;
      stdlib.protect(ctc1, await interact.seeOutcome(v106), {
        at: './index.rsh:113:20:application',
        fs: ['at ./index.rsh:112:9:application call to [unknown function] (defined at: ./index.rsh:112:36:function exp)'],
        msg: 'seeOutcome',
        who: 'GameWallet'
        });
      
      return;
      }}
  else {
    ;
    if (v118) {
      ;
      stdlib.protect(ctc1, await interact.seeOutcome(v106), {
        at: './index.rsh:113:20:application',
        fs: ['at ./index.rsh:112:9:application call to [unknown function] (defined at: ./index.rsh:112:36:function exp)'],
        msg: 'seeOutcome',
        who: 'GameWallet'
        });
      
      return;
      }
    else {
      ;
      stdlib.protect(ctc1, await interact.seeOutcome(v106), {
        at: './index.rsh:113:20:application',
        fs: ['at ./index.rsh:112:9:application call to [unknown function] (defined at: ./index.rsh:112:36:function exp)'],
        msg: 'seeOutcome',
        who: 'GameWallet'
        });
      
      return;
      }}
  
  
  
  };
const _ALGO = {
  appApproval: `#pragma version 5
txn RekeyTo
global ZeroAddress
==
assert
txn Lease
global ZeroAddress
==
assert
int 0
store 0
txn ApplicationID
bz alloc
byte base64()
app_global_get
dup
int 0
extract_uint64
store 1
int 8
extract_uint64
store 2
txn NumAppArgs
int 3
==
assert
txna ApplicationArgs 0
btoi
preamble:
// Handler 0
dup
int 0
==
bz l0_afterHandler0
pop
// check step
int 0
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
byte base64()
pop
txna ApplicationArgs 2
dup
len
int 16
==
assert
dup
int 0
extract_uint64
store 255
dup
int 8
extract_uint64
store 254
pop
// "CheckPay"
// "./index.rsh:63:9:dot"
// "[]"
int 100000
dup
bz l1_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
global CurrentApplicationAddress
dig 1
gtxns Receiver
==
assert
l1_checkTxnK:
pop
// "CheckPay"
// "./index.rsh:63:9:dot"
// "[]"
load 255
dup
bz l2_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
global CurrentApplicationAddress
dig 1
gtxns Receiver
==
assert
l2_checkTxnK:
pop
txn Sender
load 255
itob
concat
load 254
itob
concat
int 1
bzero
dig 1
extract 0 48
app_global_put
pop
int 1
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l0_afterHandler0:
// Handler 1
dup
int 1
==
bz l3_afterHandler1
pop
// check step
int 1
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
int 40
extract_uint64
store 253
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./index.rsh:75:13:dot"
// "[]"
load 254
dup
bz l4_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
global CurrentApplicationAddress
dig 1
gtxns Receiver
==
assert
l4_checkTxnK:
pop
load 253
int 0
==
dup
store 252
bz l5_ifF
load 254
dup
bz l6_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
txn Sender
itxn_field Receiver
itxn_submit
int 0
l6_makeTxnK:
pop
load 252
bz l7_ifF
load 254
dup
bz l8_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
txn Sender
itxn_field Receiver
itxn_submit
int 0
l8_makeTxnK:
pop
int 0
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
global CreatorAddress
itxn_field CloseRemainderTo
global CurrentApplicationAddress
itxn_field Receiver
itxn_submit
int 0
l9_makeTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l7_ifF:
load 254
dup
bz l10_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 255
itxn_field Receiver
itxn_submit
int 0
l10_makeTxnK:
pop
int 0
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
global CreatorAddress
itxn_field CloseRemainderTo
global CurrentApplicationAddress
itxn_field Receiver
itxn_submit
int 0
l11_makeTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l5_ifF:
load 254
dup
bz l12_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 255
itxn_field Receiver
itxn_submit
int 0
l12_makeTxnK:
pop
load 252
bz l13_ifF
load 254
dup
bz l14_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
txn Sender
itxn_field Receiver
itxn_submit
int 0
l14_makeTxnK:
pop
int 0
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
global CreatorAddress
itxn_field CloseRemainderTo
global CurrentApplicationAddress
itxn_field Receiver
itxn_submit
int 0
l15_makeTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l13_ifF:
load 254
dup
bz l16_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 255
itxn_field Receiver
itxn_submit
int 0
l16_makeTxnK:
pop
int 0
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
global CreatorAddress
itxn_field CloseRemainderTo
global CurrentApplicationAddress
itxn_field Receiver
itxn_submit
int 0
l17_makeTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l3_afterHandler1:
int 0
assert
updateState:
byte base64()
load 1
itob
load 2
itob
concat
app_global_put
checkSize:
load 0
dup
dup
int 1
+
global GroupSize
==
assert
txn GroupIndex
==
assert
int 1000
*
txn Fee
<=
assert
done:
int 1
return
alloc:
txn OnCompletion
int NoOp
==
assert
int 0
store 1
int 0
store 2
b updateState
`,
  appClear: `#pragma version 5
int 0
`,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 48,
  unsupported: [],
  version: 6
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v105",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v106",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v105",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v106",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405161084438038061084483398101604081905261002291610213565b6000805543600355604080518251815260208084015180518284015201518183015290517f80c0078efe412e5091172e0df54decefb16131f320816d23b64aede2bf8e9e4b9181900360600190a1602081015151610083903414600761011b565b6100b0604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b33808252602083810180515182850190815290518201516040808601918252600160008190554390558051808501959095529151848301525160608085019190915281518085039091018152608090930190528151610113926002920190610144565b5050506102a8565b816101405760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546101509061026d565b90600052602060002090601f01602090048101928261017257600085556101b8565b82601f1061018b57805160ff19168380011785556101b8565b828001600101855582156101b8579182015b828111156101b857825182559160200191906001019061019d565b506101c49291506101c8565b5090565b5b808211156101c457600081556001016101c9565b604080519081016001600160401b038111828210171561020d57634e487b7160e01b600052604160045260246000fd5b60405290565b6000818303606081121561022657600080fd5b61022e6101dd565b835181526040601f198301121561024457600080fd5b61024c6101dd565b60208581015182526040909501518582015293810193909352509092915050565b600181811c9082168061028157607f821691505b602082108114156102a257634e487b7160e01b600052602260045260246000fd5b50919050565b61058d806102b76000396000f3fe6080604052600436106100405760003560e01c80631e93b0f1146100495780632c10a1591461006d5780638323075714610080578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b61004761007b366004610407565b6100b8565b34801561008c57600080fd5b5060015461005a565b3480156100a157600080fd5b506100aa6102eb565b60405161006492919061041f565b6100c86001600054146009610388565b6100e2813515806100db57506001548235145b600a610388565b6000808055600280546100f49061047c565b80601f01602080910402602001604051908101604052809291908181526020018280546101209061047c565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b505050505080602001905181019061018591906104b1565b6040805160208101909152600081529091507f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1836040516101c6919061052d565b60405180910390a16101df826020015134146008610388565b604082015115808252156102ae576020820151604051339180156108fc02916000818181858888f1935050505015801561021d573d6000803e3d6000fd5b50805115610271576020820151604051339180156108fc02916000818181858888f19350505050158015610255573d6000803e3d6000fd5b506000808055600181905561026c906002906103b1565b505050565b815160208301516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610255573d6000803e3d6000fd5b815160208301516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561021d573d6000803e3d6000fd5b6000606060005460028080546103009061047c565b80601f016020809104026020016040519081016040528092919081815260200182805461032c9061047c565b80156103795780601f1061034e57610100808354040283529160200191610379565b820191906000526020600020905b81548152906001019060200180831161035c57829003601f168201915b50505050509050915091509091565b816103ad5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b5080546103bd9061047c565b6000825580601f106103cd575050565b601f0160209004906000526020600020908101906103eb91906103ee565b50565b5b8082111561040357600081556001016103ef565b5090565b60006040828403121561041957600080fd5b50919050565b82815260006020604081840152835180604085015260005b8181101561045357858101830151858201606001528201610437565b81811115610465576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061049057607f821691505b6020821081141561041957634e487b7160e01b600052602260045260246000fd5b6000606082840312156104c357600080fd5b6040516060810181811067ffffffffffffffff821117156104f457634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b038116811461050e57600080fd5b8152602083810151908201526040928301519281019290925250919050565b8135815260408101602083013580151580821461054957600080fd5b80602085015250509291505056fea2646970667358221220d159e1e90a2f95fb182a36fff4b0430cc4565eeb5f358451c5532a3f3458da5c64736f6c63430008090033`,
  BytecodeLen: 2116,
  Which: `oD`,
  version: 5,
  views: {
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "GameWallet": GameWallet
  };
export const _APIs = {
  };
