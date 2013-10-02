# Backbone States

A simple, extensible state machine for your Backbone views.

## Install

```
bower install backbone.states
```


## Dependencies

* Backbone


## Usage

Include the script in your dependency list. Note that Backbone States is already included as part of [Backbone APP](http://github.com/makesites/backbone-app)

Then add states to your views the same way you add events:

```
states: {
    "init": "onInit",
    "postRender": "doPagination"
}
```
Event listeners are automatically created on initialization. When an event is triggered the assigned methods will be executed. You may manually trigger an a state in your code
```
this.trigger("postRender");
```


## Credits

Created by Makis Tracend ( [@tracend](http://github.com/tracend) )

Distributed through [Makesites.org](http://makesites.org)

Released under the [MIT license](http://makesites.org/licenses/MIT)
