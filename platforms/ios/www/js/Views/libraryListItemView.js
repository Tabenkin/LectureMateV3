var LibraryListItemView = Backbone.View.extend({

	tagName: 'li',
	className: 'library-list-item-view',
	render: function()
	{
		var template = $("#library-list-item-template").html();
		this.$el.html(_.template(template, { audioTrack: this.model }));

	}

})