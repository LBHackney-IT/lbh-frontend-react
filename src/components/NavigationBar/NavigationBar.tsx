import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

interface RouteLinks {
/**
 * Array of {@link RouteData} objects that defines the number of routes in the app
 */
  links: RouteData[]
  }

interface RouteData {
/**
* An object with parameters for a route name and route address
*/
  name: string,
}


const NavigationBar = (props: RouteLinks) => {
  
  const NavLinks: any = () => props.links.map((link: RouteData) => (
    <li key={link.name}>
      <Link href={`/${link.name}`}>{link.name}</Link>
    </li>
    
  )
  return (
    <div>
      <ul>
        <NavLinks />
      </ul>     
    </div>
  )
}

export default NavigationBar

//   < React.Fragment >
//   <Router>
//     <Switch>
//       <Route exact path="/" component={Home} />
//       <Route path="/residents" component={Residents} />
//     </Switch>
//   </Router>
// </ >
