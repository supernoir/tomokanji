const baseUrl = 'http://localhost:8080';

describe('App', function() {
	it('handles a click on random', function() {
		cy.visit(baseUrl);
		cy.contains('Random 運').click();
	});
	it('handles a click on next', function() {
		cy.visit(baseUrl);
		cy.contains('Next 次 ›').click();
	});
	it('handles a click on previous', function() {
		cy.visit(baseUrl);
		cy.contains('Next 次 ›').click();
		cy.contains('‹ 前 Previous').click();
	});
});
