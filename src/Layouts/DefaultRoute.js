import React from "react"
import loadable from '@loadable/component'
import { Route } from 'react-router-dom'; 
const Header = loadable(() => import('../Component/Header'))
// const Footer = loadable(() => import('../Footer'))


const DefaultRoute = ({children}) => {
    return (
        <>
          <Header/>
            <main>
                {children}
            </main>
          {/* <Footer/> */}
        </>
    )
}
const layoutRoute = ({component: Component, ...rest}) => {  

    return ( 
      <> 
      <Route {...rest} render={matchProps => (  
        <DefaultRoute>  
            <Component {...matchProps} />  
        </DefaultRoute>  
      )} />  
      </>
    )  
  };  

export default layoutRoute;