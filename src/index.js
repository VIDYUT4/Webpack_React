require('file-loader?name=[name].[ext]!./index.html')
import React from "react";
import ReactDom from "react-dom";
import App from "./app";
import './app.scss'

const container = document.getElementById('root');

ReactDom.render(<App/>, container)