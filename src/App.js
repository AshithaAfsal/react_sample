import React from "react";
import About from "./component/About/About";
import Header from "./component/Header/Header";
import TodoApp from "./component/TodoApp/TodoApp";
import {BrowserRouter as Router,Route } from "react-router-dom";


const App = () => {
    return (
        // <> //for different parents
        //     {/* <Header />
        //     <About />
        //     <TodoApp /> */}
        //     <Router>
        //         <Header/>
        //         <Route path="/" component={TodoApp}/>
        //         <Route path="/about" component={About}/>
                
        //     </Router>
        // </>
        
        <Router>
            <Header/>
            <Route path="/" exact component={TodoApp}/>
            <Route path="/about" component={About}/>
            
        </Router>
    
    );
};
//const App =()=>  <TodoApp/>;
export default App;

// advance form
// export default ()=>  <TodoApp/>;
