
// console.log( sortProjects( data.projects ) );


// Renders Blog Page
function renderBlog () {

	blogBox();
	twitterBox();
	renderHeader( "Blog" );

}

// Renders the About Page
function renderAbout () {

    renderBlank();
    renderHeader( "About" );

}

// Sorts Projects and Inserts the top 3 in the Navagation Bar
function fillDropdownMenu () { 

    var liElem = "<li>", liElemClose = "</li>", linkElemClose = "</a>";
    var dropdownMenu = document.getElementById("dropdown");
    var projectList = sortProjects( data.projects );
    var insertStr = "";
    
        // console.log( "Drop Down: ", projectList );
    
    dropdownMenu.innerHTML = "";
    
    // Get the 3 most popular Projects
    for ( idx = 0; idx < 3 ; idx++ ) {
        var projectLink = "<a hre'javascript:void(0) onclick='renderProject( " + projectList[ idx ].id + " )'>";
        var projectName = projectList[ idx ].name;
        
        projectLink = liElem + projectLink + projectName + linkElemClose + liElemClose;
        insertStr += projectLink;
            // console.log( insertStr );
    }

    insertStr += "<li><a href='javascript:void(0)' onclick='renderBlank()' style='color: #AAAAAA;'> All Projects </a></li>";
    dropdownMenu.innerHTML = insertStr;

}

// Numerical Sort of Project Ratings
function sortProjects ( projectList ) { 

    return projectList.sort( function ( a, b ) { 
        // console.log( "A: ", a.rating, "B: ", b.rating ); 
        return b.rating - a.rating; 
    });

}

// Renders Project To Content Div
function renderProject ( projectId, mainPage ) { 

    var content = document.getElementById("content");
    content.innerHTML = "";
    project = data.projects.find( function( project ){ return project.id == projectId; });
    
    var contentProject = $("<iframe></iframe>")
                                .attr( "src", project.url )
                                .attr( "class", "frameCont project-container col-xs-12 col-sm-12 col-md-12 col-xl-12" )
                                .attr( "height", "600px" )
    ;
    
    $("#content").append( contentProject );
    if ( mainPage != true ) { renderHeader( project.name ) }
    else { renderHeader("Clever Remark!!!") };

}

// Renders Landing Page
function renderMainPage () { 

    var content = document.getElementById("content");
    var navbarHeader = document.getElementById("navbar-header");
    var projectList = sortProjects( data.projects );
    var navbarStr = "<a class='navbar-brand' href='javascript:void(0)' onclick='renderProject( " 
                        + projectList[0].id 
                        + ", "
                        + true
                        + " )'>"
                        + projectList[0].name
                        + "</a> " 
    ;
    
    content.innerHTML = "", navbarHeader.innerHTML = "";
    
    renderProject( projectList[0].id, true );
    renderHeader( "Hello There!" );
    navbarHeader.innerHTML = navbarStr;



}

// Renders The Unique Header of Each Page
function renderHeader ( header ) { 
    document.getElementById("header-text").innerHTML = header; 
}





// A Message for Pages that have no Content
function renderBlank () {
    $("#content")
        .empty()
        .append([
            $("<p></p>")
                .text( "Sorry! This Section is under construction" )
                .attr( "id", "error" )
        ]);
}

// Creates the Blog
function blogBox () {
	
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

// Adds Twitter To the Page
function twitterBox () {
	
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




$(document).ready (function () {
	
	
    renderMainPage();
    
    fillDropdownMenu();
	
});


