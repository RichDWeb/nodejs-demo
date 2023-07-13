// *******************************************************************
// "Routes" to forward the supported requests (and any information 
// encoded in request URLs) to the appropriate controller functions.
// *******************************************************************
// import my GET API from the controller functions
import { home } from '../controllers/controller.js';

// set up the routing
const routes = (app) => {
    // home page
    app.route('/')
        .get(home)
}

// export the route
export default routes;