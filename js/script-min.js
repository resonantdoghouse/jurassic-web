"use strict";Tone.Transport.bpm.value=60;var mainMelody=new Tone.Synth({volume:-.5,oscillator:{type:"amtriangle",harmonicity:.5,modulationType:"sine"},envelope:{attackCurve:"exponential",attack:.05,decay:.2,sustain:.2,release:1.5},portamento:.01}).toMaster(),mainMelodyPart=new Tone.Sequence(function(l,n){mainMelody.triggerAttackRelease(n,"16n",l)},["Bb3",[[null,null],["Bb3","A3"]],"Bb3",[[null,null],["Bb3","A3"]],[["Bb3"],[null,"C4"]],[["C4"],[null,"Eb4"]],"Eb4",[null,["D4","Bb3"]],[["C4"],[null,"A3"]],[["F3"],["D4","Bb3"]],"C4",[[null],["F4","Bb3"]],[["Eb4"],[null,"D4"]],[["D4"],[null,"C4"]],"C4",null,"Bb3",[["A3"],["Bb4","A4"]],"Bb4",[[null,null],["Bb4","A4"]],"Bb4",[[null,null],["Bb4","A4"]],[["Bb4"],[null,"C5"]],[["C5"],[null,"Eb5"]],"Eb5",[null,["D5","Bb4"]],[["C5"],[null,"A4"]],[["F4"],["D5","Bb4"]],"C5",[[null],["F5","Bb4"]],[["Eb5"],[null,"D5"]],[["D5"],[null,"C5"]],"C5"]).start(0);mainMelodyPart.probability=.9;var bassMelody=new Tone.MonoSynth({volume:-15,oscillator:{type:"square8"},envelope:{attack:.05,decay:.3,sustain:.4,release:.8},filterEnvelope:{attack:.001,decay:.7,sustain:.1,release:.8,baseFrequency:300,octaves:4}}).toMaster(),bassMelodyPart=new Tone.Sequence(function(l,n){bassMelody.triggerAttackRelease(n,"4n",l)},["Bb2",null,"Eb2",null,"Bb2",null,"Bb2",["Bb2","Bb2"],"F2",["F2","Bb2"],"F2",[null,"D2"],["Eb2",[null,"F2"]],["F2",[null,"F2"]],"F2","F2",[null,["F2"]],[null,["F2"]],"Bb2",null,"Eb2",null,"Bb2",null,"Bb2",["Bb2","Bb2"],"F2",["F2","Bb2"],"F2",[null,"D2"],["Eb2",[null,"F2"]],["F2",[null,"F2"]],"F2","F2"]).start(0);bassMelodyPart.probability=.9,document.querySelector(".dino").addEventListener("click",function(l){Tone.Transport.start()});