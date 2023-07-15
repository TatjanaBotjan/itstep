
const React = require("react");
const Mobile = require("./Mobile.jsx");
const Logo = require("./Logo.jsx");
const Header = require("./Header.jsx");
const Main = require("./Main.jsx");
const About= require("./About.jsx");
const Services = require("./Services.jsx");
const Personal = require("./Personal.jsx");
const Individual = require("./Individual.jsx");
const Footer = require("./Footer.jsx");
const { Route, Switch } = require("react-router");

const AppView = () => {
    return <div>
        <Mobile/>
        <Logo />
        <Header />
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/personal" component={Personal} />
            <Route path="/individual" component={Individual} />
        </Switch>
        <Footer />
    </div>;
}

module.exports = AppView;