const React = require("react");
const Info = require("./Info.jsx");
const FormAdd = require("./FormAdd.jsx");
const Block = require("./Block.jsx");
const Post = require("./Post.jsx");
const { Route, Switch } = require("react-router");
const Header = require("./Header.jsx");
const FormEdit = require("./FormEdit.jsx");

const AppView = () => {
    return <div>
        <Header />
        <Switch>
            <Route exact path="/" component={Info} />
            <Route path="/post/add" component={FormAdd}/>
            <Route path="/post/edit/:id" component={FormEdit} />
            <Route path="/post/:id" component={Post} />
            <Route path="/post" component={Block}/>
        </Switch>
    </div>;
}

module.exports = AppView;