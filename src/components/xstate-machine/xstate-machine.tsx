import { Component, Prop, State } from '@stencil/core';
import { Options, Renderer } from '../xstate'
import {
  interpret,
  State as MachineState,
  StateMachine,
  Interpreter
} from 'xstate';

@Component({
  tag: 'xstate-machine',
  shadow: true
})
export class XStateMachine {

  @State() service: Interpreter<any, any, any>;

  /**
   * Current machine state
   */
  @State() current: MachineState<any, any>;

  /**
   * An XState machine
   */
  @Prop() machine!: StateMachine<any, any, any>;

  /**
   * Interpreter options that you can pass in
   */
  @Prop() options?: Options = {
    immediate: false
  };

  /**
   * Render callback
   */
  @Prop() renderer: Renderer<any, any, any>;

  componentWillLoad() {
    const { machine, options } = this;

    const service = interpret(machine, options).onTransition(state => {
      // Update the current machine state when a transition occurs
      if (state.changed) {
        this.current = state;
      }
    });

    this.service = service;

    // Start service immediately (before mount) if specified in options
    if (options && options.immediate) {
      service.start();
    }

    // Keep track of the current machine state
    this.current = service.initialState;
  }

  componentDidLoad() {
    // Start the service when the component mounts.
    // Note: the service will start only if it hasn't started already.
    this.service.start();
  }

  componentDidUnload() {
    // Stop the service when the component unmounts
    this.service.stop();
  }

  render() {
    return this.renderer && this.renderer(this.current, this.service.send, this.service);
  }
}
