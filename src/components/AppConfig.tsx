'use client';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CoreContext from "./CoreContext";
import { useState } from "react";


const UserDefaultProfile={
    first_name:'Jogi prasad',
    last_name:'Pakki',
    age:27,
    height:6.8,
    weight:70,
    diet_preference:1,
    gender:0
}

export interface IUserProfile{
    first_name: string;
    last_name: string;
    age: number;
    height: number;
    weight: number;
    diet_preference:number
    gender: string
}

export default function AppConfig({children}:any) {

    //@ts-ignore
    const [ user, setUser ] = useState<IUserProfile>(UserDefaultProfile)
    

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                retry: false,
            }
        }
    });

    return (

        <QueryClientProvider client={queryClient}>
            <CoreContext.Provider
                value={{
                    user,
                    setUser,
                    isLoaded:true
                }}
            >
                    {
                    children
                }
            </CoreContext.Provider>
            
        </QueryClientProvider>

    )

}