const Scoreboard = require("../src/scoreboard");

describe("Scoreboard", () => {
	it("should start a new match", () => {
		const scoreboard = new Scoreboard();
		scoreboard.startMatch("Mexico", "Canada");
		expect(scoreboard.matches.length).toBe(1);
	});
});
