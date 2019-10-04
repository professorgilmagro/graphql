module.export = {
	saleValue: product => {
		if (product.discount) {
			return product.price * (1 - product.discount);
		}

		return product.price;
	}
};
