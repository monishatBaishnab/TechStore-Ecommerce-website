import { useLoaderData } from "react-router-dom";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import Toast from "../../components/Tost";
import PageTitle from "../../components/PageTitle";

const UpdateProduct = () => {
    const product = useLoaderData();
    console.log(product);
    const { _id, name, brand_name, type, price, rating, image, description } = product;
    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand_name = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const image = form.image.value;
        const description = form.shortDescription.value;

        const product = { name, brand_name, type, price, rating, image, description };

        fetch(`https://tech-store-server-bma33retc-monishats-projects.vercel.app/products/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Toast.fire({
                        icon: 'success',
                        title: 'Successfully Update Product in Mongodb.'
                    })
                }
            })
    }
    return (
        <section>
            <PageTitle page='Update Product' name={name} />
            <div className="c-container">
                <form onSubmit={handleAddProduct}>
                    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-5">
                        <Input defaultValue={name} type='text' name='name' label='Name' placeholder='Enter Product Name' />
                        <Input defaultValue={brand_name} type='text' name='brandName' label='Brand Name' placeholder='Enter Brand Name' />
                    </div>
                    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-5">
                        <Input defaultValue={type} type='text' name='type' label='Type' placeholder='Enter Product Type' />
                        <Input defaultValue={price} type='text' name='price' label='Price' placeholder='Enter Product Price' />
                    </div>
                    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-5">
                        <Input defaultValue={rating} type='text' name='rating' label='Rating' placeholder='Enter Product Rating' />
                        <Input defaultValue={image} type='text' name='image' label='Image' placeholder='Enter Product Image URL' />
                    </div>
                    <TextArea defaultValue={description} rows='5' name='shortDescription' label='Short Desctiption' placeholder='Enter Short Desctiption' />
                    <button className="bg-violet-100 px-5 py-2 rounded-md text-violet-500 transition-all hover:bg-violet-500 hover:text-white">Add Product</button>
                </form>
            </div>
        </section>
    );
};

export default UpdateProduct;