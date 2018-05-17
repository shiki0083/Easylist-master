
$(document).ready(() => {

	//use jQuery to iterate adding the close icon
	var txt = '<i class="glyphicon glyphicon-remove"></i>'
	$(".list p").each(function() {
		$(this).append(txt);
	});

	// for (i = 0; i < $(".list p").length; i++) {
	// 	$(".list p")[i].append(txt)
	// }

 	// doesn't work on added items
	// $('.glyphicon-star').on('click', event => {
	// 	$(event.currentTarget).toggleClass('active');
	// })
	// $('.glyphicon-remove').on('click', event => {
	// 	$(event.currentTarget).parent().remove();
	// })

	$(document).on("click", ".glyphicon-star", function() {
	  $(this).toggleClass("active");
	});
	$(document).on("click", ".glyphicon-remove", function() {
	  $(this).parent().remove();
	});


  // type="submit" will refresh page, so content added will disappear
  // either change type="submit" to type="button"
  // or use event.preventDefault();
  
	$('.btn').on('click', () => {
		// event.preventDefault();
		// var text = document.getElementById('todo').value();
		var text = $('#todo').val();
		var html = '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>'
		if (text != "") {
			$('.list').append(html);
			// text = ""; doesn't work
			$('#todo').val('');
		}
	})
})
