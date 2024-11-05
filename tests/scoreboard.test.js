const Scoreboard = require("../src/scoreboard");

describe("Scoreboard", () => {
	it("should start a new match", () => {
		const scoreboard = new Scoreboard();
		scoreboard.startMatch("Mexico", "Canada");
		expect(scoreboard.matches.length).toBe(1);
	});

	it("should update score", () => {
		const scoreboard = new Scoreboard();
		scoreboard.startMatch("Mexico", "Canada");
		scoreboard.updateScore("Mexico", "Canada", 0, 5);
		expect(scoreboard.matches[0].homeScore).toBe(0);
		expect(scoreboard.matches[0].awayScore).toBe(5);
	});
});
