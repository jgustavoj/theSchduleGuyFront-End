const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			events: [
				{ startDate: "2020-11-12T09:45", title: "Meeting" },
				{ startDate: "2020-11-13T12:00", title: "Go to a gym" },
				{ startDate: "2020-11-14T13:00", title: "Groceries" },
				{ startDate: "2020-11-11T15:00", title: "Run" }
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar })
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
