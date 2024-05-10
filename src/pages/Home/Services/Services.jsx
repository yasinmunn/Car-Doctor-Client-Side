import { useEffect, useState } from "react";
import ServiceCart from "./ServiceCart";


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div className="my-6 h-auto">
            <div className="text-center space-y-3">
                <h3 className="text-2xl font-semibold text-orange-400">Our Services</h3>
                <h3 className="text-4xl font-bold">Our Services Area</h3>
                <p>the majority have suffered alteration in some form,  by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCart 
                        key={service._id} service={service}
                     >
                    </ServiceCart>)
                }
            </div>
        </div>
    );
};

export default Services;