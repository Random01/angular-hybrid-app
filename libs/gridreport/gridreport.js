angular
	.module('gridReport', []);

angular
	.module('gridReport')
	.factory('gfManagementService', function () {
		return {
			showDialog: function (message) {
				alert(message);
			}
		};
	})
	.component('gfSimple', {
		bindings: {
			message: '<'
		},
		template: '<span>Message: {{$ctrl.message}}</span>'
	});