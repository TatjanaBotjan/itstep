const React = require("react");

const { Route, Switch } = require("react-router");
const Logo = require("./common/Logo.jsx");
const Header = require("./common/Header.jsx");
const Footer = require("./common/Footer.jsx");
/*8const MainView = require("./main/MainView.jsx");
const SearchView = require("./search/SearchView.jsx");
const SignUp = require("./auth/SignUp.jsx");
const SignIn = require("./auth/SignIn.jsx");*/


const AppView = () => {

    return <>
        <Logo />
        <Header />
        <Switch>
            <Route exact path="/" component={MainView} />
            <Route path="/search" component={SearchView} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
        </Switch>
        <Footer />
    </>;

}


module.exports = AppView;