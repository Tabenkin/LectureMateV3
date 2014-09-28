var FooterView = Backbone.View.extend({
	
	id: 'footer-view',

	render: function()
	{
		var template = $("#footer-template").html();
		this.$el.html(_.template(template ));
	}



})