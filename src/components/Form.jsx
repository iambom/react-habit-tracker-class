import React, {PureComponent} from 'react';

class Form extends PureComponent {

    formRef = React.createRef();
    inputRef = React.createRef();

    onSubmit = event => {
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        this.formRef.current.reset();
    }

    render(){
        return(
            <form ref={this.formRef} onSubmit={this.onSubmit}>
                <input ref={this.inputRef} type="text" placeholder="Enter word"/>
                <button className="button button-color">Add</button>
            </form>
        )
    }
}

export default Form;