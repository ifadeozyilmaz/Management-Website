import React, { Fragment } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { RouteTypes } from '../../enums';
import { SignIn } from '../SignIn/signIn';
import { SignUp } from '../SignUp/signUp';
import { Home } from '../HomePage/home';
import Management from '../ManagementPage/management';
import Task from '../Task/task';
import CalendarPage from '../CalendarPage/calendar';
import ProjectList from '../ProjectPage/projectList';
import ProjectDetail from '../ProjectPage/projectDetail';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path={RouteTypes.Home} Component={Home}/>
        <Route path={RouteTypes.SignIn} Component={SignIn}/>
        <Route path={RouteTypes.SignUp} Component={SignUp}/>
        <Route path={RouteTypes.Management} Component={Management}/>
        <Route path={RouteTypes.Task} Component={Task}/>
        <Route path={RouteTypes.Calendar} Component={CalendarPage}/>
        <Route path={RouteTypes.Project} Component={ProjectList}/>
        <Route path={RouteTypes.ProjectDetail} Component={ProjectDetail}/>
      </Routes>
    </Fragment>
  );
}

export default App;
