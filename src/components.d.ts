/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';


import {
  Interpreter,
  StateMachine,
} from 'xstate';
import {
  MachineOptions,
  MachineRenderer,
} from './components/xstate';


export namespace Components {

  interface XstateMachine {
    /**
    * An XState machine
    */
    'machine': StateMachine<any, any, any>;
    /**
    * Interpreter options that you can pass in
    */
    'options'?: MachineOptions;
    /**
    * Render callback
    */
    'renderer': MachineRenderer<any, any>;
  }
  interface XstateMachineAttributes extends StencilHTMLAttributes {
    /**
    * An XState machine
    */
    'machine': StateMachine<any, any, any>;
    /**
    * Interpreter options that you can pass in
    */
    'options'?: MachineOptions;
    /**
    * Render callback
    */
    'renderer'?: MachineRenderer<any, any>;
  }

  interface XstateService {
    /**
    * Renderer callback
    */
    'renderer': MachineRenderer<any, any>;
    /**
    * An XState service.
    */
    'service': Interpreter<any, any, any>;
  }
  interface XstateServiceAttributes extends StencilHTMLAttributes {
    /**
    * Renderer callback
    */
    'renderer'?: MachineRenderer<any, any>;
    /**
    * An XState service.
    */
    'service': Interpreter<any, any, any>;
  }
}

declare global {
  interface StencilElementInterfaces {
    'XstateMachine': Components.XstateMachine;
    'XstateService': Components.XstateService;
  }

  interface StencilIntrinsicElements {
    'xstate-machine': Components.XstateMachineAttributes;
    'xstate-service': Components.XstateServiceAttributes;
  }


  interface HTMLXstateMachineElement extends Components.XstateMachine, HTMLStencilElement {}
  var HTMLXstateMachineElement: {
    prototype: HTMLXstateMachineElement;
    new (): HTMLXstateMachineElement;
  };

  interface HTMLXstateServiceElement extends Components.XstateService, HTMLStencilElement {}
  var HTMLXstateServiceElement: {
    prototype: HTMLXstateServiceElement;
    new (): HTMLXstateServiceElement;
  };

  interface HTMLElementTagNameMap {
    'xstate-machine': HTMLXstateMachineElement
    'xstate-service': HTMLXstateServiceElement
  }

  interface ElementTagNameMap {
    'xstate-machine': HTMLXstateMachineElement;
    'xstate-service': HTMLXstateServiceElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
