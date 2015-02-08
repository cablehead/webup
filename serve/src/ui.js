
var rows = [
	['foo', 'bar', 'third'],
	['bottom'],
];


var Layout = React.createClass({
  render: function() {
    var rows = this.props.rows.map(function(row) {
      return (
        <Row row={row} />
      );
    });
    return (
			<div className="container-fluid">
				{rows}
			</div>
    );
  }
});


var Row = React.createClass({
  render: function() {
		var width = 12 / this.props.row.length;
		var className = "col-md-"+width;
    var panels = this.props.row.map(function(panel) {
      return (
				<div className={className}>
					<Panel panel={panel} />
				</div>
      );
    });
    return (
			<div className="row">
				{panels}
			</div>
    );
  }
});


var Panel = React.createClass({
  render: function() {
    return (
			<div className="panel panel-default">
				<div className="panel-body">
					{this.props.panel}
				</div>
			</div>
    );
  }
});


React.render(
  <Layout rows={rows} />, document.body
);
