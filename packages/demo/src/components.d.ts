/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import 'stencil-xstate';


export namespace Components {

  interface DemoMachine {}
  interface DemoMachineAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'DemoMachine': Components.DemoMachine;
  }

  interface StencilIntrinsicElements {
    'demo-machine': Components.DemoMachineAttributes;
  }


  interface HTMLDemoMachineElement extends Components.DemoMachine, HTMLStencilElement {}
  var HTMLDemoMachineElement: {
    prototype: HTMLDemoMachineElement;
    new (): HTMLDemoMachineElement;
  };

  interface HTMLElementTagNameMap {
    'demo-machine': HTMLDemoMachineElement
  }

  interface ElementTagNameMap {
    'demo-machine': HTMLDemoMachineElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}