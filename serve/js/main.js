var WS = (function(api) {
	var conn;

	function reconnect() {
		conn = new WebSocket('ws'+window.location.origin.substring(4))

		conn.onopen = function() {
			console.log('connnected')
		};

		conn.onclose = function() {
			console.log('closed');
			setTimeout(reconnect, 3000);
		};

		conn.onmessage = function(e) {
			var data = window.JSON.parse(e.data);
			var method = data[0], options = data[1];
			console.log(method, options);
			api[method](options);
		};
	}

	reconnect();

	ret = {
		send: function(message) {
			conn.send(message);
		}
	};
	return ret;
});


var ws = WS({
	put: function (options) {
		panels[current] = options.data;
		layout.setProps({panels: panels});
	},
	split: function (options) {
        panels.push(options.data);
        current += 1;
		layout.setProps({panels: panels});
	},
});
