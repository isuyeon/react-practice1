import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Practice1 extends Component {
    static defaultProps = {
        name: '홍길동',
        age: 12
    }
    static propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number
    }
    state = {
        number: 20,
        message: ''
    }
    handleChange = (e) => {
        this.setState({
            message: e.target.value
        })
    }
    handleClick = () => {
        alert(this.state.message)
        this.setState({
            message: ''
        })
    }
    handleNumber = () => {
        this.setState({
            number: this.state.number + 1
        })
    }
    
    render() {
        return (
            <div>
                <h1>안녕하세요, 제 이름은 {this.props.name}입니다.</h1>
                <h2>저는 {this.props.age}살 입니다.</h2>
                <h3>숫자 {this.state.number}
                    <button onClick={this.handleNumber}>더하기</button>
                </h3>
                <h4>메세지 
                    <input type="text" value={this.state.message} onChange={this.handleChange} />
                    <button onClick={this.handleClick}>확인</button>
                </h4>
            </div>
        );
    }
}

export default Practice1;