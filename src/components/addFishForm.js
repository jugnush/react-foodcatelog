import React from 'react';

class AddFishForm extends React.Component{
	createFish(e){
		e.preventDefault();
		console.log('create product');
		//console.log('hi',this);

		const product = {
			name: this.Name.value,
			price: this.price.value,
			status: this.status.value,
			desc: this.desc.value,
			image: this.image.value
		}

		this.props.funcAddProduct(product);
		this.productForm.reset();
	}

	render(){
			return (
				<form ref={(input) => {this.productForm = input}} className="fish-edit" onSubmit={this.createFish.bind(this)}>
					<input type="text" placeholder="First Name" ref={(input) => {this.Name = input}} />
					<input type="text" placeholder="price Name" ref={(input) => {this.price = input}} />
					<select ref={(input) => {this.status = input}} >
						<option value="available">Fresh fruit</option>
						<option value="unavailable">SoldOut</option>
					</select>
					
					<textarea name="" placeholder="desc Name" ref={(input) => {this.desc = input}}  ></textarea>
					
					<input type="text" placeholder="Image Name" ref={(input) => {this.image = input}}  />
					<button type="submit">+ Add Item</button>
					
				</form>
			)
	}
}

export default AddFishForm;