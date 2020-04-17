import React, {useEffect, useState} from "react"
import {ListComponent} from "../List/List";
import {checkToken} from "../../actions";
import {navigate} from "@reach/router"

const PrivateRouterComponent = () => {
  const [isValidToken, setIsValidToken] = useState(false);
  useEffect(() => {
    checkToken().then(() => setIsValidToken(true))
  });
  return isValidToken ? <ListComponent /> : null;
}

export {PrivateRouterComponent};
