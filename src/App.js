

import rapalogo from "../src/imgs/rapalogo.png";
import deixa from "../src/imgs/deixa.png";
import poemimg from "../src/imgs/poem.png";
import rapaimg from "../src/imgs/rapa.png";
import tiraimg from "../src/imgs/tira.png";
import rapas from "../src/imgs/rapas.jpg";
import React, { useState, useEffect } from 'react';

import * as backend from './build/index.main.mjs';
import MyAlgoConnect from "@reach-sh/stdlib/ALGO_MyAlgoConnect";
import { loadStdlib } from '@reach-sh/stdlib';
const stdlib = loadStdlib("ALGO");

stdlib.setWalletFallback(
  stdlib.walletFallback({
    providerEnv: "TestNet",
    MyAlgoConnect,
  })
);


var addr = "Hello";
var addrGameWallet = "Hello";
var balAtomic = "balance";

var balAtomicGameWallet = "balance";
var roll = 0;
var hand = 0;
var WagerValue = 0;

var playerpaytoplay = false;
var poem = 2;
var tira = 0;
var rapa = 0;
var gameWalletBalance = '';
var fmtGameWallet = '';
var fmt = '';



function Rapa(props) {

  if (props.list === 0) {

    return <img src={poemimg} height={200} alt="Algorand Blockchain" />;

  } else if (props.list === 1) {

    return <img src={tiraimg} height={200} alt="Algorand Blockchain" />;

  } if (props.list === 2) {

    return <img src={rapaimg} height={200} alt="Algorand Blockchain" />;

  } if (props.list === 3) {

    return <img src={deixa} height={200} alt="Algorand Blockchain" />;

  } else {

    return <img src={rapas} height={200} alt="Algorand Blockchain" />;
  }

}


