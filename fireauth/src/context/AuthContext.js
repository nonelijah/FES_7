import { createContext, useEffect, useReducer } from "react";
import { appAuth } from "../firebase/config";

const AuthContext = createContext();

// 리듀서 함수
const authReducer = (state, action) => {
    switch (action.type) {
        case "login":
            return { ...state, user: action.payload };
        case "logout":
            return { ...state, user: null };
        case "authIsReady":
            return { ...state, user: action.payload, isAuthReady: true };
        default:
            return state;
    }
};

const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        isAuthReady: false,
    });

    useEffect(() => {
        const unsubscribe = appAuth.onAuthStateChanged(function (user) {
            // user 정보가 있을때만 authIsReady 값이 true가 됨으로, 컴포넌트가 렌더링되지 않습니다.
            // if (user) {
            dispatch({ type: "authIsReady", payload: user });
            // }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthContextProvider };
