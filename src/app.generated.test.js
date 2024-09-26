import renderer from 'react-test-renderer';
import React, { useState } from "react";
import InputField from "./common/InputField";
import App from "./app";

jest.mock("./common/InputField");

const renderTree = tree => renderer.create(tree);
describe('<App>', () => {
  it('should render component', () => {
    expect(renderTree(<App 
    />).toJSON()).toMatchSnapshot();
  });
  
});