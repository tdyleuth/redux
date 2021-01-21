const isLoggedReducer = (state = false, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case "SignIn":
            return !state;
        default:
            return state;
    }
};

export default isLoggedReducer;
