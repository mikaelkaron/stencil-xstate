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

  /**
   * An XState machine
   */
  @Prop() machine!: StateMachine<any, any, any>;

  /**
   * Current XState machine service
   */
  @Prop({ mutable: true }) service: Interpreter<any, any, any>;

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

  /**
   * Current machine state
   */
  @State() current: MachineState<any, any>;

  componentWillLoad() {
    const { machine, options } = this;

    // Keep track of the service 
    this.service = interpret(machine, options).onTransition(state => {
      // Update the current machine state when a transition occurs
      if (state.changed) {
        this.current = state;
      }
    });

    // Start service immediately (before mount) if specified in options
    if (options && options.immediate) {
      this.service.start();
    }

    // Keep track of the current machine state
    this.current = this.service.initialState;
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
