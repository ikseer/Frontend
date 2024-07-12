describe("login spec", () => {
	beforeEach(() => {
		cy.visit("/login");
	});

	it("gives error with wrong credentials", () => {
		cy.get("input[name='username']").type("wrong");
		cy.get("input[name='password']").type("wrong");
		cy.get("button[type='submit']").click();

		cy.url().should("include", "/login");
		cy.contains("credentials");
	});

	it("gives error with empty credentials", () => {
		cy.get("button[type='submit']").click();
		cy.contains("required", {
			matchCase: false,
		});
	});

	it("login with right username and password", () => {
		cy.get("input[name='username']").type("admin");
		cy.get("input[name='password']").type("admin");
		cy.get("button[type='submit']").click();
		cy.url().should("not.include", "/login");
	});
});
