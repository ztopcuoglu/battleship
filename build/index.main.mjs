// Automatically generated with Reach 0.1.2
/* eslint-disable */
export const _version = '0.1.2';


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };

export async function Admin(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10));
  const ctc4 = stdlib.T_Data({
    Admin: ctc2,
    Oyuncu: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc0, ctc0, ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc0, ctc0]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc0, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc0]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc12 = stdlib.T_Tuple([ctc0]);
  
  
  const v19 = await ctc.creationTime();
  const v18 = stdlib.protect(ctc0, interact.ucret, null);
  const txn1 = await (ctc.sendrecv(1, 1, stdlib.checkedBigNumberify('./index.rsh:35:15:dot', stdlib.UInt_max, 0), [ctc0, ctc0], [v19, v18], [v18, []], [ctc0], true, true, false, (async (txn1) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:35:15:dot', stdlib.UInt_max, 0), v19]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:35:15:dot', stdlib.UInt_max, 0)]);
    const [v24] = txn1.data;
    const v27 = txn1.time;
    const v23 = txn1.from;
    
    stdlib.assert(true, {
      at: './index.rsh:35:15:dot',
      fs: [],
      msg: null,
      who: 'Admin'
      });
    const v26 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0), v24);
    sim_r.txns.push({
      amt: v24,
      kind: 'to',
      tok: undefined
      });
    stdlib.assert(true, {
      at: './index.rsh:35:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Admin'
      });
    sim_r.nextSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:36:17:after expr stmt semicolon', stdlib.UInt_max, 1), v23, v24, v26, v27]);
    sim_r.nextSt_noTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:36:17:after expr stmt semicolon', stdlib.UInt_max, 1), v23, v24, v26]);
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v24] = txn1.data;
  const v27 = txn1.time;
  const v23 = txn1.from;
  stdlib.assert(true, {
    at: './index.rsh:35:15:dot',
    fs: [],
    msg: null,
    who: 'Admin'
    });
  const v26 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0), v24);
  ;
  stdlib.assert(true, {
    at: './index.rsh:35:15:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  const txn2 = await (ctc.recv(2, 0, [], false, false));
  const [] = txn2.data;
  const v31 = txn2.time;
  const v28 = txn2.from;
  stdlib.assert(true, {
    at: './index.rsh:37:16:dot',
    fs: [],
    msg: null,
    who: 'Admin'
    });
  const v30 = stdlib.add(v26, v24);
  ;
  stdlib.assert(true, {
    at: './index.rsh:37:16:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  let v32 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
  let v138 = v31;
  let v140 = v30;
  
  while ((() => {
    const v38 = stdlib.eq(v32, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
    
    return v38;})()) {
    const v59 = stdlib.protect(ctc1, await interact.oyunuBitir(), {
      at: './index.rsh:49:57:application',
      fs: ['at ./index.rsh:45:17:application call to [unknown function] (defined at: ./index.rsh:48:21:function exp)', 'at ./index.rsh:45:17:application call to "runAdmin0" (defined at: ./index.rsh:45:17:function exp)', 'at ./index.rsh:45:17:application call to [unknown function] (defined at: ./index.rsh:45:17:function exp)'],
      msg: 'oyunuBitir',
      who: 'Admin'
      });
    const v74 = ['Admin', null];
    const txn3 = await (ctc.sendrecv(5, 1, stdlib.checkedBigNumberify('./index.rsh:45:17:dot', stdlib.UInt_max, 4), [ctc5, ctc0, ctc5, ctc0, ctc0, ctc0, ctc4], [v23, v24, v28, v32, v138, v140, v74], [stdlib.checkedBigNumberify('./index.rsh:46:18:decimal', stdlib.UInt_max, 0), []], [ctc4], v59, false, stdlib.checkedBigNumberify('./index.rsh:83:21:decimal', stdlib.UInt_max, 1024), (async (txn3) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:45:17:dot', stdlib.UInt_max, 3), v23, v24, v28, v32, v138, v140]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:45:17:dot', stdlib.UInt_max, 3), v23, v24, v28, v32, v140]);
      const [v85] = txn3.data;
      const v99 = txn3.time;
      const v84 = txn3.from;
      
      stdlib.assert(true, {
        at: './index.rsh:45:17:dot',
        fs: [],
        msg: null,
        who: 'Admin'
        });
      let v86;
      switch (v85[0]) {
        case 'Admin': {
          
          v86 = stdlib.checkedBigNumberify('./index.rsh:46:18:decimal', stdlib.UInt_max, 0);
          
          break;
          }
        case 'Oyuncu': {
          const v90 = v85[1];
          v86 = v24;
          
          break;
          }
        }
      const v95 = stdlib.add(v140, v86);
      sim_r.txns.push({
        amt: v86,
        kind: 'to',
        tok: undefined
        });
      const v96 = stdlib.addressEq(v23, v84);
      const v97 = stdlib.addressEq(v28, v84);
      const v98 = v96 ? true : v97;
      stdlib.assert(v98, {
        at: './index.rsh:45:17:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Admin'
        });
      let v100;
      switch (v85[0]) {
        case 'Admin': {
          
          const v102 = stdlib.addressEq(v84, v23);
          v100 = v102;
          
          break;
          }
        case 'Oyuncu': {
          const v105 = v85[1];
          const v107 = stdlib.addressEq(v84, v28);
          v100 = v107;
          
          break;
          }
        }
      stdlib.assert(v100, {
        at: './index.rsh:45:17:application',
        fs: [],
        msg: null,
        who: 'Admin'
        });
      switch (v85[0]) {
        case 'Admin': {
          
          const cv32 = v32;
          const cv138 = v99;
          const cv140 = v95;
          
          (() => {
            const v32 = cv32;
            const v138 = cv138;
            const v140 = cv140;
            
            if ((() => {
              const v38 = stdlib.eq(v32, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
              
              return v38;})()) {
              sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:44:21:after expr stmt semicolon', stdlib.UInt_max, 3), v23, v24, v28, v32, v138, v140]);
              sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:44:21:after expr stmt semicolon', stdlib.UInt_max, 3), v23, v24, v28, v32, v140]);
              sim_r.isHalt = false;
              }
            else {
              const v130 = stdlib.eq(v32, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
              const v131 = v130 ? v23 : v28;
              sim_r.txns.push({
                amt: v140,
                kind: 'from',
                to: v131,
                tok: undefined
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.nextSt = stdlib.digest(ctc8, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
              sim_r.isHalt = true;
              }})();
          break;
          }
        case 'Oyuncu': {
          const v111 = v85[1];
          const v119 = v111[stdlib.checkedBigNumberify('./index.rsh:78:50:array ref', stdlib.UInt_max, 0)];
          const v121 = stdlib.gt(v119, stdlib.checkedBigNumberify('./index.rsh:10:36:decimal', stdlib.UInt_max, 50));
          const v122 = v121 ? stdlib.checkedBigNumberify('./index.rsh:10:41:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:10:44:decimal', stdlib.UInt_max, 2);
          const cv32 = v122;
          const cv138 = v99;
          const cv140 = v95;
          
          (() => {
            const v32 = cv32;
            const v138 = cv138;
            const v140 = cv140;
            
            if ((() => {
              const v38 = stdlib.eq(v32, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
              
              return v38;})()) {
              sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:44:21:after expr stmt semicolon', stdlib.UInt_max, 3), v23, v24, v28, v32, v138, v140]);
              sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:44:21:after expr stmt semicolon', stdlib.UInt_max, 3), v23, v24, v28, v32, v140]);
              sim_r.isHalt = false;
              }
            else {
              const v130 = stdlib.eq(v32, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
              const v131 = v130 ? v23 : v28;
              sim_r.txns.push({
                amt: v140,
                kind: 'from',
                to: v131,
                tok: undefined
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.nextSt = stdlib.digest(ctc8, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
              sim_r.isHalt = true;
              }})();
          break;
          }
        }
      return sim_r;
      })));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv(6, 0, stdlib.checkedBigNumberify('./index.rsh:84:31:dot', stdlib.UInt_max, 4), [ctc5, ctc0, ctc5, ctc0, ctc0, ctc0], [v23, v24, v28, v32, v138, v140], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn4) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:84:31:dot', stdlib.UInt_max, 3), v23, v24, v28, v32, v138, v140]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:84:31:dot', stdlib.UInt_max, 3), v23, v24, v28, v32, v140]);
        const [] = txn4.data;
        const v128 = txn4.time;
        const v124 = txn4.from;
        
        stdlib.assert(true, {
          at: './index.rsh:84:31:dot',
          fs: [],
          msg: null,
          who: 'Admin'
          });
        const v126 = stdlib.add(v140, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v127 = stdlib.addressEq(v23, v124);
        stdlib.assert(v127, {
          at: './index.rsh:84:31:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Admin'
          });
        const cv32 = v32;
        const cv138 = v128;
        const cv140 = v126;
        
        (() => {
          const v32 = cv32;
          const v138 = cv138;
          const v140 = cv140;
          
          if ((() => {
            const v38 = stdlib.eq(v32, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
            
            return v38;})()) {
            sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:44:21:after expr stmt semicolon', stdlib.UInt_max, 3), v23, v24, v28, v32, v138, v140]);
            sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:44:21:after expr stmt semicolon', stdlib.UInt_max, 3), v23, v24, v28, v32, v140]);
            sim_r.isHalt = false;
            }
          else {
            const v130 = stdlib.eq(v32, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
            const v131 = v130 ? v23 : v28;
            sim_r.txns.push({
              amt: v140,
              kind: 'from',
              to: v131,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.nextSt = stdlib.digest(ctc8, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
            sim_r.isHalt = true;
            }})();
        return sim_r;
        })));
      const [] = txn4.data;
      const v128 = txn4.time;
      const v124 = txn4.from;
      stdlib.assert(true, {
        at: './index.rsh:84:31:dot',
        fs: [],
        msg: null,
        who: 'Admin'
        });
      const v126 = stdlib.add(v140, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
      ;
      const v127 = stdlib.addressEq(v23, v124);
      stdlib.assert(v127, {
        at: './index.rsh:84:31:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Admin'
        });
      const cv32 = v32;
      const cv138 = v128;
      const cv140 = v126;
      
      v32 = cv32;
      v138 = cv138;
      v140 = cv140;
      
      continue;
      }
    else {
      const [v85] = txn3.data;
      const v99 = txn3.time;
      const v84 = txn3.from;
      stdlib.assert(true, {
        at: './index.rsh:45:17:dot',
        fs: [],
        msg: null,
        who: 'Admin'
        });
      let v86;
      switch (v85[0]) {
        case 'Admin': {
          
          v86 = stdlib.checkedBigNumberify('./index.rsh:46:18:decimal', stdlib.UInt_max, 0);
          
          break;
          }
        case 'Oyuncu': {
          const v90 = v85[1];
          v86 = v24;
          
          break;
          }
        }
      const v95 = stdlib.add(v140, v86);
      ;
      const v96 = stdlib.addressEq(v23, v84);
      const v97 = stdlib.addressEq(v28, v84);
      const v98 = v96 ? true : v97;
      stdlib.assert(v98, {
        at: './index.rsh:45:17:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Admin'
        });
      let v100;
      switch (v85[0]) {
        case 'Admin': {
          
          const v102 = stdlib.addressEq(v84, v23);
          v100 = v102;
          
          break;
          }
        case 'Oyuncu': {
          const v105 = v85[1];
          const v107 = stdlib.addressEq(v84, v28);
          v100 = v107;
          
          break;
          }
        }
      stdlib.assert(v100, {
        at: './index.rsh:45:17:application',
        fs: [],
        msg: null,
        who: 'Admin'
        });
      switch (v85[0]) {
        case 'Admin': {
          
          const cv32 = v32;
          const cv138 = v99;
          const cv140 = v95;
          
          v32 = cv32;
          v138 = cv138;
          v140 = cv140;
          
          continue;
          break;
          }
        case 'Oyuncu': {
          const v111 = v85[1];
          stdlib.protect(ctc2, await interact.transferiGor(), {
            at: './index.rsh:74:50:application',
            fs: ['at ./index.rsh:73:35:application call to [unknown function] (defined at: ./index.rsh:73:38:function exp)'],
            msg: 'transferiGor',
            who: 'Admin'
            });
          
          const v119 = v111[stdlib.checkedBigNumberify('./index.rsh:78:50:array ref', stdlib.UInt_max, 0)];
          const v121 = stdlib.gt(v119, stdlib.checkedBigNumberify('./index.rsh:10:36:decimal', stdlib.UInt_max, 50));
          const v122 = v121 ? stdlib.checkedBigNumberify('./index.rsh:10:41:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:10:44:decimal', stdlib.UInt_max, 2);
          const cv32 = v122;
          const cv138 = v99;
          const cv140 = v95;
          
          v32 = cv32;
          v138 = cv138;
          v140 = cv140;
          
          continue;
          
          break;
          }
        }}
    }
  const v130 = stdlib.eq(v32, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
  const v131 = v130 ? v23 : v28;
  ;
  return;
  
  
  };
export async function Oyuncu(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10));
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    Admin: ctc2,
    Oyuncu: ctc1
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0, ctc0, ctc0]);
  const ctc6 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0, ctc0]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc0, ctc0]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc0]);
  
  
  const v19 = await ctc.creationTime();
  const txn1 = await (ctc.recv(1, 1, [ctc0], false, false));
  const [v24] = txn1.data;
  const v27 = txn1.time;
  const v23 = txn1.from;
  stdlib.assert(true, {
    at: './index.rsh:35:15:dot',
    fs: [],
    msg: null,
    who: 'Oyuncu'
    });
  const v26 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0), v24);
  ;
  stdlib.assert(true, {
    at: './index.rsh:35:15:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Oyuncu'
    });
  const txn2 = await (ctc.sendrecv(2, 0, stdlib.checkedBigNumberify('./index.rsh:37:16:dot', stdlib.UInt_max, 3), [ctc4, ctc0, ctc0, ctc0], [v23, v24, v26, v27], [v24, []], [], true, true, false, (async (txn2) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:37:16:dot', stdlib.UInt_max, 1), v23, v24, v26, v27]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:37:16:dot', stdlib.UInt_max, 1), v23, v24, v26]);
    const [] = txn2.data;
    const v31 = txn2.time;
    const v28 = txn2.from;
    
    stdlib.assert(true, {
      at: './index.rsh:37:16:dot',
      fs: [],
      msg: null,
      who: 'Oyuncu'
      });
    const v30 = stdlib.add(v26, v24);
    sim_r.txns.push({
      amt: v24,
      kind: 'to',
      tok: undefined
      });
    stdlib.assert(true, {
      at: './index.rsh:37:16:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Oyuncu'
      });
    const v32 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
    const v138 = v31;
    const v140 = v30;
    
    if ((() => {
      const v38 = stdlib.eq(v32, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
      
      return v38;})()) {
      sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:44:21:after expr stmt semicolon', stdlib.UInt_max, 3), v23, v24, v28, v32, v138, v140]);
      sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:44:21:after expr stmt semicolon', stdlib.UInt_max, 3), v23, v24, v28, v32, v140]);
      sim_r.isHalt = false;
      }
    else {
      const v130 = stdlib.eq(v32, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      const v131 = v130 ? v23 : v28;
      sim_r.txns.push({
        amt: v140,
        kind: 'from',
        to: v131,
        tok: undefined
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.nextSt = stdlib.digest(ctc7, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc7, []);
      sim_r.isHalt = true;
      }
    return sim_r;
    })));
  const [] = txn2.data;
  const v31 = txn2.time;
  const v28 = txn2.from;
  stdlib.assert(true, {
    at: './index.rsh:37:16:dot',
    fs: [],
    msg: null,
    who: 'Oyuncu'
    });
  const v30 = stdlib.add(v26, v24);
  ;
  stdlib.assert(true, {
    at: './index.rsh:37:16:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Oyuncu'
    });
  let v32 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
  let v138 = v31;
  let v140 = v30;
  
  while ((() => {
    const v38 = stdlib.eq(v32, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
    
    return v38;})()) {
    const v67 = stdlib.protect(ctc1, await interact.hamleYap(), {
      at: './index.rsh:59:67:application',
      fs: ['at ./index.rsh:45:17:application call to [unknown function] (defined at: ./index.rsh:58:25:function exp)', 'at ./index.rsh:45:17:application call to "runOyuncu0" (defined at: ./index.rsh:45:17:function exp)', 'at ./index.rsh:45:17:application call to [unknown function] (defined at: ./index.rsh:45:17:function exp)'],
      msg: 'hamleYap',
      who: 'Oyuncu'
      });
    const v79 = ['Oyuncu', v67];
    const txn3 = await (ctc.sendrecv(5, 1, stdlib.checkedBigNumberify('./index.rsh:45:17:dot', stdlib.UInt_max, 4), [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0, ctc3], [v23, v24, v28, v32, v138, v140, v79], [v24, []], [ctc3], true, false, stdlib.checkedBigNumberify('./index.rsh:83:21:decimal', stdlib.UInt_max, 1024), (async (txn3) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:45:17:dot', stdlib.UInt_max, 3), v23, v24, v28, v32, v138, v140]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:45:17:dot', stdlib.UInt_max, 3), v23, v24, v28, v32, v140]);
      const [v85] = txn3.data;
      const v99 = txn3.time;
      const v84 = txn3.from;
      
      stdlib.assert(true, {
        at: './index.rsh:45:17:dot',
        fs: [],
        msg: null,
        who: 'Oyuncu'
        });
      let v86;
      switch (v85[0]) {
        case 'Admin': {
          
          v86 = stdlib.checkedBigNumberify('./index.rsh:46:18:decimal', stdlib.UInt_max, 0);
          
          break;
          }
        case 'Oyuncu': {
          const v90 = v85[1];
          v86 = v24;
          
          break;
          }
        }
      const v95 = stdlib.add(v140, v86);
      sim_r.txns.push({
        amt: v86,
        kind: 'to',
        tok: undefined
        });
      const v96 = stdlib.addressEq(v23, v84);
      const v97 = stdlib.addressEq(v28, v84);
      const v98 = v96 ? true : v97;
      stdlib.assert(v98, {
        at: './index.rsh:45:17:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Oyuncu'
        });
      let v100;
      switch (v85[0]) {
        case 'Admin': {
          
          const v102 = stdlib.addressEq(v84, v23);
          v100 = v102;
          
          break;
          }
        case 'Oyuncu': {
          const v105 = v85[1];
          const v107 = stdlib.addressEq(v84, v28);
          v100 = v107;
          
          break;
          }
        }
      stdlib.assert(v100, {
        at: './index.rsh:45:17:application',
        fs: [],
        msg: null,
        who: 'Oyuncu'
        });
      switch (v85[0]) {
        case 'Admin': {
          
          const cv32 = v32;
          const cv138 = v99;
          const cv140 = v95;
          
          (() => {
            const v32 = cv32;
            const v138 = cv138;
            const v140 = cv140;
            
            if ((() => {
              const v38 = stdlib.eq(v32, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
              
              return v38;})()) {
              sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:44:21:after expr stmt semicolon', stdlib.UInt_max, 3), v23, v24, v28, v32, v138, v140]);
              sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:44:21:after expr stmt semicolon', stdlib.UInt_max, 3), v23, v24, v28, v32, v140]);
              sim_r.isHalt = false;
              }
            else {
              const v130 = stdlib.eq(v32, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
              const v131 = v130 ? v23 : v28;
              sim_r.txns.push({
                amt: v140,
                kind: 'from',
                to: v131,
                tok: undefined
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.nextSt = stdlib.digest(ctc7, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc7, []);
              sim_r.isHalt = true;
              }})();
          break;
          }
        case 'Oyuncu': {
          const v111 = v85[1];
          const v119 = v111[stdlib.checkedBigNumberify('./index.rsh:78:50:array ref', stdlib.UInt_max, 0)];
          const v121 = stdlib.gt(v119, stdlib.checkedBigNumberify('./index.rsh:10:36:decimal', stdlib.UInt_max, 50));
          const v122 = v121 ? stdlib.checkedBigNumberify('./index.rsh:10:41:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:10:44:decimal', stdlib.UInt_max, 2);
          const cv32 = v122;
          const cv138 = v99;
          const cv140 = v95;
          
          (() => {
            const v32 = cv32;
            const v138 = cv138;
            const v140 = cv140;
            
            if ((() => {
              const v38 = stdlib.eq(v32, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
              
              return v38;})()) {
              sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:44:21:after expr stmt semicolon', stdlib.UInt_max, 3), v23, v24, v28, v32, v138, v140]);
              sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:44:21:after expr stmt semicolon', stdlib.UInt_max, 3), v23, v24, v28, v32, v140]);
              sim_r.isHalt = false;
              }
            else {
              const v130 = stdlib.eq(v32, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
              const v131 = v130 ? v23 : v28;
              sim_r.txns.push({
                amt: v140,
                kind: 'from',
                to: v131,
                tok: undefined
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.nextSt = stdlib.digest(ctc7, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc7, []);
              sim_r.isHalt = true;
              }})();
          break;
          }
        }
      return sim_r;
      })));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv(6, 0, [], false, false));
      const [] = txn4.data;
      const v128 = txn4.time;
      const v124 = txn4.from;
      stdlib.assert(true, {
        at: './index.rsh:84:31:dot',
        fs: [],
        msg: null,
        who: 'Oyuncu'
        });
      const v126 = stdlib.add(v140, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
      ;
      const v127 = stdlib.addressEq(v23, v124);
      stdlib.assert(v127, {
        at: './index.rsh:84:31:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Oyuncu'
        });
      const cv32 = v32;
      const cv138 = v128;
      const cv140 = v126;
      
      v32 = cv32;
      v138 = cv138;
      v140 = cv140;
      
      continue;
      }
    else {
      const [v85] = txn3.data;
      const v99 = txn3.time;
      const v84 = txn3.from;
      stdlib.assert(true, {
        at: './index.rsh:45:17:dot',
        fs: [],
        msg: null,
        who: 'Oyuncu'
        });
      let v86;
      switch (v85[0]) {
        case 'Admin': {
          
          v86 = stdlib.checkedBigNumberify('./index.rsh:46:18:decimal', stdlib.UInt_max, 0);
          
          break;
          }
        case 'Oyuncu': {
          const v90 = v85[1];
          v86 = v24;
          
          break;
          }
        }
      const v95 = stdlib.add(v140, v86);
      ;
      const v96 = stdlib.addressEq(v23, v84);
      const v97 = stdlib.addressEq(v28, v84);
      const v98 = v96 ? true : v97;
      stdlib.assert(v98, {
        at: './index.rsh:45:17:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Oyuncu'
        });
      let v100;
      switch (v85[0]) {
        case 'Admin': {
          
          const v102 = stdlib.addressEq(v84, v23);
          v100 = v102;
          
          break;
          }
        case 'Oyuncu': {
          const v105 = v85[1];
          const v107 = stdlib.addressEq(v84, v28);
          v100 = v107;
          
          break;
          }
        }
      stdlib.assert(v100, {
        at: './index.rsh:45:17:application',
        fs: [],
        msg: null,
        who: 'Oyuncu'
        });
      switch (v85[0]) {
        case 'Admin': {
          
          const cv32 = v32;
          const cv138 = v99;
          const cv140 = v95;
          
          v32 = cv32;
          v138 = cv138;
          v140 = cv140;
          
          continue;
          break;
          }
        case 'Oyuncu': {
          const v111 = v85[1];
          stdlib.protect(ctc2, await interact.hamleyiGor(v111), {
            at: './index.rsh:70:48:application',
            fs: ['at ./index.rsh:69:36:application call to [unknown function] (defined at: ./index.rsh:69:40:function exp)'],
            msg: 'hamleyiGor',
            who: 'Oyuncu'
            });
          
          const v119 = v111[stdlib.checkedBigNumberify('./index.rsh:78:50:array ref', stdlib.UInt_max, 0)];
          const v121 = stdlib.gt(v119, stdlib.checkedBigNumberify('./index.rsh:10:36:decimal', stdlib.UInt_max, 50));
          const v122 = v121 ? stdlib.checkedBigNumberify('./index.rsh:10:41:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:10:44:decimal', stdlib.UInt_max, 2);
          const cv32 = v122;
          const cv138 = v99;
          const cv140 = v95;
          
          v32 = cv32;
          v138 = cv138;
          v140 = cv140;
          
          continue;
          
          break;
          }
        }}
    }
  const v130 = stdlib.eq(v32, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
  const v131 = v130 ? v23 : v28;
  ;
  return;
  
  
  };

const _ALGO = {
  appApproval: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
// Check that everyone's here
global GroupSize
int 3
>=
assert
// Check txnAppl (us)
txn GroupIndex
int 0
==
assert
// Check txnFromHandler
int 0
gtxn 2 Sender
byte "{{m1}}"
==
||
gtxn 2 Sender
byte "{{m2}}"
==
||
gtxn 2 Sender
byte "{{m5}}"
==
||
gtxn 2 Sender
byte "{{m6}}"
==
||
assert
byte base64(cw==)
app_global_get
gtxna 0 ApplicationArgs 0
==
assert
byte base64(bA==)
app_global_get
gtxna 0 ApplicationArgs 4
btoi
==
assert
// Don't check anyone else, because Handler does
// Update state
byte base64(cw==)
gtxna 0 ApplicationArgs 1
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(aA==)
gtxna 0 ApplicationArgs 2
btoi
app_global_put
byte base64(aA==)
app_global_get
bnz halted
txn OnCompletion
int NoOp
==
assert
b done
halted:
txn OnCompletion
int DeleteApplication
==
assert
done:
int 1
return
`,
  appApproval0: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
txn Sender
byte "{{Deployer}}"
==
assert
txn ApplicationID
bz init
global GroupSize
int 2
==
assert
txn OnCompletion
int UpdateApplication
==
assert
byte base64(cw==)
// compute state in HM_Set 0
int 0
itob
keccak256
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(aA==)
int 0
app_global_put
b done
init:
global GroupSize
int 1
==
assert
txn OnCompletion
int NoOp
==
assert
done:
int 1
return
`,
  appClear: `#pragma version 3
// We're alone
global GroupSize
int 1
==
assert
// We're halted
byte base64(aA==)
app_global_get
int 1
==
assert
done:
int 1
return
`,
  ctc: `#pragma version 3
// Check size
global GroupSize
int 3
>=
assert
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
// Don't check anything else, because app does
// Check us
txn TypeEnum
int pay
==
int axfer
dup2
==
||
assert
txn RekeyTo
global ZeroAddress
==
assert
txn GroupIndex
int 3
>=
assert
done:
int 1
return
`,
  stepargs: [0, 89, 129, 0, 0, 250, 169],
  steps: [null, `#pragma version 3
// Handler 1
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 6
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 0
int 0
itob
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Nothing
// "./index.rsh:35:15:dot"
// "[]"
int 1
assert
int 0
gtxna 0 ApplicationArgs 5
btoi
+
store 255
// CheckPay
// "./index.rsh:35:15:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
gtxna 0 ApplicationArgs 5
btoi
==
assert
// Just "sender correct"
// "./index.rsh:35:15:dot"
// "[]"
int 1
assert
// compute state in HM_Set 1
int 1
itob
gtxn 0 Sender
concat
gtxna 0 ApplicationArgs 5
concat
load 255
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 3
// Handler 2
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 8
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 1
int 1
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Nothing
// "./index.rsh:37:16:dot"
// "[]"
int 1
assert
gtxna 0 ApplicationArgs 7
btoi
gtxna 0 ApplicationArgs 6
btoi
+
store 255
// CheckPay
// "./index.rsh:37:16:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
gtxna 0 ApplicationArgs 6
btoi
==
assert
// Just "sender correct"
// "./index.rsh:37:16:dot"
// "[]"
int 1
assert
int 0
int 0
==
bz l0
// compute state in HM_Set 3
int 3
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxn 0 Sender
concat
int 0
itob
concat
load 255
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
l0:
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxn 0 Sender
gtxna 0 ApplicationArgs 5
int 0
int 1
==
select
==
assert
gtxn 4 Amount
load 255
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
done:
int 1
return
`, null, null, `#pragma version 3
// Handler 5
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 11
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 3
int 3
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 9
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Nothing
// "./index.rsh:45:17:dot"
// "[]"
int 1
assert
gtxna 0 ApplicationArgs 10
int 0
getbyte
int 0
==
bz l1
int 0
store 253
l1:
gtxna 0 ApplicationArgs 10
int 0
getbyte
int 1
==
bz l2
gtxna 0 ApplicationArgs 10
substring 1 81
store 252
gtxna 0 ApplicationArgs 6
btoi
store 253
l2:
l0:
gtxna 0 ApplicationArgs 9
btoi
load 253
+
store 252
// CheckPay
// "./index.rsh:45:17:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
load 253
==
assert
// Just "sender correct"
// "./index.rsh:45:17:dot"
// "[]"
gtxna 0 ApplicationArgs 5
gtxn 0 Sender
==
gtxna 0 ApplicationArgs 7
gtxn 0 Sender
==
||
assert
gtxna 0 ApplicationArgs 10
int 0
getbyte
int 0
==
bz l4
gtxn 0 Sender
gtxna 0 ApplicationArgs 5
==
store 251
l4:
gtxna 0 ApplicationArgs 10
int 0
getbyte
int 1
==
bz l5
gtxna 0 ApplicationArgs 10
substring 1 81
store 250
gtxn 0 Sender
gtxna 0 ApplicationArgs 7
==
store 251
l5:
l3:
// Nothing
// "./index.rsh:45:17:application"
// "[]"
load 251
assert
gtxna 0 ApplicationArgs 10
int 0
getbyte
int 0
==
bz l7
gtxna 0 ApplicationArgs 8
btoi
int 0
==
bz l8
// compute state in HM_Set 3
int 3
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
load 252
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 1024
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
pop
l8:
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 7
gtxna 0 ApplicationArgs 5
gtxna 0 ApplicationArgs 8
btoi
int 1
==
select
==
assert
gtxn 4 Amount
load 252
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 1024
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
dup
gtxn 4 LastValid
==
assert
dup
gtxn 5 LastValid
==
assert
pop
l7:
gtxna 0 ApplicationArgs 10
int 0
getbyte
int 1
==
bz l9
gtxna 0 ApplicationArgs 10
substring 1 81
store 250
int 2
int 1
load 250
substring 0 8
btoi
int 50
>
select
dup
store 249
int 0
==
dup
store 248
bz l10
// compute state in HM_Set 3
int 3
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
load 249
itob
concat
load 252
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 1024
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
pop
l10:
load 249
int 1
==
store 247
gtxna 0 ApplicationArgs 7
gtxna 0 ApplicationArgs 5
load 247
select
store 246
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 246
==
assert
gtxn 4 Amount
load 252
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
gtxn 4 Fee
+
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 1024
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
dup
gtxn 4 LastValid
==
assert
dup
gtxn 5 LastValid
==
assert
pop
l9:
l6:
done:
int 1
return
`, `#pragma version 3
// Handler 6
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 10
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 3
int 3
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 9
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Nothing
// "./index.rsh:84:31:dot"
// "[]"
int 1
assert
gtxna 0 ApplicationArgs 9
btoi
int 0
+
store 255
// CheckPay
// "./index.rsh:84:31:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:84:31:dot"
// "[]"
gtxna 0 ApplicationArgs 5
gtxn 0 Sender
==
assert
gtxna 0 ApplicationArgs 8
btoi
int 0
==
bz l0
// compute state in HM_Set 3
int 3
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
load 255
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 1024
+
dup
gtxn 0 FirstValid
==
assert
dup
gtxn 1 FirstValid
==
assert
dup
gtxn 2 FirstValid
==
assert
dup
gtxn 3 FirstValid
==
assert
pop
l0:
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 7
gtxna 0 ApplicationArgs 5
gtxna 0 ApplicationArgs 8
btoi
int 1
==
select
==
assert
gtxn 4 Amount
load 255
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 1024
+
dup
gtxn 0 FirstValid
==
assert
dup
gtxn 1 FirstValid
==
assert
dup
gtxn 2 FirstValid
==
assert
dup
gtxn 3 FirstValid
==
assert
dup
gtxn 4 FirstValid
==
assert
dup
gtxn 5 FirstValid
==
assert
pop
done:
int 1
return
`],
  unsupported: false
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v19",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v24",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v23",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v24",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v23",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v24",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v28",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v32",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v138",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v140",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T13",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Admin",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256[10]",
                    "name": "_Oyuncu",
                    "type": "uint256[10]"
                  }
                ],
                "internalType": "struct T13",
                "name": "v85",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v23",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v24",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v28",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v32",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v138",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v140",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e6",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v19",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v24",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v23",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v24",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v23",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v24",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v28",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v32",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v138",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v140",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T13",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Admin",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256[10]",
                    "name": "_Oyuncu",
                    "type": "uint256[10]"
                  }
                ],
                "internalType": "struct T13",
                "name": "v85",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v23",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v24",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v28",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v32",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v138",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v140",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a16040805160208082018352438252825180820184526000808252925181528351808301849052905181850152835180820385018152606090910190935282519201919091209055610db1806100826000396000f3fe6080604052600436106100435760003560e01c80631980558b1461004f5780639532ef0114610064578063dd98fc3314610077578063e4f83a8f1461008a5761004a565b3661004a57005b600080fd5b61006261005d366004610b89565b61009d565b005b610062610072366004610bb2565b610515565b610062610085366004610ba1565b61066b565b610062610098366004610bc3565b6107b8565b6040516100b1906003908390602001610d43565b6040516020818303038152906040528051906020012060001c600054146100d757600080fd5b600080556100e3610a70565b6100f36104006080840135610d57565b43106100fe57600080fd5b600061011060e0840160c08501610b6f565b600181111561012f57634e487b7160e01b600052602160045260246000fd5b141561013e57600081526101ae565b600161015060e0840160c08501610b6f565b600181111561016f57634e487b7160e01b600052602160045260246000fd5b14156101ae576040805161014081810190925290610100840190600a908390839080828437600092019190915250505060208083019190915282013581525b80516101be9060a0840135610d57565b6040820152805134146101d057600080fd5b336101de6020840184610b4e565b6001600160a01b03161461020c57336101fd6060840160408501610b4e565b6001600160a01b03161461020f565b60015b61021857600080fd5b600061022a60e0840160c08501610b6f565b600181111561024957634e487b7160e01b600052602160045260246000fd5b14156102715761025c6020830183610b4e565b6001600160a01b0316331460608201526102e7565b600161028360e0840160c08501610b6f565b60018111156102a257634e487b7160e01b600052602160045260246000fd5b14156102e7576040805161014081810190925290610100840190600a9083908390808284376000920191909152505050608082015261025c6060830160408401610b4e565b80606001516102f557600080fd5b600061030760e0840160c08501610b6f565b600181111561032657634e487b7160e01b600052602160045260246000fd5b14156103e5577fbc039aad9772461527d44414524411eb4e0567c05bddd4576f4a225c8b2e9f268260405161035b9190610c5f565b60405180910390a161036b610ab7565b6103786020840184610b4e565b81516001600160a01b03909116905280516020808501359101526103a26060840160408501610b4e565b81516001600160a01b039091166040918201526020808301805160608701359052805143920191909152838201519051909101526103df81610896565b50610511565b60016103f760e0840160c08501610b6f565b600181111561041657634e487b7160e01b600052602160045260246000fd5b1415610511576040805161014081810190925290610100840190600a908390839080828437600092019190915250505060a08201526040517fbc039aad9772461527d44414524411eb4e0567c05bddd4576f4a225c8b2e9f269061047b908490610c5f565b60405180910390a161048b610ab7565b6104986020840184610b4e565b81516001600160a01b03909116905280516020808501359101526104c26060840160408501610b4e565b81516001600160a01b039190911660409091015260a0820151516032106104ea5760026104ed565b60015b6020808301805192909252815143910152604080840151915101526103df81610896565b5050565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c6000541461055257600080fd5b6000808055604080516020810190915290815261057460208301356000610d57565b81523460208301351461058657600080fd5b6040805183358152602080850135908201527ff2c62eba998811305a23599b2e6d212befbd7ded3a73f4c08bfb9aefe08dc166910160405180910390a16105f7604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b33815260208381013581830190815283516040808501918252436060808701918252825160019681019690965286516001600160a01b0316928601929092529251908401525160808301525160a082015260c00160408051601f198184030181529190528051602090910120600055505050565b60405161067f906003908390602001610d43565b6040516020818303038152906040528051906020012060001c600054146106a557600080fd5b600080556106b96104006080830135610d57565b43101580156106c6575060015b6106cf57600080fd5b34156106da57600080fd5b336106e86020830183610b4e565b6001600160a01b0316146106fb57600080fd5b7f37482df346135d6596cf056e7a0cfc002d720fcac97e117c47ba659dd5e351ca8160405161072a9190610ccf565b60405180910390a161073a610ab7565b6107476020830183610b4e565b81516001600160a01b03909116905280516020808401359101526107716060830160408401610b4e565b81516001600160a01b03909116604090910152602080820180516060850135905251439101526107a6600060a0840135610d57565b60208201516040015261051181610896565b6040516107cc906001908390602001610d2f565b6040516020818303038152906040528051906020012060001c600054146107f257600080fd5b600080553460208201351461080657600080fd5b7fe2fcb5361608dd42d825c4e917fd4fca89057bb8eb0b7e34b8c2813a114cc152816040516108359190610cff565b60405180910390a1610845610ab7565b6108526020830183610b4e565b81516001600160a01b039091169052805160208084013591810182905282513360409182015281840180516000905251439201919091526107a69190840135610d57565b6020810151516109a2576108eb6040518060c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b8151516001600160a01b039081168252825160209081015181840190815284516040908101518416818601908152838701805151606080890191825282518701516080808b01918252935186015160a0808c01918252875160039a81019a909a528b518b16978a0197909752965191880191909152925190961690850152935190830152915160c0820152905160e08201526101000160408051601f19818403018152919052805160209091012060005550610a0c565b6040805160c0810182526000818301818152606083018281526080840183815260a085018481528386526020808701959095528751516001600160a01b03908116909452875187015190931690915291850180515190925290519092015190915261051181610a0f565b50565b805160400151600114610a2757805160200151610a2b565b8051515b8151606001516040516001600160a01b03929092169181156108fc0291906000818181858888f19350505050158015610a68573d6000803e3d6000fd5b506000805533ff5b6040518060c0016040528060008152602001610a8a610b04565b81526000602082018190526040820152606001610aa5610b04565b8152602001610ab2610b04565b905290565b6040805160a08101825260009181018281526060820183905260808201929092529081908152602001610ab260405180606001604052806000815260200160008152602001600081525090565b604051806101400160405280600a906020820280368337509192915050565b80356001600160a01b0381168114610b3a57600080fd5b919050565b803560028110610b3a57600080fd5b600060208284031215610b5f578081fd5b610b6882610b23565b9392505050565b600060208284031215610b80578081fd5b610b6882610b3f565b60006102408284031215610b9b578081fd5b50919050565b600060e08284031215610b9b578081fd5b600060408284031215610b9b578081fd5b600060a08284031215610b9b578081fd5b6001600160a01b03610be582610b23565b1682526020810135602083015260408101356040830152606081013560608301525050565b6001600160a01b0380610c1c83610b23565b1683526020820135602084015280610c3660408401610b23565b16604084015250606081013560608301526080810135608083015260a081013560a08301525050565b6102408101610c6e8284610c0a565b610c7a60c08401610b3f565b60028110610c9857634e487b7160e01b600052602160045260246000fd5b60c083015260e0830135801515808214610cb157600080fd5b60e08401525061010061014084820182850137506000815292915050565b60e08101610cdd8284610c0a565b60c0830135801515808214610cf157600080fd5b8060c0850152505092915050565b60a08101610d0d8284610bd4565b6080830135801515808214610d2157600080fd5b806080850152505092915050565b82815260a08101610b686020830184610bd4565b82815260e08101610b686020830184610c0a565b60008219821115610d7657634e487b7160e01b81526011600452602481fd5b50019056fea2646970667358221220a24df91df1a809ed588702a55a72b74edb4a2723cd135fa242e4db5a275fd7e764736f6c63430008020033`,
  deployMode: `DM_constructor`
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

