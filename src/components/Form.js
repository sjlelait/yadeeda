import { useState } from 'react';

function Form(props) {

    const getNewState = () => ({
        name: '',
        email: '',
        message: ''
    });

    const [formState, setFormState] = useState(getNewState());

    const encode = ({ name, email, message }) => {
        return `form-name=contact&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`;
    };

    const handleChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    };

    const isFormFilled = () => {
        return formState.name && formState.email && formState.message;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Form submitted!');
        await fetch('/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            },
            body: encode(formState)
        });
        setFormState(getNewState());
        alert('Your form has been submitted!');
        window.location.href = '/';
    };

    const { name, email, message } = formState;

    return (
        <div className="flex justify-center items-center mt-24 md:mt-32">
            <div className="content bg-white rounded-lg shadow-lg p-4 md:w-3/4 lg:w-1/2">
                <h3 className="text-xl m-6 lg:text-3xl text-ydPurple text-center font-homeP font-bold">Contact Yadeeda</h3>
                <form name="contact" data-netlify="true" method="POST" onSubmit={handleSubmit}>
                    <div className="form-container p-2">
                        <input type="hidden" name="form-name" value="contact" />
                        <label htmlFor="name">Name:</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={name}
                            className="form-control mb-2 bg-ydForm rounded-lg shadow-lg"
                        />
                        <label htmlFor="email">Email:</label>
                        <input
                            id="email"
                            type="text"
                            name="email"
                            onChange={handleChange}
                            value={email}
                            className="form-control mb-2 bg-ydForm rounded-lg shadow-lg"
                        />
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            onChange={handleChange}
                            value={message}
                            className="form-control mb-2 bg-ydForm rounded-lg shadow-lg"
                        ></textarea>
                        <button type="submit" disabled={!isFormFilled()} className={`btn-light text-white rounded-lg shadow-lg ${isFormFilled() ? 'hover:bg-ydLightBlue bg-ydBlue' : 'hover:bg-gray-500 bg-gray-500'}`}>
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}


export default Form;