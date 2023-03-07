import {useState, createContext} from 'react';

export const AppContext = createContext();

// we take in props because we want access to the children
const AppContextProvider = (props) => {
    // put our state

    const [carddata, setcarddata] = useState([]);
    const [accomodation, setAccomodation] = useState("")
    const [tripName, setName] = useState('');
    const [date, setDate] = useState('');
    const [summary, setSummary] = useState('');
    const [friendName, setFriendName] = useState("")
    const [friendEmail, setFriendEmail] = useState('')
    const [emails, setemails] = useState([])
    const [names, setnames] = useState([])
   
    return (
        <AppContext.Provider value={{
            carddata, setcarddata,
            accomodation, setAccomodation,
            tripName, setName,
            date, setDate,
            summary, setSummary, 
            friendName, setFriendName,
            friendEmail, setFriendEmail,
            emails, setemails,
            names, setnames
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;