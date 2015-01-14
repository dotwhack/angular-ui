bmApp.controller('BookListCtrl', function ($scope, $filter) { 
    $scope.books = [ 
		{
		    title : 'CoffeeScript',
		    isbn : '978-3-86490-050-1',
		    author : 'Andreas Schubert'
		},
        {
            title : 'JavaScript for Enterprise Developers',
            isbn : '978-3-89864-728-1',
            author : 'Oliver Ochs'
        },
        {
             title : 'Node.js & Co.',
             isbn : '978-3-89864-829-5',
             author : 'Golo Roden'
        }
        
    ];
    $scope.getBookOrder = function(book){
    	return book.title;
    };
    
    var orderBy = $filter('orderBy');
    
    var titles = $scope.books.map(function(book){
    	return {title: book.title};
    });
    
    console.log('titles before ordering', titles);
    
    titles = orderBy(titles, 'title');
    
    console.log('titles after ordering', titles);
    
});