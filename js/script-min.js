"use strict";document.addEventListener("DOMContentLoaded",function(){Tone.Transport.bpm.value=60;var l=new Tone.JCReverb(.7).connect(Tone.Master),n=new Tone.JCReverb(.2).connect(Tone.Master),e=new Tone.Synth({volume:-15,oscillator:{type:"amtriangle",harmonicity:.5,modulationType:"square"},envelope:{attackCurve:"exponential",attack:.1,decay:.5,sustain:.5,release:2},portamento:.02}).chain(l);new Tone.Sequence(function(l,n){e.triggerAttackRelease(n,"0:0:1",l)},["Bb3",[[null,null],["Bb3","A3"]],"Bb3",[[null,null],["Bb3","A3"]],[["Bb3"],[null,"C4"]],[["C4"],[null,"Eb4"]],"Eb4",[null,["D4","Bb3"]],[["C4"],[null,"A3"]],[["F3"],["D4","Bb3"]],"C4",[[null],["F4","Bb3"]],[["Eb4"],[null,"D4"]],[["D4"],[null,"C4"]],"C4",null,"Bb3",[["A3"],["Bb4","A4"]],"Bb4",[[null,null],["Bb4","A4"]],"Bb4",[[null,null],["Bb4","A4"]],[["Bb4"],[null,"C5"]],[["C5"],[null,"Eb5"]],"Eb5",[null,["D5","Bb4"]],[["C5"],[null,"A4"]],[["F4"],["D5","Bb4"]],"C5",[[null],["F5","Bb4"]],[["Eb5"],[null,"D5"]],[["D5"],[null,"C5"]],"C5",[null,["Bb5","A5"]],["Bb5","F5"],["Eb5",["Bb5","A5"]],["Bb5","F5"],["Eb5",["Bb5","A5"]],["Bb5","F5"]]).start().probability=.9;var b=new Tone.MonoSynth({volume:-20,oscillator:{type:"square"},envelope:{attack:.05,decay:.3,sustain:.4,release:.8},filterEnvelope:{attack:.001,decay:.7,sustain:.1,release:.8,baseFrequency:200,octaves:4}}).chain(n);new Tone.Sequence(function(l,n){b.triggerAttackRelease(n,"0:1",l)},["Bb1",null,"Eb1",null,"Bb1",null,"Bb1",["Bb1","Bb1"],"F1",["F1","Bb1"],"F1",[null,"D1"],["Eb1",[null,"F1"]],["F1",[null,"F1"]],"F1","F1",[null,["F1"]],[null,["F1"]],"Bb1","Bb1","Eb1","Eb1","Bb1",["Bb1",[null,"F2"]],"Bb1",["Bb1","Bb1"],"F1",["F2","F2"],"F1",["F1","D1"],["G1",[null,"F1"]],["F1",[null,"F1"]],"F1","F1","Bb1",null,"Eb1","Eb1","Bb1",null,"Eb1","Eb1"]).start().probability=.9,document.querySelector("body").addEventListener("click",function(l){Tone.Transport.start()})});