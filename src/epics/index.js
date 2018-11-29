import { combineEpics } from 'redux-observable';
import { layoutEpic } from './lander'; 

export const rootEpic = combineEpics(
    layoutEpic,
);
  
