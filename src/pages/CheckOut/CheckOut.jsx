import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const CheckOut = () => {

    const service = useLoaderData();
    const { title, _id, price, img } = service;

    const {user} = useContext(AuthContext);


    const handleCheckOut = event => {
        event.preventDefault();

        const form = event.target
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customerName: name,
            email,
            date,
            img,
            service: title,
            service_id:_id,
            price: price

        }

        console.log(booking)

        fetch('http://localhost:3000/bookings', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)

        })
        .then (res => res.json())
        .then (data => {
            console.log(data);
            if(data.insertedId){
                alert('Your Order is Confirm')
            }
        })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card shrink-0 w-full max-w-3xl shadow-2xl bg-base-100">
                <form onSubmit={handleCheckOut} className="card-body">
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" defaultValue={user?.displayName} name='name' placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name='date' placeholder="Date" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="text" name='password' defaultValue={'$'+ price} className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Confirm Your Order" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;