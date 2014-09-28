var Router = Backbone.Router.extend({

	routes:
	{
		'' : 'home'
	
	},

	home:function()
	{
		var headerView = new HeaderView();
		headerView.renderMainHeader();

		var footerView = new FooterView();
		footerView.render();

		var data = this.getLibrary();
		var library = new Library(data, { parse: true});

		var libraryListView = new LibraryListView({ collection: library });
		libraryListView.render()
		
		$("#body").html("");
		$("#header").html(headerView.el);
		$("#body").html(libraryListView.el);
		$("#footer").html(footerView.el);
	},

	getLibrary: function()
	{

		var library = [
						{ 
							name: 'The History of Philosophy Part 1',
							trackLength: '4:10',
							lastPlaybackPosition: '3:50',
							sortOrder: 1
						},

						{ 
							name: 'The History of Philosophy Part 3',
							trackLength: '4:10',
							lastPlaybackPosition: '3:50',
							sortOrder: 3
						},

						{ 
							name: 'The History of Philosophy Part 2',
							trackLength: '4:10',
							lastPlaybackPosition: '3:50',
							sortOrder: 2
						},
					];


		return library;
	}


})