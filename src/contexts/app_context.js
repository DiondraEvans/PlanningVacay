import {useState, createContext} from 'react';

export const AppContext = createContext();

// we take in props because we want access to the children
const AppContextProvider = (props) => {
    // put our state

    const [carddata, setcarddata] = useState("");
 
    return (
        <AppContext.Provider value={{
            carddata, setcarddata,
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;