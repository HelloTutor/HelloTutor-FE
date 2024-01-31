import HelloTutorAPI from "@/api/helloTutorAPI";
import HttpClient from "@/api/httpClient";
import { createContext, useContext } from "react";

const httpClient = new HttpClient();
const helloTutorAPI = new HelloTutorAPI(httpClient);

export const ApiContext = createContext({ helloTutorAPI: helloTutorAPI });

export function ApiProvider({ children }: { children: React.ReactNode }) {
  return (
    <ApiContext.Provider value={{ helloTutorAPI }}>
      {children}
    </ApiContext.Provider>
  );
}

export function useApi() {
  return useContext(ApiContext);
}
