const path = require('path');
const fs = require('fs');

const { expect } = require('chai');
const getVersion = require('../index');

describe('test webpack and webpackxxx', () => {
    it('test webpack', () => {
        const version = getVersion('webpack');
        expect(version).to.be.not.equal(null);
    }).timeout(10 * 1000);

    it('test webpackxxx(not exists)', () => {
        const version = getVersion('webpackxxx', {
            timeout: 100
        });
        expect(version).to.be.equal(null);
    }).timeout(10 * 1000);
});