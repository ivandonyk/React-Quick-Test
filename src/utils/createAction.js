export default (type, payload = {}, error = false) => {
	return {
		type,
		payload,
		error,
	};
};
