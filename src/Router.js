import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene>
          <Scene key="login" component={LoginForm} title="Please Login" initial />
        </Scene>
        <Scene>
          <Scene key="employeeList" component={EmployeeList} title="Employees" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
