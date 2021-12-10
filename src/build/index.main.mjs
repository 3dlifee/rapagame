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
      1: [ctc0, ctc1, ctc1, ctc1]
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
  const ctc2 = stdlib.T_Address;
  
  
  const v128 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v129 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v132 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:58:50:application',
    fs: ['at ./index.rsh:54:16:application call to [unknown function] (defined at: ./index.rsh:54:20:function exp)'],
    msg: 'getHand',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v129, v132, v128],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:63:9:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0],
    pay: [v129, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v134, v135, v136], secs: v138, time: v137, didSend: v33, from: v133 } = txn1;
      
      sim_r.txns.push({
        amt: v134,
        kind: 'to',
        tok: undefined
        });
      const v142 = stdlib.add(v137, v136);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v134, v135, v136], secs: v138, time: v137, didSend: v33, from: v133 } = txn1;
  ;
  const v142 = stdlib.add(v137, v136);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v142],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v133, v134, v135, v142],
      evt_cnt: 0,
      funcNum: 2,
      lct: v137,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [], secs: v447, time: v446, didSend: v109, from: v445 } = txn3;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v449 = stdlib.addressEq(v133, v445);
        stdlib.assert(v449, {
          at: 'reach standard library:206:7:dot',
          fs: ['at ./index.rsh:76:48:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        sim_r.txns.push({
          amt: v134,
          kind: 'from',
          to: v133,
          tok: undefined
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined,
      tys: [ctc2, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v447, time: v446, didSend: v109, from: v445 } = txn3;
    ;
    const v449 = stdlib.addressEq(v133, v445);
    stdlib.assert(v449, {
      at: 'reach standard library:206:7:dot',
      fs: ['at ./index.rsh:76:48:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
      msg: 'sender correct',
      who: 'Alice'
      });
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:50:39:application',
      fs: ['at ./index.rsh:49:19:application call to [unknown function] (defined at: ./index.rsh:49:44:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:48:38:function exp)', 'at ./index.rsh:76:48:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v148, time: v147, didSend: v42, from: v146 } = txn2;
    ;
    const v151 = stdlib.eq(v135, stdlib.checkedBigNumberify('./index.rsh:83:17:decimal', stdlib.UInt_max, 0));
    if (v151) {
      ;
      if (v151) {
        ;
        stdlib.protect(ctc1, await interact.seeOutcome(v135), {
          at: './index.rsh:113:20:application',
          fs: ['at ./index.rsh:112:9:application call to [unknown function] (defined at: ./index.rsh:112:36:function exp)'],
          msg: 'seeOutcome',
          who: 'Alice'
          });
        
        return;
        }
      else {
        ;
        stdlib.protect(ctc1, await interact.seeOutcome(v135), {
          at: './index.rsh:113:20:application',
          fs: ['at ./index.rsh:112:9:application call to [unknown function] (defined at: ./index.rsh:112:36:function exp)'],
          msg: 'seeOutcome',
          who: 'Alice'
          });
        
        return;
        }}
    else {
      ;
      if (v151) {
        ;
        stdlib.protect(ctc1, await interact.seeOutcome(v135), {
          at: './index.rsh:113:20:application',
          fs: ['at ./index.rsh:112:9:application call to [unknown function] (defined at: ./index.rsh:112:36:function exp)'],
          msg: 'seeOutcome',
          who: 'Alice'
          });
        
        return;
        }
      else {
        ;
        stdlib.protect(ctc1, await interact.seeOutcome(v135), {
          at: './index.rsh:113:20:application',
          fs: ['at ./index.rsh:112:9:application call to [unknown function] (defined at: ./index.rsh:112:36:function exp)'],
          msg: 'seeOutcome',
          who: 'Alice'
          });
        
        return;
        }}}
  
  
  
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
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v134, v135, v136], secs: v138, time: v137, didSend: v33, from: v133 } = txn1;
  ;
  const v142 = stdlib.add(v137, v136);
  stdlib.protect(ctc1, await interact.acceptWager(v134), {
    at: './index.rsh:71:23:application',
    fs: ['at ./index.rsh:69:19:application call to [unknown function] (defined at: ./index.rsh:69:23:function exp)'],
    msg: 'acceptWager',
    who: 'GameWallet'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v133, v134, v135, v142],
    evt_cnt: 0,
    funcNum: 1,
    lct: v137,
    onlyIf: true,
    out_tys: [],
    pay: [v134, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [], secs: v148, time: v147, didSend: v42, from: v146 } = txn2;
      
      sim_r.txns.push({
        amt: v134,
        kind: 'to',
        tok: undefined
        });
      const v151 = stdlib.eq(v135, stdlib.checkedBigNumberify('./index.rsh:83:17:decimal', stdlib.UInt_max, 0));
      if (v151) {
        sim_r.txns.push({
          amt: v134,
          kind: 'from',
          to: v146,
          tok: undefined
          });
        if (v151) {
          sim_r.txns.push({
            amt: v134,
            kind: 'from',
            to: v146,
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
            amt: v134,
            kind: 'from',
            to: v133,
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
          amt: v134,
          kind: 'from',
          to: v133,
          tok: undefined
          });
        if (v151) {
          sim_r.txns.push({
            amt: v134,
            kind: 'from',
            to: v146,
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
            amt: v134,
            kind: 'from',
            to: v133,
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
    timeoutAt: ['time', v142],
    tys: [ctc2, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 2,
      out_tys: [],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v447, time: v446, didSend: v109, from: v445 } = txn3;
    ;
    const v449 = stdlib.addressEq(v133, v445);
    stdlib.assert(v449, {
      at: 'reach standard library:206:7:dot',
      fs: ['at ./index.rsh:76:48:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
      msg: 'sender correct',
      who: 'GameWallet'
      });
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:50:39:application',
      fs: ['at ./index.rsh:49:19:application call to [unknown function] (defined at: ./index.rsh:49:44:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:48:38:function exp)', 'at ./index.rsh:76:48:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
      msg: 'informTimeout',
      who: 'GameWallet'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v148, time: v147, didSend: v42, from: v146 } = txn2;
    ;
    const v151 = stdlib.eq(v135, stdlib.checkedBigNumberify('./index.rsh:83:17:decimal', stdlib.UInt_max, 0));
    if (v151) {
      ;
      if (v151) {
        ;
        stdlib.protect(ctc1, await interact.seeOutcome(v135), {
          at: './index.rsh:113:20:application',
          fs: ['at ./index.rsh:112:9:application call to [unknown function] (defined at: ./index.rsh:112:36:function exp)'],
          msg: 'seeOutcome',
          who: 'GameWallet'
          });
        
        return;
        }
      else {
        ;
        stdlib.protect(ctc1, await interact.seeOutcome(v135), {
          at: './index.rsh:113:20:application',
          fs: ['at ./index.rsh:112:9:application call to [unknown function] (defined at: ./index.rsh:112:36:function exp)'],
          msg: 'seeOutcome',
          who: 'GameWallet'
          });
        
        return;
        }}
    else {
      ;
      if (v151) {
        ;
        stdlib.protect(ctc1, await interact.seeOutcome(v135), {
          at: './index.rsh:113:20:application',
          fs: ['at ./index.rsh:112:9:application call to [unknown function] (defined at: ./index.rsh:112:36:function exp)'],
          msg: 'seeOutcome',
          who: 'GameWallet'
          });
        
        return;
        }
      else {
        ;
        stdlib.protect(ctc1, await interact.seeOutcome(v135), {
          at: './index.rsh:113:20:application',
          fs: ['at ./index.rsh:112:9:application call to [unknown function] (defined at: ./index.rsh:112:36:function exp)'],
          msg: 'seeOutcome',
          who: 'GameWallet'
          });
        
        return;
        }}}
  
  
  
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
int 24
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
dup
int 16
extract_uint64
store 253
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
global Round
load 253
+
store 252
txn Sender
load 255
itob
concat
load 254
itob
concat
load 252
itob
concat
int 1
bzero
dig 1
extract 0 56
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
dup
int 48
extract_uint64
store 252
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 252
<
assert
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
store 251
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
load 251
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
load 251
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
// Handler 2
dup
int 2
==
bz l18_afterHandler2
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
dup
int 48
extract_uint64
store 252
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 252
>=
assert
// "CheckPay"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:76:48:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
// Just "sender correct"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:76:48:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
load 255
txn Sender
==
assert
load 254
dup
bz l19_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 255
itxn_field Receiver
itxn_submit
int 0
l19_makeTxnK:
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
l20_makeTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l18_afterHandler2:
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
  stateSize: 56,
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
                "name": "v134",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v135",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v136",
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
                "name": "v134",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v135",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v136",
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
    "name": "_reach_e2",
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
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051610a92380380610a9283398101604081905261002291610237565b6000808055436003556040805160208101909152908152604080518351815260208085015180518284015290810151828401529091015160608201527f756807fe21484d54421b0dab51b98946711df868f9dc26ba5d9f68d9584b653d9060800160405180910390a160208201515161009e903414600761013f565b6020820151604001516100b190436102c9565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a0909101909352805191926101369260029290910190610168565b5050505061032a565b816101645760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054610174906102ef565b90600052602060002090601f01602090048101928261019657600085556101dc565b82601f106101af57805160ff19168380011785556101dc565b828001600101855582156101dc579182015b828111156101dc5782518255916020019190600101906101c1565b506101e89291506101ec565b5090565b5b808211156101e857600081556001016101ed565b604051606081016001600160401b038111828210171561023157634e487b7160e01b600052604160045260246000fd5b60405290565b6000818303608081121561024a57600080fd5b604080519081016001600160401b038111828210171561027a57634e487b7160e01b600052604160045260246000fd5b604052835181526060601f198301121561029357600080fd5b61029b610201565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600082198211156102ea57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c9082168061030357607f821691505b6020821081141561032457634e487b7160e01b600052602260045260246000fd5b50919050565b610759806103396000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f1146100545780632c10a159146100785780637eea518c1461008b578063832307571461009e578063ab53f2c6146100b357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b6100526100863660046105c6565b6100d6565b6100526100993660046105c6565b61031a565b3480156100aa57600080fd5b50600154610065565b3480156100bf57600080fd5b506100c86104ae565b60405161006f9291906105de565b6100e6600160005414600961054b565b610100813515806100f957506001548235145b600a61054b565b6000808055600280546101129061063b565b80601f016020809104026020016040519081016040528092919081815260200182805461013e9061063b565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b50505050508060200190518101906101a39190610670565b6040805160208101909152600081529091506101c682606001514310600b61054b565b7f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1836040516101f591906106f9565b60405180910390a161020e82602001513414600861054b565b604082015115808252156102dd576020820151604051339180156108fc02916000818181858888f1935050505015801561024c573d6000803e3d6000fd5b508051156102a0576020820151604051339180156108fc02916000818181858888f19350505050158015610284573d6000803e3d6000fd5b506000808055600181905561029b90600290610570565b505050565b815160208301516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610284573d6000803e3d6000fd5b815160208301516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561024c573d6000803e3d6000fd5b61032a600160005414600e61054b565b6103448135158061033d57506001548235145b600f61054b565b6000808055600280546103569061063b565b80601f01602080910402602001604051908101604052809291908181526020018280546103829061063b565b80156103cf5780601f106103a4576101008083540402835291602001916103cf565b820191906000526020600020905b8154815290600101906020018083116103b257829003601f168201915b50505050508060200190518101906103e79190610670565b90506103fb8160600151431015601061054b565b7f82e152e8b1d7e41adffbddbd5b2fe2e130356df9b7ab7d06526a80d7888af3e18260405161042a91906106f9565b60405180910390a161043e3415600c61054b565b8051610456906001600160a01b03163314600d61054b565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610493573d6000803e3d6000fd5b50600080805560018190556104aa90600290610570565b5050565b6000606060005460028080546104c39061063b565b80601f01602080910402602001604051908101604052809291908181526020018280546104ef9061063b565b801561053c5780601f106105115761010080835404028352916020019161053c565b820191906000526020600020905b81548152906001019060200180831161051f57829003601f168201915b50505050509050915091509091565b816104aa5760405163100960cb60e01b81526004810182905260240160405180910390fd5b50805461057c9061063b565b6000825580601f1061058c575050565b601f0160209004906000526020600020908101906105aa91906105ad565b50565b5b808211156105c257600081556001016105ae565b5090565b6000604082840312156105d857600080fd5b50919050565b82815260006020604081840152835180604085015260005b81811015610612578581018301518582016060015282016105f6565b81811115610624576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061064f57607f821691505b602082108114156105d857634e487b7160e01b600052602260045260246000fd5b60006080828403121561068257600080fd5b6040516080810181811067ffffffffffffffff821117156106b357634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b03811681146106cd57600080fd5b808252506020830151602082015260408301516040820152606083015160608201528091505092915050565b8135815260408101602083013580151580821461071557600080fd5b80602085015250509291505056fea264697066735822122049007070a0ffe82452fa1839cd8b9f6b3a843080ffa2faba93946067a39e8c2464736f6c63430008090033`,
  BytecodeLen: 2706,
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
