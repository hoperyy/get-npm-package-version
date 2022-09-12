'use strict';

const { expect } = require('chai');
const getVersion = require('../index');

describe('test webpack and webpackxxx', function () {
  it('test webpack', function () {
    const version = getVersion('webpack');
    expect(version).to.be.not.equal(null);
  }).timeout(10 * 1000);

  it('test webpackxxx(not exists)', function () {
    const version = getVersion('webpackxxx', {
      timeout: 100
    });
    expect(version).to.be.equal(null);
  }).timeout(10 * 1000);

  it('test webpack xxx(not exists)', function () {
    const version = getVersion('webpack xxx', {
      timeout: 100
    });
    expect(version).to.be.equal(null);
  }).timeout(10 * 1000);

  it('test webpack\\nxxx(not exists)', function () {
    const version = getVersion('webpack\nxxx', {
      timeout: 100
    });
    expect(version).to.be.equal(null);
  }).timeout(10 * 1000);

  // test defence attack
  it('test defence Command Injection Attack', function () {
    const version = getVersion('get-npm-package-version; echo hehe; npm view get-npm-package-version', {
      timeout: 100
    });
    expect(version).to.be.equal(null);
  }).timeout(10 * 1000);
});

describe('export', function () {
  it('named getNpmPkgVersion export refers to default', function () {
    expect(getVersion).to.be.eq(getVersion.getNpmPkgVersion);
  });
});
