describe('The question list', () => {
	beforeEach(() => {
		console.log("Before Each")
	})
	beforeAll(() => {
		console.log("Before All")
	})
	afterEach(() => {
		console.log("After Each")
	})
	afterAll(() => {
		console.log("After all")
	})
	it.only('should display a list of items', () => {
		expect(2+2).toEqual(4)
	})
	it('should br the meaning of the life', () => {
		expect(2+4).toEqual(6)
	})
})