import {

        ADD_USER,
    
      RETRIEVE_USERS,
    
      UPDATE_USER,
    
      DELETE_USER,
    
      } from "../Action/types";
    
      const initialState = [];
    
      function userReducer(users = initialState, action) {
    
        const { type, payload } = action;
    
        switch (type) {
    
          case ADD_USER:
    
            return [...users, payload];
    
          case RETRIEVE_USERS:
    
            return payload;
    
            case UPDATE_USER:
    
                return users.map((user) => {
    
                  if (user.userId === payload.userId) {
    
                    return {
    
                      ...user,
    
                      ...payload,
    
                    };
    
                  } else {
    
                    return user;
    
                  }
    
                });
    
              case DELETE_USER:
    
                return users.filter(({ userId }) => userId !== payload.userId);
    
             
    
              default:
    
                return users;
    
            }
    
          };
    
          export default userReducer;