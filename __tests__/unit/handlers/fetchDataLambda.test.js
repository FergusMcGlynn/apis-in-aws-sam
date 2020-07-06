const lambda = require('../../../src/handlers/fetchDataLambda.js');

describe('Test for fetchDataLambda', function () {

    it('Verifies successful response', async () => {

        const callback = jest.fn();

        await lambda.handler({}, {}, callback);

        const expectedResult = {
            statusCode: 200,
            body: JSON.stringify([ {name: 'History'}, {name: 'Biology'}, {name: 'English'} ])
        };

        expect(callback.mock.calls.length).toEqual(1);
        expect(callback.mock.calls[0][1]).toEqual(expectedResult);

    });
});
