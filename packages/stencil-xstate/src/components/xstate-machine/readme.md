# xstate-machine



<!-- Auto Generated Below -->


## Properties

| Property               | Attribute | Description                              | Type                                                                                                                                                                                                                                              | Default                      |
| ---------------------- | --------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `machine` _(required)_ | --        | An XState machine                        | `StateMachine<any, any, EventObject>`                                                                                                                                                                                                             | `undefined`                  |
| `options`              | --        | Interpreter options that you can pass in | `MachineOptions`                                                                                                                                                                                                                                  | `{     immediate: false   }` |
| `renderer`             | --        | Render callback                          | `(current: State<any, EventObject>, send: (event: SingleOrArray<OmniEvent<EventObject>>, payload?: Record<string, any> & { type?: undefined; }) => State<any, EventObject>, service: Interpreter<any, any, EventObject>) => Element \| Element[]` | `undefined`                  |
| `service`              | --        | Current XState machine service           | `Interpreter<any, any, EventObject>`                                                                                                                                                                                                              | `undefined`                  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
