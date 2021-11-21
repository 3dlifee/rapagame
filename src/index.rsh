 'reach 0.1';



 const Player = {
  getHand: Fun([], UInt),
  seeOutcome: Fun([UInt], Null),
  
};


    export const main = Reach.App(() => {

      const Alice = Participant('Alice', {
        ...Player,
        
        // Specify Alice's interact interface here
        wager: UInt,
        });

        //alice play game and collect the wager or pays the wager

       const GameWallet = Participant('GameWallet', {
        ...Player,
        // Specify Alice's interact interface here

        //gametable  collect the wager or pays the wager
        
        acceptWager: Fun([UInt], Null),
    }); 
    
            deploy();
     
            
     Alice.only(() => {

    const wager = declassify(interact.wager);

    const handAlice = declassify(interact.getHand());
    
  });
  
  Alice.publish(wager,handAlice)
  .pay(wager);

  commit();
    
 
   GameWallet.only(() => {

  interact.acceptWager(wager);

 });

 GameWallet.pay(wager);

 
 const outcome = handAlice;


if (outcome === 0) {
  transfer(wager).to(GameWallet); 
} else if (outcome === 1) {
  transfer(wager).to(Alice); 
}else if (outcome === 2) {
  transfer(wager).to(Alice); 
}else if (outcome === 3) {
  transfer(wager).to(Alice); 
}else {
  transfer(wager).to(Alice); 
}



if (outcome === 0) {
  transfer(wager).to(GameWallet); 
} else if (outcome === 1) {
  transfer(wager).to(Alice); 
}else if (outcome === 2) {
  transfer(wager).to(Alice); 
}else if (outcome === 3) {
  transfer(wager).to(Alice); 
}else {
  transfer(wager).to(Alice); 
}
 

commit();

    each([Alice, GameWallet, ], () => {
interact.seeOutcome(outcome);

});  
 }); 
