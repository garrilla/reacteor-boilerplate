ApplicationLayout = React.createClass({
  render(){
    return (
      <div id="app">
      <h1>*Application Layout*</h1>
        {this.props.children}
      </div>
    )
  }
});
