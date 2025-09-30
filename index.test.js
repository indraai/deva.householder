"use strict";
// Copyright ©2025 Quinn A Michaels; All rights reserved. 
// Legal Signature Required For Lawful Use.
// Distributed under VLA:69482121463308316711 LICENSE.md
// Householder Deva test file

const {expect} = require('chai')
const HouseholderDeva = require('./index.js');

describe(HouseholderDeva.me.name, () => {
  beforeEach(() => {
    return HouseholderDeva.init()
  });
  it('Check the DEVA Object', () => {
    expect(HouseholderDeva).to.be.an('object');
    expect(HouseholderDeva).to.have.property('agent');
    expect(HouseholderDeva).to.have.property('vars');
    expect(HouseholderDeva).to.have.property('listeners');
    expect(HouseholderDeva).to.have.property('methods');
    expect(HouseholderDeva).to.have.property('modules');
  });
})
