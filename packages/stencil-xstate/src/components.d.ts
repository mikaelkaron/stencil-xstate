/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  EventObject,
  Interpreter,
  StateMachine,
} from 'xstate';
import {
  MachineOptions,
  Renderer,
} from './components/xstate';

export namespace Components {
  interface XstateMachine {
    /**
    * An XState machine
    */
    'machine': StateMachine<any, any, EventObject>;
    /**
    * Interpreter options that you can pass in
    */
    'options'?: MachineOptions;
    /**
    * Render callback
    */
    'renderer': Renderer<any>;
    /**
    * Current XState machine service
    */
    'service': Interpreter<any>;
  }
  interface XstateService {
    /**
    * Renderer callback
    */
    'renderer'?: Renderer<any>;
    /**
    * An XState service.
    */
    'service': Interpreter<any>;
  }
}

declare global {


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
    'xstate-machine': HTMLXstateMachineElement;
    'xstate-service': HTMLXstateServiceElement;
  }
}

declare namespace LocalJSX {
  interface XstateMachine extends JSXBase.HTMLAttributes<HTMLXstateMachineElement> {
    /**
    * An XState machine
    */
    'machine': StateMachine<any, any, EventObject>;
    /**
    * Interpreter options that you can pass in
    */
    'options'?: MachineOptions;
    /**
    * Render callback
    */
    'renderer'?: Renderer<any>;
    /**
    * Current XState machine service
    */
    'service'?: Interpreter<any>;
  }
  interface XstateService extends JSXBase.HTMLAttributes<HTMLXstateServiceElement> {
    /**
    * Renderer callback
    */
    'renderer'?: Renderer<any>;
    /**
    * An XState service.
    */
    'service': Interpreter<any>;
  }

  interface IntrinsicElements {
    'xstate-machine': XstateMachine;
    'xstate-service': XstateService;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


