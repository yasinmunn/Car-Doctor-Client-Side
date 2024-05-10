

const ServiceCart = ({service}) => {

    const { title, img, price} = service;

    return (
        <div className="border-2 border-gray rounded-xl shadow-xl my-10 p-6 space-y-8">
            <figure className="">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="">
                <h2 className="card-title  text-2xl pb-4">{title}</h2>

                <p className="text-xl font-bold text-orange-600">Price: ${price}</p>
            </div>
        </div>
    );
};

export default ServiceCart;