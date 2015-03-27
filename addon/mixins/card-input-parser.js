import CardParser from '../utils/card-parser';
import Ember from 'ember';

export default Ember.Mixin.create({
  parser: Ember.computed(function() {
    return CardParser.create({
      inputBinding: Ember.Binding.oneWay("component.value"),
      component: this
    });
  }),

  setCreditCardType: Ember.observer('parser.type', function() {
    this.set('type', this.get('parser.type'));
  }),

  valueBinding: Ember.Binding.oneWay("formattedValue"),

  formattedOutput: Ember.observer("parser.formattedOutput", "value", function() {
    var _this = this;
    Ember.run.later(function() {
      _this.set("value", _this.get("parser.formattedOutput"));
    }, 0);
  }).on('init'),

  setNumber: Ember.observer("parser.validNumber", function() {
    this.set("number", this.get("parser.validNumber"));
  }).on("didInsertElement")
});
