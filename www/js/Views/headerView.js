var HeaderView = Backbone.View.extend({

	id: 'header-view',

	renderMainHeader: function()
	{
		var template = $("#header-template").html();
		this.$el.html(_.template(template, { leftButtonID: 'editLibrary', leftButtonTitle:'Edit', headerTitle: 'Library', rightButtonID: 'nowPlaying', rightButtonTitle:'Now Playing' }));
	
		
	}


	
})