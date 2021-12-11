const INITIAL_STATE = { products: [] };

export const crudReducer = (state = INITIAL_STATE, action = {}) => {
	switch (action.type) {
		case "view":
			return {
				...state,
				products: action.payload,
			};
		case "update":
			let newState = state.products.map((item) => {
				if (item.id === action.payload.id) {
					item = action.payload;
				}
				return item;
			});
			return {
				...state,
				products: newState,
			};
		case "delete":
			return {
				...state,
				products: [
					...state.products.slice(0, action.payload),
					...state.products.slice(action.payload + 1),
				],
			};
		case "create":
			let newstate = state.products;
			newstate.push(action.payload);
			return {
				...state,
				products: newstate,
			};
		default:
			return state;
	}
};
