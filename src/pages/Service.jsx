import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import Secheader from "./common/Secondaryheader";
import Data from "../data/Servicesdata";
import axios from "axios"

const Scards = (props) => {
  return (
    <div className="col-md-4 col-lg-4 mb-3 text-center">
      <a href={props.linked} className="service_anchor">
        <div className="box_border col-lg-9 p-3 pt-4 m-auto rounded">
          <img src={props.scardimage} className="img-fluid mb-2" alt="cards" width="20%" />
          <p className="my-2" style={{color:"black"}}>{props.scardtitle}</p>
          <p className="text-muted text-left text-xl-center text-lg-center">{props.scarddesc}</p>
        </div></a>
    </div>
  );
};

const Service = () => {
  const [book, setBook] = useState({
		name: "The Fault In Our Stars",
		author: "John Green",
		img: "https://images-na.ssl-images-amazon.com/images/I/817tHNcyAgL.jpg",
		price: 250,
	});

	const initPayment = (data) => {
    console.log("data: ",data)
		const options = {
			key: process.env.REACT_RAZORPAY_KEY ,
			amount: data.amount,
			currency: data.currency,
			name: book.name,
			description: "Test Transaction",
			image: book.img,
			order_id: data.id,
			handler: async (response) => {
				try {
					const verifyUrl = "http://localhost:4000/payment/verify";
					const { data } = await axios.post(verifyUrl, response);
					console.log(data);
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};

	const handlePayment = async () => {
		try {
			const orderUrl = "http://localhost:4000/payment/orders";
			const { data } = await axios.post(orderUrl, { amount: book.price });
			console.log(data);
      if(data.data){
			initPayment(data.data);
    }
		} catch (error) {
			console.log(error);
		}
	};

  return (
    <>

      <Secheader
        sectitle="Services"
        secdesc="Our services are listed below"
      />

      <section>
        <div className="container mx-auto py-5">
          <div className="mb-5 text-center">
            <p className="display-6 mb-1">Services We Provide</p>
            <p className="text-muted">Our digital agency offers comprehensive services.</p>
          </div>
          <div className="row d-flex items-align-center justify-content-evenly">
            {
              Data.map((val, ind) => {
                return <Scards key={ind}
                  scardimage={val.scardimage}
                  linked={val.linked}
                  scardtitle={val.scardtitle}
                  scarddesc={val.scarddesc}
                />
              })
            }
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container py-5 text-center">
          <p className="display-6">Not quite sure yet ?</p>
          <p className="text-muted">Why not visit our <NavLink className="text-decoration-none" to="/contact">contact page</NavLink>, we would love to chat with you!</p>
          <button 
  onClick={handlePayment} 
  style={{
    backgroundColor: 'darkred',
    color: 'white',
    fontSize: '20px', // Makes the button bigger
    padding: '10px 20px', // Increases the size
    borderRadius: '10px', // Curves the edges
    border: 'none', // Removes default border
    cursor: 'pointer' // Changes cursor on hover
  }}
>
  Pay
</button>
        </div>
      </section>
    </>
  );
};

export default Service;