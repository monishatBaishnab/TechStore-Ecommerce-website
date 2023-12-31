import Input from "../../components/Input";
import SectionTitle from "../../components/SectionTitle";
import TextArea from "../../components/TextArea";
import Toast from "../../components/Tost";

const AddProduct = () => {
    const section_name = 'Add Product';
    const section_title = 'Add New Tech Product';
    const section_description = 'Streamline the process of adding the latest tech products to our catalog with ease and efficiency';
    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const image = form.image.value;
        const shortDescription = form.shortDescription.value;

        const brandUpper = brandName[0].toUpperCase()+brandName.slice(1);

        const product = { name, brand_name: brandUpper, type, price, rating, image, description: shortDescription };

        fetch('https://tech-store-server-p0qyc2oro-monishats-projects.vercel.app/products', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.reset();
                    Toast.fire({
                        icon: 'success',
                        title: 'Successfully added Product to Mongodb.'
                    })
                }
            })
    }
    return (
        <section className="dark:bg-slate-700">
            <SectionTitle name={section_name} title={section_title} description={section_description} />
            <div className="c-container">
                <form onSubmit={handleAddProduct}>
                    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-5">
                        <Input required type='text' name='name' label='Name' placeholder='Enter Product Name' />
                        <Input required type='text' name='brandName' label='Brand Name' placeholder='Enter Brand Name' />
                    </div>
                    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-5">
                        <Input required type='text' name='type' label='Type' placeholder='Enter Product Type' />
                        <Input required type='text' name='price' label='Price' placeholder='Enter Product Price' />
                    </div>
                    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-5">
                        <Input required type='text' name='rating' label='Rating' placeholder='Enter Product Rating' />
                        <Input required type='text' name='image' label='Image' placeholder='Enter Product Image URL' />
                    </div>
                    <TextArea required rows='5' name='shortDescription' label='Short Desctiption' placeholder='Enter Short Desctiption' />
                    <button className="bg-violet-100 px-5 py-2 rounded-md text-violet-500 transition-all hover:bg-violet-500 hover:text-white dark:bg-violet-700 dark:text-white">Add Product</button>
                </form>
            </div>
        </section>
    );
};

export default AddProduct;