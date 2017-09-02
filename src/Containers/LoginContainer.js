import React from 'react';
import Login from '../components/Login';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import withHandlers from 'recompose/withHandlers';
import { connect } from 'react-redux';
import { authenticate } from '../Actions';

const isAuthenticated = (authenticated, router) => {
  if (authenticated) router.push('/dashboard')
}

const LoginContainer = compose(
  lifecycle({
    componentWillMount() {isAuthenticated(this.props.authenticated, this.context.router)}
  }),
  withHandlers({
    authenticate: props => props.authenticate
  })
)(Login)

LoginContainer.contextTypes = {router: React.PropTypes.object}

const mapStateToProps = (state) => ({authenticated: state.authenticated})

export default connect(mapStateToProps, {authenticate})(LoginContainer)
