import {
  EventObject,
  State,
  StateMachine,
  StateSchema,
  Interpreter,
  InterpreterOptions
} from 'xstate';
import { FunctionalComponent } from '@stencil/core';

export type Send<TContext, TSchema extends StateSchema = any, TEvent extends EventObject = EventObject> = Interpreter<TContext, TSchema, TEvent>['send'];

export type Renderer<TContext, TSchema extends StateSchema = any, TEvent extends EventObject = EventObject> = (current: State<TContext>, send: Send<TContext, TSchema, TEvent>, service: Interpreter<TContext, TSchema, TEvent>) => JSX.Element[] | JSX.Element;

export interface Options extends Partial<InterpreterOptions> {
  immediate?: boolean;
}

export type MachineProps<TContext, TSchema extends StateSchema = any, TEvent extends EventObject = EventObject> = {
  machine: StateMachine<TContext, TSchema, TEvent>;
  options?: Options;
  renderer?: Renderer<TContext, TSchema, TEvent>;
};

export const Machine: FunctionalComponent<MachineProps<any, any, EventObject>> = <TContext, TSchema extends StateSchema = any, TEvent extends EventObject = EventObject>({ machine, options, renderer }: MachineProps<TContext, TSchema, TEvent>, children?: JSX.Element[]) => <xstate-machine machine={machine} options={options} renderer={renderer}>{...children}</xstate-machine>

export type ServiceProps<TContext, TSchema extends StateSchema = any, TEvent extends EventObject = EventObject> = {
  service: Interpreter<TContext, TSchema, TEvent>;
  renderer?: Renderer<TContext, TSchema, TEvent>;
};

export const Service: FunctionalComponent<ServiceProps<any, any, EventObject>> = <TContext, TSchema extends StateSchema = any, TEvent extends EventObject = EventObject>({ service }: ServiceProps<TContext, TSchema, TEvent>, children?: JSX.Element[]) => <xstate-service service={service}>{...children}</xstate-service>
