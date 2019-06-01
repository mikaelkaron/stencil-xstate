import { Component, Prop } from '@stencil/core';
import { StateMachine } from 'xstate';
import { MachineOptions } from '../xstate';

const merge = (meta, obj = {}) => Object.keys(meta).reduce((acc, key) => Object.assign(acc, meta[key]), obj);

@Component({
  tag: 'xstate-renderer',
  shadow: true
})
export class XStateRenderer {
  /**
   * An XState machine
   */
  @Prop() machine!: StateMachine<any, any, any>;

  /**
   * Interpreter options that you can pass in
   */
  @Prop() options?: MachineOptions = {
    immediate: false
  };

  render() {
    return <xstate-machine machine={this.machine} options={this.options} renderer={(current, send, service) => {
      const { component: Component, ...meta } = merge(current.meta);
      return <Component current={current} send={send} service={service} {...meta} />
    }}></xstate-machine>;
  }
}
