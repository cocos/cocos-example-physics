let RecyclePool = require('./recyclePool');
let stageInfos = new RecyclePool(
    () => {return {stage: null, items: null}},
     8);

console.log(stageInfos);
console.log('\n' + stageInfos.length);
console.log('\n' + stageInfos.data);

let add = stageInfos.add();
console.log(stageInfos);
console.log(stageInfos.length);
console.log(stageInfos.data);
console.log(add);
