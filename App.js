import { createBrowserApp } from "@react-navigation/web";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Register from "./registerContainer";
import Signup from "./signupContainer";
import Home from "./main1";
import Payment from "./paymentPage";
import Settings from "./accountSettings";
import Category from "./cat";
import Linear1 from "./linear1";
import Linear3 from "./linear3Container";
import Map from "./map";
import Chat from "./chat";
import Transaction from "./transaction";
export default createBrowserApp(
  createSwitchNavigator(
    {
      Signup,
      Register,
      Home,
      Settings,
      Map,
      Linear1,
      Linear3,
      Category,
      Payment,
      Transaction,
      Chat,
    },
    {
      initialRouteName: "Chat",
    }
  )
);
