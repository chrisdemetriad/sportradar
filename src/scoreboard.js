class Scoreboard {
	constructor() {
		this.matches = [];
	}

	startMatch(homeTeam, awayTeam) {
		const match = {
			homeTeam,
			awayTeam,
			homeScore: 0,
			awayScore: 0,
		};
		this.matches.push(match);
	}

	getSummary() {
		return this.matches.map(
			(m) => `${m.homeTeam} ${m.homeScore} - ${m.awayTeam} ${m.awayScore}`,
		);
	}
}

module.exports = Scoreboard;
