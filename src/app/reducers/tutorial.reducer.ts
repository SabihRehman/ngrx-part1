import { Action } from '@ngrx/store'
import { Tutorial } from './../models/tutorial.model'
import * as ActionsComponent from './../actions/actions.component';

const initialState: Tutorial = {
    name: 'Initial Tutorial',
    url: 'http://google.com'
}

export function reducer(state: Tutorial[] = [initialState], action: ActionsComponent.Actions):Tutorial[] {

    // Section 3
    switch(action.type) {
        case ActionsComponent.ADD_TUTORIAL:
            return [...state, action.payload];
        
        // Add this case:
        case ActionsComponent.REMOVE_TUTORIAL:
            state.splice(action.payload, 1)
            return state;
            
        default:
            return state;
    }
}

export class TutorialReducer {
}
