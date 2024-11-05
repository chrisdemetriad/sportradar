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
			startTime: new Date(),
		};
		this.matches.push(match);
	}

	updateScore(homeTeam, awayTeam, homeScore, awayScore) {
		const match = this.matches.find(
			(m) => m.homeTeam === homeTeam && m.awayTeam === awayTeam,
		);
		if (match) {
			match.homeScore = homeScore;
			match.awayScore = awayScore;
		}
	}

	finishMatch(homeTeam, awayTeam) {
		this.matches = this.matches.filter(
			(m) => !(m.homeTeam === homeTeam && m.awayTeam === awayTeam),
		);
	}

	getSummary() {
		return this.matches.map(
			(m) => `${m.homeTeam} ${m.homeScore} - ${m.awayTeam} ${m.awayScore}`,
		);
	}
}

module.exports = Scoreboard;
