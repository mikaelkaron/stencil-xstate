# xstate-service



<!-- Auto Generated Below -->


## Properties

| Property               | Attribute | Description        | Type                                                                                                                                                                                            | Default     |
| ---------------------- | --------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `renderer`             | --        | Renderer callback  | `(current: State<any, EventObject>, send: (event: any, payload?: Record<string, any> & { type?: undefined; }) => State<any, any>, service: Interpreter<any, any, any>) => Element \| Element[]` | `undefined` |
| `service` _(required)_ | --        | An XState service. | `Interpreter<any, any, any>`                                                                                                                                                                    | `undefined` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
