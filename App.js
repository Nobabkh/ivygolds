import React, { useEffect } from "react";
import Routs from "./src/natigators/Routs";
import { enableFreeze, useScreens } from 'react-native-screens';


enableFreeze(true);
export default function App()
{
    return <Routs />
}