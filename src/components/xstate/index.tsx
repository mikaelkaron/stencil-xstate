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

export type MachineProps<TContext, TSchema, TEvent extends EventObject> = {
  machine: StateMachine<TContext, TSchema, TEvent>;
  options?: MachineOptions;
  renderer?: MachineRenderer<TContext, TSchema, TEvent>;
};

export const Machine = <TContext, TSchema, TEvent extends EventObject>({ machine, options }: MachineProps<TContext, TSchema, TEvent>) => <xstate-machine machine={machine} options={options} />

export type ServiceProps<TContext, TSchema, TEvent extends EventObject> = {
  service: Interpreter<TContext, TSchema, TEvent>;
  renderer?: MachineRenderer<TContext, TSchema, TEvent>;
};

export const Service = <TContext, TSchema, TEvent extends EventObject>({ service }: ServiceProps<TContext, TSchema, TEvent>) => <xstate-service service={service} />

export type MachineRenderer<TContext, TSchema, TEvent extends EventObject> = (current: State<TContext>, send: Interpreter<TContext, TSchema, TEvent>['send'], service: Interpreter<TContext, TSchema, TEvent>) => Element[] | Element | undefined | null;