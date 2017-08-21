$(window).load(function() {
	
	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.bp_paint_item',
	  //layoutMode: 'fitRows',
	  getSortData: {
		//name: '[data-sort-by]',
		category: '[data-category]'
	  }
	});
	
	// bind filter button click
	$('.filter_main_cat').on( 'click', function() {
	  var filterValue = $( this ).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});
	
	
});

$(document).ready(function(){
	
	function handleResize() {
	var h = $(window).height();
		k = h - 100;
			$('.bp_banner_wrapper').css({'height':k+'px'});
	}
	$(function(){
			handleResize();
	
			$(window).resize(function(){
			handleResize();
		});
	});
	
	$(function(){
		var loader = $('#bp_preloader');
		var bar = $('#bp_preloader_bar');
		var max_width = loader.width();
		var time = 3000; // Time of the animation (3 sec.)
		
		// Sets the bar width to 0
		bar.width(0);
		
		bar.animate({
			width: max_width
		}, time);
	  
	});
	
	$(".bp_main_nav ul li a").click(function(e) {
		if ( $(window).width() > 790) { 
		return false;
		}
		else{ }
	});
	
	$('.bp_breadcrumbs_title').click(function(){
		$('.bp_breadcrumbs ul').slideToggle();
		icon = $(this).find("i");
  		icon.toggleClass("fa-angle-up fa-angle-down")	
	});
	
	
	$('.bp_banner_slider_container').flexslider({
		animation: "slide"
	});
	
	$('.bp_promo_slider').flexslider({
		animation: "slide",
	});
	
	$('.bp_selected_project_slider').flexslider({
		animation: "slide"
	});
	
	$('.bp_trend_select').click(function(){
		$('#bp_listed_trends .bp_trend_select').siblings().removeClass('active')
		$(this).addClass('active');
		$('.bp_home_content_holder').siblings().removeClass('active');
		$('#'+$(this).attr('name')).addClass('active');
		$('html,body').animate({ scrollTop: $(".bp_single_selected_trend").offset().top}, 'slow');
	});
	
	$('.bp_navmain li').mouseover(function(){
		if ( $(window).width() > 790) { 
			$('.bp_main_nav li').find('a').siblings().removeClass('active')
			$(this).find('.bp_main_nav a').addClass('active');
			$('.bp_submenu ul li').siblings().removeClass('active');
			$('#'+$(this).attr('name')).addClass('active');
			$('.bp_site_overlay').fadeIn('fast');
			$('.bp_site_search_container').fadeOut('fast');
		} else{
			
		}
	});
	
	$('.bp_linker').mouseleave(function(){
		$('.bp_main_nav li').removeClass('active');
		$('.bp_submenu ul li').removeClass('active');
		$('.bp_site_overlay').fadeOut('fast');
	});
	
	$('.bp_site_search_icon').click(function(){
		$('.bp_site_search_container').fadeToggle('fast');
		if ( $(window).width() > 790) { 
			$('.bp_submenu ul li').siblings().removeClass('active');
		} 
		else {
			$('.bp_main_nav').slideUp();
		}
	});
	
	$('.bp_site_search_close').click(function(){
		$('.bp_site_search_container').fadeOut();
		$('.bp_mobi_menu').find('.hamburger').removeClass('is-active');
	});
	
	$('.bp_mobi_menu').click(function(){
		$('.hamburger').toggleClass('is-active');
		$('.bp_main_nav').slideToggle();
	});
	
	$('.bp_single_main_color').click(function(){
		$('.bp_listed_main_color .bp_single_main_color').siblings().removeClass('active').find('img').fadeOut();
		$(this).find('img').fadeIn('active');
		$('.bp_single_pantone').siblings().removeClass('active');
		$('#'+$(this).attr('name')).addClass('active');
		
		var color = $(this).css('background-color');
		$('.bp_selected_color').css('background-color', color);
	});
	
	$('.bp_room_select').click(function(){
		$('.bp_image_filter_color .bp_room_select').siblings().removeClass('active');
		$(this).addClass('active');
		$('.bp_selected_room').siblings().removeClass('active');
		$('#'+$(this).attr('name')).addClass('active');
	});
	
	$('ul.bp_color_filter_color li').click(function() {
		var color = $(this).css('background-color');
		$('.bp_selected_color').css('background-color', color);
	});
	
	$('#bp_calc_trigger').click(function(){
		if ( $(window).width() > 790) { 
			$('.bp_calculator').fadeToggle();
			$('body').css('overflow-y','hidden');
		}
		else{
			$('.bp_calculator').slideToggle();
			$('html,body').animate({ scrollTop: $(".bp_calculator").offset().top}, 'slow');
		}
	});
	
	$('.bp_calc_close').click(function(){
		
		if ( $(window).width() > 790) { 
			$('.bp_calculator').fadeToggle();
			$('body').css('overflow-y','auto');
		}
		else{
			$('.bp_calculator').slideToggle();
		}
	});
	
	$('.bp_site_cart').click(function() {
		window.location.href = 'checkout.html';
	});
	$('#bp_confirmation').click(function() {
		window.location.href = 'checkout_confirmation.html';
	});
	
	
	
	
	$('.bp_product_filter .filter_main_cat').click(function(){
		
		$('.bp_desktop_product_filter_subs ul').siblings().removeClass('active');
		$('#'+$(this).attr('name')).addClass('active');
		
		$('.bp_product_filter').find('.filter_main_cat').removeClass('active');
		$(this).addClass('active');
		
	});
	
	
	
	
	
	

});