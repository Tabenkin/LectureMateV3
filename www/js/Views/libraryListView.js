var LibraryListView = Backbone.View.extend({

	id: 'library-list-view',
	tagName: 'ul',

	render:function()
	{
	
		var that = this;

		this.collection.each(function(model)
		{
			var libraryListItemView = new LibraryListItemView({ model: model });
			libraryListItemView.render();

			that.$el.append(libraryListItemView.el);

		})

	}


})