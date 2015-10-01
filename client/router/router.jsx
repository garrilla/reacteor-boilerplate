const {Router, Route, IndexRoute} = ReactRouter;

const history = ReactRouter.history.useQueries(ReactRouter.history.createHistory)()

Meteor.startup(function() {
  React.render((
    <Router history={history}>
      <Route path="/" component={ApplicationLayout}>
        <IndexRoute component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </Route>
    </Router>
  ), document.body);
});
