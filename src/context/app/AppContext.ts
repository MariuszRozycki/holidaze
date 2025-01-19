import { createContext } from "react";
import { AppState, Action } from "../../state/AppReducer";

export interface AppContextProps {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);
