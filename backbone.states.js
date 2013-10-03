/*
 * Backbone States
 * Source: https://github.com/makesites/backbone-states
 *
 * Created by Makis Tracend ( [@tracend](http://github.com/tracend) )
 * Released under the [MIT license](http://makesites.org/licenses/MIT)
 *
 */
(function(window, document, Backbone){

	// find the $
	//$ = ('$' in window) ? window.$ : window.jQuery || window.Zepto || false;

	var View = Backbone.View;

	Backbone.View = View.extend({
		states: {
		},
		initialize: function(options){
			this.initStates();
			return View.prototype.initialize.call(this, options);
		},
		initStates: function(){
			for(var e in this.states){
				var method = this.states[e];
				this.bind(e, _.bind(this[method], this) );
			}
		}

	});

	// Helpers
	//...

	return Backbone;

})(window, document, this.Backbone);
