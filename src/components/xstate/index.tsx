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

export const Machine = <TContext, TSchema, TEvent extends EventObject>({ machine, options, renderer }: MachineProps<TContext, TSchema, TEvent>, children?: Element[]) => <xstate-machine machine={machine} options={options} renderer={renderer}>{...children}</xstate-machine>

export type ServiceProps<TContext, TSchema, TEvent extends EventObject> = {
  service: Interpreter<TContext, TSchema, TEvent>;
  renderer?: MachineRenderer<TContext, TSchema, TEvent>;
};

export const Service = <TContext, TSchema, TEvent extends EventObject>({ service }: ServiceProps<TContext, TSchema, TEvent>, children?: Element[]) => <xstate-service service={service}>{...children}</xstate-service>

export type MachineRenderer<TContext, TSchema, TEvent extends EventObject> = (current: State<TContext>, send: Interpreter<TContext, TSchema, TEvent>['send'], service: Interpreter<TContext, TSchema, TEvent>) => JSX.Element[] | JSX.Element;