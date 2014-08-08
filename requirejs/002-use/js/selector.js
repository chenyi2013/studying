define(function () {
	function getById (id) {
		return document.getElementById(id);
	}

	return getById;

	return {
		getById ( id ) {
			return document.getElementById( id );
		}
	};
});