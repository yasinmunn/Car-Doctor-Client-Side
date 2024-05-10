import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero my-14 ">
            <div className="hero-content gap-10 flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4  rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2  absolute right-4 top-1/2  shadow-2xl rounded-lg border-8 border-white " />
                </div>
                <div className='lg:w-1/2 space-y-5'>
                    <h3 className='text-2xl text-orange-400 font-bold'>About Us</h3>
                    <h1 className="text-5xl font-semibold w-96">We are qualified & of experience in this field</h1>
                    <p className=" mb-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                    <button className="btn btn-primary bg-orange-600 text-white border-0">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;