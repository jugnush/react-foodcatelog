import React from 'react';
import {getFunName} from '../helpers.js'

class FirstComponent extends React.Component{
	goToSubmit(e){
		e.preventDefault();
		//console.log('you change the url');
		//console.log(this.storeInput.value)
		const storeId=this.storeInput.value;
		this.context.router.transitionTo('/store/'+storeId);
	}

	render(){
			return (
				<form className="store-selector" onSubmit={this.goToSubmit.bind(this)}>
				<h2>Please enter your store name</h2>
				<input type="text" required placeholder="store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}}/>
				<button type="submit" > VISIT STORE </button>
				</form>
			)
	}

}

FirstComponent.contextTypes={
	router: React.PropTypes.object
}

export default FirstComponent;

