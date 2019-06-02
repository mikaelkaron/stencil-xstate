import {
  EventObject,
  State,
  StateMachine,
  Interpreter,
  InterpreterOptions
} from 'xstate';
import { FunctionalComponent } from '@stencil/core';

export type Send<TContext, TSchema, TEvent extends EventObject> = Interpreter<TContext, TSchema, TEvent>['send'];

export type Renderer<TContext, TSchema, TEvent extends EventObject> = (current: State<TContext>, send: Send<TContext, TSchema, TEvent>, service: Interpreter<TContext, TSchema, TEvent>) => JSX.Element[] | JSX.Element;

export interface Options extends Partial<InterpreterOptions> {
  immediate?: boolean;
}

export type MachineProps<TContext, TSchema, TEvent extends EventObject> = {
  machine: StateMachine<TContext, TSchema, TEvent>;
  options?: Options;
  renderer?: Renderer<TContext, TSchema, TEvent>;
};

export const Machine: FunctionalComponent<MachineProps<any, any, any>> = <TContext, TSchema, TEvent extends EventObject>({ machine, options, renderer }: MachineProps<TContext, TSchema, TEvent>, children?: JSX.Element[]) => <xstate-machine machine={machine} options={options} renderer={renderer}>{...children}</xstate-machine>

export type ServiceProps<TContext, TSchema, TEvent extends EventObject> = {
  service: Interpreter<TContext, TSchema, TEvent>;
  renderer?: Renderer<TContext, TSchema, TEvent>;
};

export const Service: FunctionalComponent<ServiceProps<any, any, any>> = <TContext, TSchema, TEvent extends EventObject>({ service }: ServiceProps<TContext, TSchema, TEvent>, children?: JSX.Element[]) => <xstate-service service={service}>{...children}</xstate-service>
