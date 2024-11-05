class Scoreboard {
	constructor() {
		this.matches = [];
	}

	startMatch(homeTeam, awayTeam) {
		const existingMatch = this.matches.find(
			(m) => m.homeTeam === homeTeam && m.awayTeam === awayTeam,
		);
		if (existingMatch) {
			return;
		}

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
		return this.matches
			.slice()
			.sort((a, b) => {
				const totalScoreA = a.homeScore + a.awayScore;
				const totalScoreB = b.homeScore + b.awayScore;
				return totalScoreB - totalScoreA;
			})
			.map(
				(m) => `${m.homeTeam} ${m.homeScore} - ${m.awayTeam} ${m.awayScore}`,
			);
	}
}

module.exports = Scoreboard;
