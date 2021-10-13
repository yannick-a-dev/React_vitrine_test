import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import ButtonsBottom from '../components/ButtonsBottom';
import ContactForm from '../components/ContactForm';
import Logo from '../components/Logo';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetwork';
import { motion } from 'framer-motion';

const Contact = () => {
    const variants = {
        in: {
            opacity: 1,
            x: 0
        },
        out: {
            opacity: 0,
            x: 300,
        }
    }
    const transition = {
        ease: [.03, .87, .73, .9],
        duration: .6,
    }
    return (
        <main>
            <Mouse />
            <motion.div 
            className="contact"
              exit="out"
              animate="in"
              initial="out"
              variants={variants}
              transition={transition}
            >
                <Navigation />
                <Logo />
                <ContactForm />
                <div className="contact-infos">
                    <div className="adresse">
                        <div className="content">
                            <h4>adresse</h4>
                            <p>10 rue Charles Gide</p>
                            <p>93700 Drancy</p>
                        </div>
                    </div>

                    <div className="phone">
                        <div className="content">
                            <h4>téléphone</h4>
                            <CopyToClipboard text="0262728" className="hover">
                                <p
                                    style={{ cursor: 'pointer' }}
                                    className="clipboard"
                                    onClick={() => {
                                        alert("Téléphone copié !");
                                    }}
                                >075 33 23 99 7</p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div className="email">
                        <div className="content">
                            <h4>email</h4>
                            <CopyToClipboard text="essolayk@yahoo.fr"
                                className="hover">
                                <p style={{ cursor: 'pointer' }}
                                    className="clipboard"
                                    onClick={() => {
                                        alert("Email copié !");
                                    }}>essolayk@yahoo.fr</p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <SocialNetwork />
                    <div className="credits">
                        <p>fromScratch - 2021</p>
                    </div>
                </div>
                <ButtonsBottom left={'/project-4'} />
            </motion.div>
        </main>
    );
};

export default Contact;