function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}import React from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import ReactMarkdown from "https://cdn.skypack.dev/react-markdown@8.0.7";

const DEFAULT_INPUT = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == \'\`\`\`\' && lastLine == \'\`\`\`\') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: DEFAULT_INPUT };

    this.handleText = this.handleText.bind(this);
  }

  handleText(event) {
    const inputValue = event.target.value;
    this.setState({
      input: inputValue });

    this.props.handleText(inputValue);
  }

  render() {
    //console.log(this.state);
    return /*#__PURE__*/(
      React.createElement("div", { id: "editor-container" }, /*#__PURE__*/
      React.createElement("header", null, "Editor"), /*#__PURE__*/


      React.createElement("textarea", { id: "editor", value: this.state.input, onChange: this.handleText })));



  }}



class Previewer extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "receiveDataFromInput",





    data => {
      //console.log(data);
      this.setState({
        output: data });

    });this.state = { output: DEFAULT_INPUT };}

  render() {
    //console.log(this.state.output);

    return /*#__PURE__*/(
      React.createElement("div", { id: "container" }, /*#__PURE__*/
      React.createElement(Editor, { handleText: this.receiveDataFromInput }), /*#__PURE__*/

      React.createElement("div", { id: "preview-container" }, /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("header", null, "Previewer")), /*#__PURE__*/



      React.createElement("section", { id: "preview" }, /*#__PURE__*/
      React.createElement(ReactMarkdown, null, this.state.output)))));





  }}



const domContainer = document.querySelector('#container');
ReactDOM.render( /*#__PURE__*/React.createElement(Previewer, null), domContainer);