
var panels = ['initial'];
var current = 0;


var Layout = React.createClass({
	mixins: [PackeryMixin('container', {
		// columnWidth: '.item',
		// rowHeight: 20,
		})],

  render: function() {
    var panels = this.props.panels.map(function(panel) {
      return (
        <Panel panel={panel} />
      );
    });
    return (
			<div ref="container">
				{panels}
			</div>
    );
  }
});


var Panel = React.createClass({
  render: function() {
	  var html = hljs.highlightAuto(this.props.panel).value;
    return (
			<div className="item">
					<pre>
					<code>
					<span dangerouslySetInnerHTML={{__html: html}} />
					</code>
					</pre>
			</div>
    );
  }
});


var layout = React.render(<Layout panels={panels} />, document.body);
