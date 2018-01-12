import React, {Component} from "react";
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";

class AdminView extends Component {
    render() {
        return (
            <div>
                <h1>Admin View</h1>
                <h2>Products</h2>
                {/* // show our list of products here */}
                <ProductList productList={this.props.productList}
                viewMode={'ADMIN'}
                deleteProductFromProductList={this.props.deleteProductFromProductList}
                showAdminOptions={true}
                />
                <h2>Create a New Product</h2>
                {/* // create product form goes here */}
                <ProductForm
                    addNewProductToProductList={this.props.addNewProductToProductList}
                />
            </div>
        );
    }
}

export default AdminView;