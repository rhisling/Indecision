import React from 'react';
import ReactDOM from 'react-dom';

import AddOption from './components/AddOption';
import Header from './components/Header';
import Action from './components/Action';
import Options from './components/Options';

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this
      .handleDeleteOptions
      .bind(this);
    this.handlePick = this
      .handlePick
      .bind(this);
    this.handleAddOption = this
      .handleAddOption
      .bind(this);
    this.handleDeleteOption = this
      .handleDeleteOption
      .bind(this)
    this.state = {
      options: []
    };
  }

  componentDidMount() {
    try {
      const options = JSON.parse(localStorage.getItem('options'));
      if (options) {
        this.setState(() => ({options: options}));
      }
    } catch (error) {}

  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
      console.log('saving data');
    }
  }

  componentWillUnmount() {}

  handleDeleteOptions() {
    this.setState(() => ({options: []}));
  }

  handleDeleteOption(optionToRemove) {
    console.log('hdo', optionToRemove);
    this.setState((prevState) => ({
      options: prevState
        .options
        .filter(option => option !== optionToRemove)
    }));
  }

  handlePick() {
    const randNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randNum];
    alert(option);
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    this.setState((prevState) => ({
      options: [
        ...prevState.options,
        option
      ]
    }));
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}/>
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}/>
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    );
  }
}

ReactDOM.render(
  <IndecisionApp/>, document.getElementById("app"));
