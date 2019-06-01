import {
  EventObject,
  State,
  StateMachine,
  Interpreter,
  InterpreterOptions
} from 'xstate';

export { State as MachineState } from 'xstate'

export interface MachineOptions extends Partial<InterpreterOptions> {
  immediate?: boolean;
}

export type MachineProps<TContext, TEvent extends EventObject> = {
  machine: StateMachine<TContext, any, TEvent>;
  options?: MachineOptions;
  renderer?: MachineRenderer<TContext, TEvent>;
};

export const Machine = <TContext, TEvent extends EventObject>({ machine, options }: MachineProps<TContext, TEvent>) => <xstate-machine machine={machine} options={options} />

export type ServiceProps<TContext, TEvent extends EventObject> = {
  service: Interpreter<TContext, any, TEvent>;
  renderer?: MachineRenderer<TContext, TEvent>;
};

export const Service = <TContext, TEvent extends EventObject>({ service }: ServiceProps<TContext, TEvent>) => <xstate-service service={service} />

export type MachineRenderer<TContext, TEvent extends EventObject> = (current: State<TContext>, send: Interpreter<TContext, any, TEvent>['send'], service: Interpreter<TContext, any, TEvent>) => Element[] | Element | undefined | null;