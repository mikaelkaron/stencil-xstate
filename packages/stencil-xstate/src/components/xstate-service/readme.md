# xstate-service



<!-- Auto Generated Below -->


## Properties

| Property               | Attribute | Description        | Type                                                                                                                                                                                                                                              | Default     |
| ---------------------- | --------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `renderer`             | --        | Renderer callback  | `(current: State<any, EventObject>, send: (event: SingleOrArray<OmniEvent<EventObject>>, payload?: Record<string, any> & { type?: undefined; }) => State<any, EventObject>, service: Interpreter<any, any, EventObject>) => Element \| Element[]` | `undefined` |
| `service` _(required)_ | --        | An XState service. | `Interpreter<any, any, EventObject>`                                                                                                                                                                                                              | `undefined` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
