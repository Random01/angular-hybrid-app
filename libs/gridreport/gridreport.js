angular
	.module('gridReport', []);

angular
	.module('gridReport')
	.directive('gfSimple', [
		function () {
			return {
				restrict: 'E',
				scope: {
					message: '='
				},
				template: '<div>{{message}}</div>'
			};
		}
	])
	.factory('gfManagementService', function () {
		return {
			showDialog: function (message) {
				alert(message);
			}
		};
	});