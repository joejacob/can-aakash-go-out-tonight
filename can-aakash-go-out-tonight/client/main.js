import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

different_texts = ["yo are you free tonight?", "down to chill later?", "do you have to watch ansh?", 
"what are you doing later?", "wanna grab dunkin around 11", "is your dad pissed/can you go out", 
"want to drive us to mineola? you can come out too"];

Template.askHim.onCreated(function askHimOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.askHim.helpers({
  counter() {
    return Template.instance().counter.get();
  },
  randomText() {
  	return different_texts[Math.floor(Math.random()*different_texts.length)];
  }
});

Template.askHim.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
