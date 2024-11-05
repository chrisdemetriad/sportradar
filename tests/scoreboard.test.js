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

	it("should finish a match", () => {
		const scoreboard = new Scoreboard();
		scoreboard.startMatch("Mexico", "Canada");
		scoreboard.finishMatch("Mexico", "Canada");
		expect(scoreboard.matches.length).toBe(0);
	});

	it("should get summary", () => {
		const scoreboard = new Scoreboard();
		scoreboard.startMatch("Mexico", "Canada");
		scoreboard.updateScore("Mexico", "Canada", 0, 5);
		scoreboard.startMatch("Spain", "Brazil");
		scoreboard.updateScore("Spain", "Brazil", 10, 2);
		const summary = scoreboard.getSummary();
		expect(summary).toEqual(["Spain 10 - Brazil 2", "Mexico 0 - Canada 5"]);
	});

	it("shouldn't be able to start duplicate matches", () => {
		const scoreboard = new Scoreboard();
		scoreboard.startMatch("Mexico", "Canada");
		scoreboard.startMatch("Mexico", "Canada");
		expect(scoreboard.matches.length).toBe(1);
	});

	it("shouldn't be able to update a non-existent match", () => {
		const scoreboard = new Scoreboard();
		scoreboard.updateScore("Mexico", "Canada", 0, 5);
		expect(scoreboard.matches.length).toBe(0);
	});

	it("shouldn't be able to finish a non-existent match", () => {
		const scoreboard = new Scoreboard();
		scoreboard.finishMatch("Mexico", "Canada");
		expect(scoreboard.matches.length).toBe(0);
	});

	it("should return an empty summary when there aren't any matches", () => {
		const scoreboard = new Scoreboard();
		const summary = scoreboard.getSummary();
		expect(summary).toEqual([]);
	});
});
