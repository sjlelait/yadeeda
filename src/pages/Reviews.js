import React from 'react';
import BackButton from '../components/BackButton';

const Reviews = (props) => {
    return (
        <>
            <div className="text-left mt-16 font-homeP m-6 md:m-24 md:mb-4 shadow-lg rounded-lg bg-white p-4">
                <div className="text-2xl mt-6 lg:text-3xl font-bold text-ydPurple underline text-center">Top Reviews</div>
                <h1 className="mt-6 text-lg lg:text-2xl font-bold">Parent Feedback:</h1>
                <p className="m-4 text-textGreen">
                    "My children loved your CDs. 
                    We have played them 300 gizillions times..." - Kate D., California
                </p>
                <p className="m-4 text-textGreen">
                    "I purchased a CD several years ago for my daughter. She loves the songs, 
                    and I enjoy seeing her learn the French words in a fun atmosphere. 
                    I am looking to acquire more of your music." - Melanie W., Minnesota
                </p>
                <h1 className="text-lg mt-6 lg:text-2xl font-bold">Teacher Feedback:</h1>
                <p className="m-4 text-textPurple">
                    "I am a Teacher and my class really enjoys 'Soyons Amis'. 
                    Thanks so much for the great work you do in helping Teachers 
                    teach French to children in a fun way. I will recommend your 
                    music to everyone I meet..." - Laurie C., Louisiana
                </p>
                <p className="m-4 text-textPurple">
                    "I fell in love with Alain Le Lait's CDs and started using them in my classes. 
                    They are wonderful because they relate to the children's world - 
                    they are full of animals, fruits, dinosaurs, and colors, so they're perfect for 
                    elementary school-age children. They're a great resource for teachers and parents." 
                    - Catherine J.J, Lafayette, CA, quote from the East Bay Express
                </p>
                <p className="m-4 text-textPurple">
                    "Here comes an unsolicited letter of praise for 'Soyons Amis'. 
                    I have ordered several other children's song tapes or CD's and have always 
                    been disappointed because the songs were boring. HOWEVER, 'Soyons Amis' was an 
                    instant hit.I teach pre K through 8th grade little French classes and I know I 
                    am going to have a great year because of your wonderful songs. 
                    I find myself singing them throughout the day. Bravo. I am now going to order 
                    'C'est Si Bon' in the hopes that some of the songs may be better for my older 
                    pre-teens. Also, for my Guatemalan granddaughter, I am going to try the Spanish 
                    'Seamos Amigos'.  Please continue turning out these great songs for would-be 
                    language learners. 
                    Sincerely, Robalee Dinopoulos, Poland, OH"
                </p>
                <h1 className="text-lg mt-6 lg:text-2xl font-bold">Even More:</h1>
                <p className="m-4 text-ydBlue">
                    "... showcasing Le Lait's talent for creating songs with definite child appeal.  
                    With a style reminiscent of Raffi's, Le Lait is certainly in his league."  - School Library Journal
                </p>
                <p className="m-4 text-ydBlue">
                    "Yadeeda.com publishes clever collections of songs for young French and Spanish 
                    learners. The songs are fun, catchy, and easy to learn, and include lots of 
                    repetition. In the song "J'aime Les Voitures", for example, color names are 
                    reinforced... kids will never forget how to say "purple" in French."  
                    - Home Education Magazine
                </p>
                <p className="m-4 text-ydBlue">
                    "... sung exclusively in French, Alain's voice is inviting and pleasant.  
                    The lyrics use a lot of repetition, which is important for young children.  
                    Alain's recordings are a great treasure." - Growing Up With Music by Laurie Sale
                </p>
                <p className="m-4 text-ydBlue">
                    "These 12 original songs in French written by Alain Le Lait have an easy listening 
                    sound. Students of varying ages are exposed to the sounds and words of the French 
                    language in an upbeat and enjoyable musical atmosphere. Although this title is 
                    useful as an introduction to the French language, it also could be used to reinforce 
                    French vocabulary studies with older students." - School Library Journal
                </p>
                <p className="m-4 text-ydBlue">
                    "Clear Pronunciation and imaginative lyrics brighten this adventurous language CD. 
                    It's perfect for those starting language study and makes a good practice session 
                    for more accomplished students." - School Library Journal
                </p>
                <p className="m-4 text-ydBlue">
                    "A dozen simple songs (10 original) contain catchy melodies, repetitive Spanish lyrics, 
                    and a sprinkling of animal noises to entice children familiar with basic Spanish words 
                    and phrases... This should find a welcome place in collections for Spanish-speaking 
                    listeners or in schools with language-immersion programs." - Booklist
                </p>
                <p className="m-4 text-ydBlue">
                    "Alain Le Lait has the right idea. Develop a CD and songbook that is going to help 
                    kids learn words and languages while singing silly, fun songs. This particular 
                    series is geared towards kids where English is a second language (ESL). 
                    The songs are well produced, musically interesting, and catchy with plenty of repetition,
                    which is important for younger children. Come to think about it, I know more than a few 
                    teenagers that could benefit from this series. Alain has done a tremendous job with this 
                    CD... the playing and recording are top notch. Spread the word, 'It's So Good' is good 
                    time music for the little ones." 
                    - Black Rose Acoustic Society
                </p>
            </div>
            <BackButton />
        </>
    )
}

export default Reviews;