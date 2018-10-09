var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}marked.setOptions({
  breaks: true });


var renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return '<a target="_blank" href="' + href + '">' + text + '</a>';
};var

Main = function (_React$Component) {_inherits(Main, _React$Component);
  function Main(props) {_classCallCheck(this, Main);var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this,
    props));
    _this.state = {
      full1: '',
      displayNone1: '',
      full2: '',
      displayNone2: '',
      textareaValue: placeholder };

    _this.resizeEditor = _this.resizeEditor.bind(_this);
    _this.resizePreview = _this.resizePreview.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);return _this;
  }_createClass(Main, [{ key: 'resizeEditor', value: function resizeEditor()

    {
      if (this.state.full1 == '') {
        this.setState({ full1: 'wrapFull', displayNone2: 'displayNone' });
      } else {
        this.setState({ full1: '', displayNone2: '' });
      }
    } }, { key: 'resizePreview', value: function resizePreview()

    {
      if (this.state.full2 == '') {
        this.setState({ full2: 'wrapFull', displayNone1: 'displayNone' });
      } else {
        this.setState({ full2: '', displayNone1: '' });
      }
    } }, { key: 'handleChange', value: function handleChange(

    event) {
      this.setState({ textareaValue: event.target.value });
      //React.findDOMNode(this.refs.preview).value=this.state.textareaValue;
      //change();
      //document.getElementById("preview").innerHTML = marked(this.state.textareaValue);
    } }, { key: 'getMarkdownText', value: function getMarkdownText()

    {
      var rawMarkup = marked('This is _Markdown_.', { sanitize: true });
      return { __html: rawMarkup };
    }
    /*
      componentDidMount: function () {
        //let name = React.findDOMNode(this.refs.cpDev1).value;
      }
      */ }, { key: 'render', value: function render()
    {
      return (
        React.createElement('div', null,
          React.createElement('div', { className: 'editorWrap ' + this.state.full1 + ' ' + this.state.displayNone1 },
            React.createElement('div', { className: 'titleBar' }, React.createElement('i', { className: 'fa fa-free-code-camp' }), ' Editor ', React.createElement('i', { className: this.state.full1 == 'wrapFull' ? 'fa fa-compress btnResize' : 'fa fa-arrows-alt btnResize', onClick: this.resizeEditor })),
            React.createElement('textarea', { id: 'editor', className: this.state.full1 && 'textareaHeight', onChange: this.handleChange }, this.state.textareaValue)),


          React.createElement('div', { className: 'previewWrap ' + this.state.full2 + ' ' + this.state.displayNone2 },
            React.createElement('div', { className: 'titleBar' }, React.createElement('i', { className: 'fa fa-free-code-camp' }), ' Previewer ', React.createElement('i', { className: this.state.full2 == 'wrapFull' ? 'fa fa-compress btnResize' : 'fa fa-arrows-alt btnResize', onClick: this.resizePreview })),
            React.createElement(Preview, { markdown: this.state.textareaValue }))));



    } }]);return Main;}(React.Component);


var Preview = function Preview(props) {
  return (
    React.createElement('div', { id: 'preview', dangerouslySetInnerHTML: { __html: marked(props.markdown, { renderer: renderer }) } }));

};var

App = function (_React$Component2) {_inherits(App, _React$Component2);function App() {_classCallCheck(this, App);return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));}_createClass(App, [{ key: 'render', value: function render()
    {
      return (
        React.createElement('div', null,
          React.createElement(Main, null)));


    } }]);return App;}(React.Component);


var placeholder = '# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here\'s some other cool stuff:\n  \nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == \'```\' && lastLine == \'```\') {\n    return multiLineCode;\n  }\n}\n```\n  \nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere\'s also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let\'s not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n';















































ReactDOM.render(React.createElement(App, null), document.getElementById('app'));