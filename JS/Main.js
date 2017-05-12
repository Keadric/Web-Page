// Javascript File

/* var BLOG_MODEL = {
	titles: [],
	contents: [],
	dates: [],
	authors: [],
	js_stamp: "Made in Javascript"
} */

console.log( data );


function renderBlog () {

	blogFiller();
	twitterFiller();
	$("#header-text").text("Brett's Blog");

}

function renderAbout () {
    
    renderBlank();
    $("#header-text").text("About");
    
    
}





function renderBlank () {
    
    
    $("#content")
        .empty()
        .append([
        
            $("<p></p>")
            .text( "Sorry! This Section is under construction" )
            .attr( "id", "error" )
        
        
        ]);
    

    
}

function blogFiller () {
	
	$("#content").empty();
	var blogSection = $("<section></section>")
		.attr( "class", "blog-container col-xs-9 col-sm-9 col-md-9 col-lg-9" );
	
	// Retreive Blog Data
	var BLOG_POSTS = data.blog_posts;
	console.log( BLOG_POSTS );
	
	// Fill Web Page With Blog Data
	BLOG_POSTS.forEach( function( blog ) {
		
		console.log( blog );
		var title = $("<header></header>")
			.text( blog.title )
			.attr("class", "blog-header");
		
		var lineBreak = $("<hr />");
		
		var body = $("<section></section>")
			.text( blog.content )
			.attr("class", "blog-body");
		
		var footer = $("<footer></footer>")
			.text( blog.date + " | " + blog.author)
			.attr("class", "blog-footer");
		
		var blogFull = $("<div></div>")
			.append( [title, lineBreak, body, footer] )
			.attr("class", "blog-post");
		
		blogSection.append( blogFull );
		
	});
	
	$("#content").append( blogSection );
	
}

function twitterFiller () {
	
	var twitterSection = $("<section></section>")
		.attr( "class", "twitter-container col-xs-3 col-sm-3 col-md-3 col-lg-3" );
	
	var twitterLink = $("<a></a>")
		.attr( "class", "twitter-timeline" )
		.attr( "href", "https://twitter.com/BrettGameDev" )
		.text( "Tweets by BrettGameDev" );
		
	var twitterScript = $("<script></script>")
		.attr( "async", "true" )
		.attr( "src", "https://platform.twitter.com/widgets.js" )
		.attr( "charset", "utf-8" );
	
	twitterSection.append( [ twitterLink, twitterScript ] );
	
	$("#content").append( twitterSection );
	
}




/*
$(document).ready (function () {
	
	// Fill Page on Load
	// console.log( data );
	
	mainFiller();
	
	
});
*/


