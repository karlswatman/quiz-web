angular.module("app").factory("ConfigService", [
	function () {
		var service = {};

		service.apiBase =
			"http://quizappks-env.eba-kydcmgag.eu-west-2.elasticbeanstalk.com/";

		return service;
	},
]);
