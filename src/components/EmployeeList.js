import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, Text } from 'react-native';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
  }

  render() {
    return (
      <FlatList
        data={this.props.employees}
        renderItem={({ item }) => <Text>{item.name}</Text>} // Only for test
      />
    );
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (val, uid) => ({ ...val, uid }));
  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
