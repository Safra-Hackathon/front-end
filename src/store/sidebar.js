import { shallowEqual, useDispatch, useSelector } from 'react-redux';

// Actions

export const handleToggleSideBar = (state, { isOpen }) => ({
  ...state,
  mobileSideBarOpen: isOpen,
});

// Store

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

const initialState = {
  mobileSideBarOpen: false,
};

export const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return handleToggleSideBar(state, action.payload);
    default:
      return state;
  }
};

/**
 * Hook para acessar a sidebar store
 */

const useSidebarStore = () => {
  const dispatch = useDispatch();

  const mobileSideBarOpen = useSelector((state) => state.sidebar.mobileSideBarOpen, shallowEqual);

  const sidebarToggle = (isOpen) => {
    dispatch({
      type: TOGGLE_SIDEBAR,
      payload: { isOpen },
    });
  };

  return {
    sidebarToggle,
    mobileSideBarOpen,
  };
};

export default useSidebarStore;
