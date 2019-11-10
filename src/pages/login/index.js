import React, {Component} from 'react';
import {connect} from 'react-redux'
import {actionCreators} from './store'
import {Redirect} from 'react-router-dom'

import './index.less'

class Login extends Component {
    render() {
        const {loginStatus} = this.props;
        if(!loginStatus){
            return (
                <div className='loginPage'>
                    <input className='box' type='text' placeholder='用户名' ref={(input) => {this.account = input}}/>
                    <input className='box' type='password' placeholder='密码' ref={(input) => {this.password = input}}/>
                    <input className='box' type='button' value='登录' onClick={() => this.props.login(this.account, this.password)}/>
                </div>
            )
        }else{
            return <Redirect to='/' />
        }
        
    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
    login(account, password){
        console.log(account.value, password.value);
        const name = account.value; 
        const secret = password.value; 
        var action = actionCreators.login(name, secret);
        dispatch(action);
    }
})
export default connect(mapState, mapDispatch)(Login);