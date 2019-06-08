import { Component, ComponentInterface } from '@stencil/core';
import { Machine } from 'xstate';
import 'stencil-xstate';

const machine = Machine({
  initial: 'green',
  states: {
    green: {
      on: {
        NEXT: 'yellow'
      }
    },
    yellow: {
      on: {
        NEXT: 'red'
      }
    },
    red: {
      on: {
        NEXT: 'green'
      }
    }
  }
});

@Component({
  tag: 'demo-machine',
  shadow: false
})
export class DemoMachine implements ComponentInterface {
  render() {
    return (
      <xstate-machine
        machine={machine}
        renderer={(current, send) => {
          return (
            <button onClick={() => send('NEXT')}>
              {current.toStrings(current.value)}
            </button>
          );
        }}
      />
    );
  }
}
