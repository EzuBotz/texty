import { usersConstants } from '../constants';

export function registration(state = {}, action) {
  switch (action.type) {
    case usersConstants.REGISTER_REQUEST:
      return { registering: true };
    case usersConstants.REGISTER_SUCCESS:
      return {};
    case usersConstants.REGISTER_FAILURE:
      return {};
    default:
      return state
  }
}
