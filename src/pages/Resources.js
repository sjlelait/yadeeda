import React from 'react';
import PurchaseButtons from '../components/PurchaseButtons';
import BackButton from '../components/BackButton';

const Resources = (props) => {
    return (
        <>
            <div className="content bg-white rounded-lg shadow-lg md:m-20 md:mb-4">
                <h1 className="text-2xl mt-20 md:mt-24 pt-6 md:pt-10 lg:text-3xl font-bold font-homeP underline text-ydPurple">Teaching Resources</h1>
                <ul className="mt-8 text-lg p-4 text-left list-disc ml-4 md:ml-10">
                    <li className="mb-6 pl-2">11 Fun and Engaging Online French Resources from <a href="https://www.mezzoguild.com/kids-resources-to-learn-french/" className="text-ydBlue">The Mezzofanit Guild</a></li>
                    <li className="mb-6 pl-2">Online games and activities for kids and new learners from <a href="https://www.hello-world.com/French/" className="text-ydBlue">Bonjour Monde</a>.</li>
                    <li className="mb-6 pl-2">French cartoons to help with learning from <a href="https://www.hello-world.com/French/" className="text-ydBlue">Bilingual Kidspot</a>.</li>
                </ul>
                <div className="mt-auto">
                    <PurchaseButtons />
                </div>
            </div>
            <BackButton />
        </>
    )
}

export default Resources;