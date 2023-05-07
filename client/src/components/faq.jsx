import React from 'react';

export default function Faq() {
    return(
        <div className='h-screen '>
            <br />
            <br />
            <br />
            <br />
            <br />
            

            <h1 className="text-3xl text-center">FAQ</h1>
            <ul className="text-center">
                <li>Q: How does the recycling and repurposing process work?</li>
                <p>
                    A: First the user signs up to have their address put on our pickup list. We then come to pickup the plastic
                    and return it to one of our many headquarters located around Ontario and Quebec. At which point the plastic
                    is used to create essential items to those in need. These items include: Shoe soles, 3D Filament, Prosthetics
                    and anything else that may be of use.
                </p>
                <br />
                <li>Q: Are there any restrictions on the geographical area for donation and distribution?</li>
                <p>A: Yes, we are currently only operating in Ontario and Quebec</p>
                <br />
                <li>Q: What types of plastics do you accept for recycling?</li>
                <p>
                    A: We accept any kind of recyclable plastics. Unsure if something is recyclable? Ask our chat bot about the types of plastics
                    that are recyclable or if any items you have are recyclable.
                </p>
                <br />
                <li>Q: Is there a minimum or maximum amount of plastics I can donate?</li>
                <p>A: No! The more plastic the better.</p>

                <br />
                <h3>Any additional questions can be answered by our chat bot! Check it out at the "Cohere Bot" tab of the website.</h3>
            </ul>
        </div>

    );
}