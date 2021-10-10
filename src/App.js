import Contact from "./components/contact";
import Education from "./components/education";
import {BrowserRouter, Route ,Switch } from "react-router-dom";
import { useState , useEffect} from "react";
 
function App() {

  const themes=["white","powderblue","tomato"];
  const[themeId, setThemeId]=useState(0);
 const switchTheme = () => {
  setThemeId((id) => (id+1)%3);
 }
 const handleKeydown = (event)=> {
  switch(event.key){
    case "0":
    case "1":
    case "2":
   setThemeId(parseInt(event.key)); 
    break;
 } }
 

  useEffect(
   ()=> {
     window.addEventListener("keydown",handleKeydown);
  }
  );
  return (
    <div style={{backgroundColor:themes[themeId]}}>
            <header>
            <div><button onClick={switchTheme}>  Coloring </button></div>
      </header>
      <main>
        <h3> Aqilah Almohsen</h3>
        <BrowserRouter>
        <Switch>
        <Route path="/Contact">
        <Contact />
        </Route>

        <Route path="/Education">
        <Education />
        </Route>
 

         <Route path="/Contact/par1">
        <Contact par={1}/>
        </Route>

        <Route path="/Education/par1">
        <Education par={1} />
        </Route>
        </Switch>
        </BrowserRouter>
      </main>
    </div>
  );
  }
export default App;