function ComponentDidMount1(props) {

  async function foundGameTableAccount() {

    if (input !== "") {
      const MICROALGOS = '1000000';
      const accAlice = await stdlib.getDefaultAccount();

      const accgameWallet = await stdlib.newAccountFromMnemonic(input);
      const balAtomic = await stdlib.balanceOf(accAlice);
      const balAtomicGameWallet = await stdlib.balanceOf(accgameWallet);
      console.log(balAtomicGameWallet);
      await stdlib.transfer(accAlice, accgameWallet, MICROALGOS);
      console.log(balAtomic);
      gameWalletBalance = stdlib.formatCurrency(balAtomicGameWallet, 4);

      setWalletG(gameWalletBalance);
      playerpaytoplay = true;

      alert("Game Table Founded!");

    } else {

      playerpaytoplay = false;
      alert("Mnemonic input is empty!");

    }
  }

  function rapaAnimation() {

    if (playerpaytoplay === true) {

      setTimeout(getGameResult, 2000);

      let counter = 0;
      const interval = setInterval(() => {

        counter += 1;
        if (counter >= 15)
          clearInterval(interval);
        roll = Math.floor(Math.random() * 4);

        setRapaValue(roll);

        //console.log(roll);

        playerpaytoplay = false;
      }, 100);

    } else {
      console.log("add funds to play");

      playerpaytoplay = false;
      alert("Add Funds to Play!");


    }

  }
  
  function getGameResult() {

    tira = Math.round(gameWalletBalance * 0.1);
    rapa = Math.round(gameWalletBalance * 0.8);

    console.log("The value of poem is " + poem);
    console.log("The value of tira is " + tira);
    console.log("The value of rapa is " + rapa);

     hand = roll;

    if (roll === 0) {

      WagerValue = poem;
      settableGameValue(WagerValue);

    } else if (roll === 1) {
      WagerValue = tira;
      settableGameValue(WagerValue);

    } else if (roll === 2) {
      WagerValue = rapa;
      settableGameValue(WagerValue);

    } else if (roll === 3) {
      WagerValue = 0;
      settableGameValue(WagerValue);

    } else {
      WagerValue = 0;
      settableGameValue(WagerValue);
    }
    //console.log(WagerValue);
    console.log("!!!!The value of wagervalue is " + WagerValue);
    console.log("!!!!The value of hand is " + hand);
    console.log("pay to play");
    console.log(playerpaytoplay);

    (async () => {


      const accAlice = await stdlib.getDefaultAccount();
      const accgameWallet = await stdlib.newAccountFromMnemonic(input);
      
      addr = stdlib.formatAddress(accAlice.getAddress());
      addrGameWallet = stdlib.formatAddress(accgameWallet.getAddress());
      console.log(addr);
      console.log(addrGameWallet);
      balAtomic = await stdlib.balanceOf(accAlice);
      fmt = (x) => stdlib.formatCurrency(balAtomic, 4);
      balAtomicGameWallet = await stdlib.balanceOf(accgameWallet);
      fmtGameWallet = (x) => stdlib.formatCurrency(balAtomicGameWallet, 4);

      setAliceplayer(fmt);
      setalicePublicKey(addr);
      setWalletG(fmtGameWallet);

      const getBalance = async (who) => fmt(await stdlib.balanceOf(who));
      console.log(getBalance);

      const getBalanceGameWallet = async (who) => fmtGameWallet(await stdlib.balanceOf(who));
      console.log(getBalanceGameWallet);

      const beforeAlice = await getBalance(accAlice);

      const beforeGameWallet = await getBalanceGameWallet(accgameWallet);
      console.log(beforeAlice);
      console.log(beforeGameWallet);

      const ctcAlice = accAlice.contract(backend);
      console.log(ctcAlice);
      const ctcGameWallet = accgameWallet.contract(backend, ctcAlice.getInfo());
      console.log(ctcGameWallet);


      const HAND = ['Poem', 'Tira', 'Rapa', 'Deixa'];
      const OUTCOME = ['Alice poem', 'Alice tira', 'Alice rapa', 'Alice deixa'];

      const Player = (Who) => ({

        ...stdlib.hasRandom, // <--- new!
        getHand: () => {

          const hand = roll;

          console.log(`${Who} played ${HAND[hand]}`);
          setrapaRound(`${HAND[hand]}`);
          return hand;

        },

        seeOutcome: (outcome) => {
          console.log(`${Who} saw outcome ${OUTCOME[outcome]}`);

        },
      });


      await Promise.all([

        backend.Alice(ctcAlice, {
          ...Player('Alice'),

          wager: stdlib.parseCurrency(WagerValue),

        }),

        backend.GameWallet(ctcGameWallet, {
          ...Player('GameWallet'),

          acceptWager: (amt) => {
            console.log(`Game Table accepts Alice play result of ${fmtGameWallet(amt)}.`);
          },

        }),

      ]);

      const afterAlice = await getBalance(accAlice);
      const afterGameWallet = await getBalanceGameWallet(accgameWallet);

      console.log(`Alice went from ${beforeAlice} to ${afterAlice}.`);
      console.log(`GameWallet went from ${beforeGameWallet} to ${afterGameWallet}.`);
      playerpaytoplay = false;
      setWalletG(gameWalletBalance);
      setAliceplayer(fmt);
      

    })(); // <-- Don't forget these!

  }//comound2

  const [Aliceplayer, setAliceplayer] = useState('');
  useEffect(() => {

  }, [Aliceplayer]);

  const [alicePublicKey, setalicePublicKey] = useState('');
  useEffect(() => {

  }, [alicePublicKey]);

  const [walletG, setWalletG] = useState('');
  useEffect(() => {

  }, [walletG]);

  const [rapalist, setRapaValue] = useState();

  useEffect(() => {


  }, [rapalist]);

  const [rapaRound, setrapaRound] = useState();

  useEffect(() => {


  }, [rapaRound]);

  const [tablegamevalue, settableGameValue] = useState();

  useEffect(() => {


  }, [tablegamevalue]);

  const [input, setInput] = useState('');

  return (
    <>
      <div >
    
        <div className=" App container mx-auto mt-3 mb-8 font-thin">

          <img className="w-1920 h-800 md:w-1920 md:h-auto md:rounded-none rounded-full mx-auto" src={rapalogo} height={200} alt="Algorand Blockchain" />

          <div className="flex justify-center mt-6 ">
            <Rapa list={rapalist} />

          </div>
          <div className="App container mx-auto mt-8 mb-8 font-thin">

            <ul className="grid grid-cols-1 gap-4 h-24">
              <li>
                <div className="flex justify-center shadow bg-white rounded-lg whitespace-nowrap px-2 py-1 ml-1 h-full ">
                  <button type="button" onClick={() => rapaAnimation()} className="transition duration-500 ease-in-out justify-center px-4 py-2 bg-blue-400 hover:bg-blue-600 text-sm text-white transform hover:-translate-y-1 hover:scale-110 ...">
                    Play RAPA
                  </button>

                </div>
              </li>
            </ul>

          </div>
          <ul className="grid grid-cols-2 gap-4 h-48">
            <li>
              <div className="shadow bg-white rounded-lg whitespace-nowrap px-2 py-1 ml-1 h-full ">


                <div className="font-light text-4xl align-middle mb-2">Please Specify Mnemonic as Table Game</div>
                <div className="py-5">
                  <input value={input} onInput={e => setInput(e.target.value)} className=" focus:border-normal-blue-700 focus:ring-2 focus:ring-light-blue-700 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-400 rounded-md py-2 pl-10" type="password" aria-label="Filter projects" placeholder="Insert Mnemonic as Table Game " />
                </div>

                <div className="font-light text-xl align-middle mb-2">Add 10 Algos on the Game Table to play</div>


                <div className="py-2">
                  <button type="button" onClick={() => foundGameTableAccount()} className="transition duration-500 ease-in-out justify-center px-4 py-2 bg-blue-400 hover:bg-blue-600 text-sm text-white transform hover:-translate-y-1 hover:scale-110 ...">
                    Add Funds
                  </button>
                </div>


              </div>
            </li>
            <li>
              <div className="shadow bg-white rounded-lg whitespace-nowrap px-2 py-1 ml-1 h-full">

                <div className="font-light text-4xl align-middle mb-2">Game Status</div>

                <div className="ring-blue-500 ring-4 text-center rounded-md p-2 my-4">Result from game round: {tablegamevalue} Algos</div>
                <div className="ring-blue-500 ring-4 text-center rounded-md p-2 my-4">Total Amount in Game Table: {walletG} Algos</div>
                <div className="text-left">
                  <div className="font-light text-1xl align-middle mb-2">Player Result</div>
                  <div className="ring-blue-500 ring-4 text-center rounded-md p-2 my-4">Total Amount in Player Wallet:{Aliceplayer} Algos</div>

                </div>

              </div>
            </li>
            <li>
              <div className="shadow bg-white rounded-lg whitespace-nowrap px-2 py-1 ml-1 h-full">
                <div className="text-xl font-semibold font-mono whitespace-nowrap px-1 py-1 ml-1 rounded text-white bg-red-700 rounded-2">Game Rules</div>

                <ul className="list-inside list-disc">
                  <li>Each player add 10 algo to the Game Wallet</li>
                  <li>When Get <span className="font-bold">P</span> the player Add 2 algo on the Game Wallet</li>
                  <li>When Get <span className="font-bold">T</span> the player Take 10% algo from the Game Wallet</li>
                  <li>When Get <span className="font-bold">R</span> the player Take 80% algo from the Game Wallet</li>
                  <li>When Get <span className="font-bold">D</span> pass your turn to the next Player</li>

                </ul>

              </div>
            </li>
            <li>
              <div className="shadow bg-white rounded-lg whitespace-nowrap px-2 py-1 ml-1 h-full">
                <div className="font-light text-xl align-middle mb-2">Other Info</div>


                <h1> Player in game: <span className="font-bold">{alicePublicKey}</span> </h1>
                <h1>Player played <span className="font-bold">{rapaRound}</span></h1>

              </div>
            </li>
            <li>
              <div className="col-span-1 bg-white rounded-lg whitespace-nowrap px-2 py-1 ml-1 mt-4 mb-8 h-full">
                <p className="text-md leading-tight">Mario Fernandes 2021 </p>

              </div>

            </li>

          </ul>

        </div>

      </div>
    </>
  );

}


function App() {
  return (
    <div className="App">
      <ComponentDidMount1 />



    </div>
  );
}

export default App;
