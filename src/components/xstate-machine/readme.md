# xstate-machine



<!-- Auto Generated Below -->


## Properties

| Property               | Attribute | Description                              | Type                                                                                                                                                                                            | Default                      |
| ---------------------- | --------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `machine` _(required)_ | --        | An XState machine                        | `StateMachine<any, any, any>`                                                                                                                                                                   | `undefined`                  |
| `options`              | --        | Interpreter options that you can pass in | `MachineOptions`                                                                                                                                                                                | `{     immediate: false   }` |
| `renderer`             | --        | Render callback                          | `(current: State<any, EventObject>, send: (event: any, payload?: Record<string, any> & { type?: undefined; }) => State<any, any>, service: Interpreter<any, any, any>) => Element \| Element[]` | `undefined`                  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
