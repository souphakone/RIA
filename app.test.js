const removeSNames = require('./app');
describe('removeSName',() => {
    //Test 1
    it('should remove all S names',  () =>  {

        const names = ['Apple', 'Strawberry', 'Star fruit'];
        expect(removeSNames(names)).not.toContain('Strawberry');
        expect(removeSNames(names)).not.toContain('Star fruit');
    });

    //Test 2
    it('should remove other names', () =>  {
        const names = ['Apple','Strawberry','PineApple'];
        expect(removeSNames(names)).toContain('Apple');
        expect(removeSNames(names)).toContain('PineApple');
    });

    //Test 3
    it('should mind', () =>  {
        const names = ['Apple','Strawberry','PineApple', 'strawberry'];
        expect(removeSNames(names)).not.toContain('Strawberry');
        expect(removeSNames(names)).not.toContain('strawberry');
    });
});