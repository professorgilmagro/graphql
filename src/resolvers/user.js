const profiles = require('../data/user-levels.json');

module.exports = {
	profile: user => {
		const results = profiles.filter(
			p => p.id === parseInt(user.profile_id)
		);
		return results ? results[0] : null;
	}
};
