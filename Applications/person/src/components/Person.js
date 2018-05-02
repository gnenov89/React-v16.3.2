import React from 'react';
import classNames from 'classnames';

class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mode: undefined } ;
  }

  componentWillMount() {
    let mode;
    if (this.props.age > 70) {
      mode = 'old';
    } else if (this.props.age < 18) {
      mode = 'young';
    } else {
      mode = 'middle';
    }
    this.setState({ mode });
  }

  render() {
    return (
      <div className={ classNames('person', this.state.mode) }>
        { this.props.name } (age: { this.props.age })
      </div>
    );
  }
}

Person.defaultProps = age: "" };

export default Person;