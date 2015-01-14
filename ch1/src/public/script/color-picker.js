colorPickerApp.directive('colorPicker', function(){
	return {
		scope: {
			r: '@initR',
			g: '@initG',
			b: '@initB',
			a: '@initA',
			onChange: '&'
		},
		templateUrl: 'colorPickerTemplate.html',
		retrict: 'E',
		link: function(scope, element, attrs){
			var COLORS = ['r','g','b','a'];
			
			COLORS.foreach(function(value){
				scope.$watch(value, function(newValue,oldValue){
					if(newValue !== oldValue){
						if(angular.isFunction(scope.onChange)){
							scope.onChange(generateColorChangeObject());
						}
					}
				});
			});
			
			var generateColorChangeObject = function(){
				var obj = {};
				
				COLORS.forEach(function(value){
					obj[value] = scope[value];
				});
				
				return obj;
				
			};
		}
	};
});