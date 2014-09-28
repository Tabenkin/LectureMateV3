var Library = Backbone.Collection.extend({

	parse: function(data)
	{
		var library = new Array(); 

		$(data).each(function(){
			var audioTrack = new AudioTrack(this, { parse: true });
			library.push(audioTrack);
		})

		return library;
	}

})