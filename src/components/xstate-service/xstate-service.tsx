import { Component, Prop, State } from '@stencil/core';
import { Renderer } from '../xstate'

import {
  State as MachineState,
  Interpreter
} from 'xstate';

@Component({
  tag: 'xstate-service',
  shadow: true
})
export class XStateService {

  /**
   * Current machine state
   */
  @State() current: MachineState<any, any>;

  /**
   * An XState service.
   */
  @Prop() service!: Interpreter<any, any, any>;

  /**
   * Renderer callback
   */
  @Prop() renderer?: Renderer<any, any, any>;

  private stateChange(state: MachineState<any, any>) {
    if (state.changed) {
      this.current = state
    }
  }

  componentWillLoad() {
    this.current = this.service.state;
  }

  componentDidLoad() {
    this.service.onTransition(this.stateChange);
  }

  componentDidUnload() {
    this.service.off(this.stateChange);
  }

  render() {
    return this.renderer && this.renderer(this.current, this.service.send, this.service);
  }
}
