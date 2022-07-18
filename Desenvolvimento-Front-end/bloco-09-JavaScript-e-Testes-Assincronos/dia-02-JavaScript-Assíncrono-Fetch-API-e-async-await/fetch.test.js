const fetch = require('node_fetch');
const { fetchJoke } = require('./fetch.js');

test('should first', async () => { 
    expect(await fetchJoke()).toEqual(json.name);
 })