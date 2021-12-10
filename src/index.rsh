 'reach 0.1';

 const [ isHand, Poem, Tira, Rapa, Deixa ] = makeEnum(4);
 const [ isOutcome, Alice_poem, Alice_tira, Alice_rapa, Alice_deixa ] = makeEnum(4);
 

 const winner = (handAlice) =>
   handAlice;
 
   
 
 assert(winner(Poem) == Alice_poem);
 assert(winner(Tira) == Alice_tira);
 assert(winner(Rapa) == Alice_rapa);
 assert(winner(Deixa) == Alice_deixa);

 const Player = {
  getHand: Fun([], UInt),
  seeOutcome: Fun([UInt], Null),
  informTimeout: Fun([], Null),
  
};


    export const main = Reach.App(() => {

      const Alice = Participant('Alice', {
        ...Player,
        
        // Specify Alice's interact interface here
        wager: UInt,
        deadline: UInt, // time delta (blocks/rounds)
        });

        //alice play game and collect the wager or pays the wager

       const GameWallet = Participant('GameWallet', {
        ...Player,
        // Specify Alice's interact interface here

        //gametable  collect the wager or pays the wager
        
        acceptWager: Fun([UInt], Null),
    }); 
    
            deploy();
     
            const informTimeout = () => {
              each([Alice, GameWallet], () => {
                interact.informTimeout();
              });
            }; 
            
     Alice.only(() => {

    const wager = declassify(interact.wager);

    const handAlice = declassify(interact.getHand());
    const deadline = declassify(interact.deadline);
    
  });
  
  Alice.publish(wager,handAlice, deadline)
  .pay(wager);

  commit();
    
 
   GameWallet.only(() => {

  interact.acceptWager(wager);

 });

 GameWallet.pay(wager)
 .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
 

 
 const outcome = winner(handAlice);


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
