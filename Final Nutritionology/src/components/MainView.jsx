const React = require("react");
const About = require("./About.jsx");
const Individual = require("./Individual.jsx");
const Main = require("./Main.jsx");
const Personal = require("./Personal.jsx");
const Services = require("./Services.jsx");

const MainView = () => {

    return <>
        <About />
        <Individual />
        <Main />
        <Personal />
        <Services />
    </>
}

module.exports = MainView;