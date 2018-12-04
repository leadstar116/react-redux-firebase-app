import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {addToDo} from '../../actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

function mockFirebaseService() {
    return new Promise(resolve => resolve(true));
  }
  
//jest.mock('firebase', () => new Promise(resolve => resolve(true)));

describe('TodoList tests', () => {
    let store;
    
    beforeEach(() => {
        store = mockStore({});
    });

    it('save should call firebase', () => {
        store.dispatch(addToDo({ firstname: "firstname", lastname: "lastname", company: "company", department: "department", position: "position", email: "email" })).then(() => {
            expect(mockFirebaseService).toHaveBeenCalled();
        });
    });

});  