import React, {useState, useEffect, useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { LazyMotion, domAnimation } from "framer-motion";


const Contact = ({children}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [currentStep, setCurrentStep] = useState(1);
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [translateXValue, setTranslateXValue] = useState(0); 
    const [translateMsgXValue, setTranslateMsgXValue] = useState(0); 
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [nameInputWidth, setNameInputWidth] = useState(0);
    const [nameLength, setNameLength] = useState(0);
    const nameInputRef = useRef(null);
    const emailLabelRef = useRef(null);
    const msgLabelRef = useRef(null);

    // For Email Sent Alert
    const [isSent, setSent] = useState(false);

    // For EmailJS Configuration
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const msgRef = useRef(null);
    const [loading, setLoading] = useState(false);

    // For Error Validation
    const [errors, setErrors] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateValues = (inputValues) => {
        let errors = {};
        const validEmailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if ( !inputValues.name || inputValues.name.length < 2) {
            errors.name = "name is too short";
          }
        if (!inputValues.email || !validEmailRegex.test(inputValues.email)) {
          errors.email = "Email is in the wrong format";
        }
        if (!inputValues.message || inputValues.message < 4) {
          errors.message = "Message is too short";
        }
        return errors;
      };

    const handleNextStep = () => {
        const validationErrors = validateValues(formData);
        console.log("first error spot", validateValues(formData));
        // Reset the nameError state if moving to the next step and the name field is not empty
        //setNewErrors(false);
        
        setCurrentStep(currentStep + 1);
        
        // Calculate translateXValue when moving to step 2
        if (currentStep === 1 && nameInputRef.current) {
            let nameInputWidth = nameInputRef.current.offsetWidth;
            let nameLength = formData.name.length;
            console.log("name length", nameLength);
            console.log("nameInputWidth", nameInputWidth);
            // Calculate translateXValue with a fixed 10px space between labels
            let newTranslateXValue = (nameInputWidth + 20 + nameLength);
            newTranslateXValue = Math.max(newTranslateXValue, 85)
            console.log("New TranslateX Value:", newTranslateXValue);
            setTranslateXValue(newTranslateXValue);
            setNameInputWidth(nameInputWidth);
            setNameLength(nameLength);
            // Perform form validation before submission
            // Check if there are any errors
            if (Object.keys(validationErrors).length > 2) {
                // If there are errors, do not proceed to the next step
                setErrors(validationErrors);
                console.log("setErrors",validationErrors);
                setCurrentStep(1);
                return;
            } else if (Object.keys(validationErrors).length === 2) {
                setErrors({});
                console.log("setErrorselse",validationErrors);
            }
            //setErrors(validateValues(formData));  
        }

        // Calculate translateMsgXValue when moving to step 3
        if (currentStep === 2 && emailLabelRef.current) {
            // Perform form validation before submission
            const emailLabelWidth = emailLabelRef.current.offsetWidth;
            const emailLength = formData.email.length;
            console.log("email length", emailLength);
            console.log("emailLabelWidth", emailLabelWidth);
            // Calculate translateXValue with a fixed 10px space between labels
            let newTranslateMsgXValue = (nameInputWidth+ 20 + nameLength + emailLabelWidth + 20 + emailLength);
            newTranslateMsgXValue = Math.max(newTranslateMsgXValue, 85)
            console.log("New TranslateMsgX Value:", newTranslateMsgXValue);
            setTranslateMsgXValue(newTranslateMsgXValue);
            // Check if there are any errors
            console.log("second error spot", validateValues(formData));
            if (Object.keys(validationErrors).length > 1) {
                // If there are errors, do not proceed to the next step
                setErrors(validationErrors);
                console.log("setErrors",validationErrors);
                setCurrentStep(2);
                return;
            } else if (Object.keys(validationErrors).length === 1) {
                setErrors({});
                console.log("setErrorselse",validationErrors);
            }
        }
        // Set email label style to visible when moving to step 3
        if (currentStep === 3 && msgLabelRef.current) {
            emailLabelRef.current.style.zIndex = '50';
            // Check if there are any errors
            console.log("third error spot", validateValues(formData));
            if (Object.keys(validationErrors).length > 0) {
                // If there are errors, do not proceed to the next step
                setErrors(validationErrors);
                console.log("setErrors",validationErrors);
                setCurrentStep(3);
                return;
            } else if (Object.keys(validationErrors).length === 0) {
                setErrors({});
                console.log("setErrorselse",validationErrors);
            }
        }
    };

    const handlePreviousStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleSubmit = async(e) => {
        // Handle form submission
        e.preventDefault();
        
        setSubmitting(true);
        const serviceId = "service_c9zoot8";
        const templateId = "portfolio_123";
        try {
            setLoading(true);
            await emailjs.send(serviceId, templateId, {
                name: formData.name,
                recipient: formData.email,
                message: formData.message
            });
            //alert("email successfully sent! check inbox");
            // Reset form after submission
            setFormData({
                name: '',
                email: '',
                message: ''
            });
            setCurrentStep(1); // Reset to Step 1 
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    /*const finishSubmit = () => {
        console.log(formData);
      };
    
      useEffect(() => {
        if (Object.keys(errors).length === 0 && submitting) {
          finishSubmit();
        }
      }, [errors]);*/

    const toggleSent = () => {
        
        console.log('Button clicked');
            setSent(!isSent);
      
             // Add filtering and status classes when opening
            if (!isSent) {
                setTimeout(() => {
                    const filtersElement = document.querySelector('.filters');
                    if (filtersElement) {
                        filtersElement.classList.add('filtering');
                        filtersElement.classList.add('status');
                        setTimeout(() => {
                            filtersElement.classList.add('filtered');
                            setSent(isSent);
                        }, 3000);
                    }
                }, 500); // Add a delay to match the duration of the first animation
            }
            // Remove classes when closing
            if (isSent) {
                const filtersElement = document.querySelector('.filters');
                if (filtersElement) {
                    filtersElement.classList.remove('status');
                    filtersElement.classList.remove('filtering');
                    filtersElement.classList.remove('filtered');
                    setSent(false);
                }
            }
    };

    const handleToggleSent = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        toggleSent();
        setTimeout(() => {
            handleSubmit(e); // Pass the event object to handleSubmit
        }, 3500);
       
        
    };
        

    const handleInputFocus = () => {
        setIsInputFocused(true);
    };

    const handleInputBlur = () => {
        setIsInputFocused(false);
    };

    // Initialize emailLabelRef using useEffect
    useEffect(() => {
        emailLabelRef.current = emailLabelRef.current || {};
    }, []);
    useEffect(() => emailjs.init("vUNDgSw5JuyHOMW4z"), []);
    
    return (
        
        <main id="page-content" >
            <div id="stars"></div>
            <div id="stars1"></div>
            <div id="stars2"></div>
            <section className="current">
            {/*Object.keys(errors).length === 0 && submitting ? ( ) : null*/}
                <div className={`filters ${isSent ? '' : 'hidden'}`}>
                    <em >
                        <b style={{zIndex:'8000000'}}>Email</b>
                        <b style={{zIndex:'8000000'}}>Sent From</b>
                        <b style={{zIndex:'8000000'}}>{formData.email}</b>
                    </em>
                </div>
               
                <div>

                    <div className="page-control">
                        <a href="/portfolio" className="prev">
                            <span>Portfolio</span>
                            <em></em>
                        </a>
                    </div>
                    <LazyMotion features={domAnimation} >

                    <div 
                        className="content pages" 
                        id="contact"
                    >
                        <div id="topContact"></div>
                        
                        <section className="centered">
                            <div id="stars"></div>
                            <div id="stars1"></div>
                            <div id="stars2"></div>
                            <div className="wrapper">
                                <header>
                                    <h1>Get in touch</h1>
                                    <p>If you wanna get in touch, talk to me about a project collaboration or just say hi,
                                        <br/>fill up the awesome form below or send an email to 
                                        <span className="fancy">
                                            <a href="mailto:WarrenPeterson141414@Gmail.com">_WarrenPeterson141414@Gmail.com</a>
                                        </span> and ~let's talk.
                                    </p>
                                </header>
                                
                                <div className="lets-talk">
                                    <form method="post" autoComplete="off" action="/">
                                        <ul className="input-block">
                                            <li className={`active name ${isInputFocused ? 'focus' : ''} ${currentStep === 1 ? 'active' : ''}`}>
                                                <div className="label cf_">
                                                    <svg  version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50" space="preserve" className="i-svg i-svg user">
                                                        <path d="M25,2.579c6.191,0,11.212,5.019,11.212,11.21C36.212,19.981,31.191,25,25,25 s-11.211-5.019-11.211-11.211C13.789,7.598,18.809,2.579,25,2.579z M25,30.604c-17.097,0-22.42,11.212-22.42,11.212v5.604h44.84 v-5.604C47.42,41.816,42.097,30.604,25,30.604z" fill="#333333"></path>
                                                    </svg>
                                                    <label title="Name" data-text="Fill with your name" data-value="" ref={nameInputRef}>{formData.name ? formData.name : 'Fill with your name'}</label>
                                                </div>
                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50" space="preserve" className="i-svg i-svg common">
                                                    <path d="M25,2.579c6.191,0,11.212,5.019,11.212,11.21C36.212,19.981,31.191,25,25,25 s-11.211-5.019-11.211-11.211C13.789,7.598,18.809,2.579,25,2.579z M25,30.604c-17.097,0-22.42,11.212-22.42,11.212v5.604h44.84 v-5.604C47.42,41.816,42.097,30.604,25,30.604z" fill="#333333">
                                                    </path>
                                                </svg>
                                                {currentStep === 1 && (
                                                <div>
                                                    <input autoComplete="off" placeholder=""type="text" name="name" required
                                                    value={formData.name} 
                                                    onChange={handleInputChange}
                                                    onFocus={handleInputFocus}
                                                    style={{ border: errors.name ? "1px solid red" : null }}
                                                    />
                                                     
                                                </div>
                                                )}{console.log("Name Input Ref:", nameInputRef.current)}
                                                
                                            </li>
                                            

                                            {currentStep > 1  && (
                                            <li className={`email ${isInputFocused ? 'focus2 active' : ''} ${currentStep === 2 ? ' active' : ''}`} >
                                                <div className="label cf_  email-focus" 
                                                
                                                style={{ transform: `translateY(-50px) scale(0.8) translateX(${translateXValue}px)`, marginLeft:'10px' }}
                                                >
                                                    {currentStep > 1 &&(
                                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50" space="preserve" className="i-svg i-svg mail">
                                                        <path d="M2.58,13.065L25.746,32.02l23.166-18.955V8.853H2.58V13.065z M2.58,38.862 l11.377-12.639L2.58,15.967V38.862z M48.912,39.173L37.214,26.267L48.912,16.12V39.173z M25.746,35.687l-9.477-7.879L2.58,42.55 h46.333L35.203,27.808L25.746,35.687z" fill="#333333">
                                                        </path>
                                                    </svg>
                                                    )}
                                                    <label title="email" data-text="now your email address" data-value="" 
                                                       ref={emailLabelRef}>
                                                        {formData.email ? formData.email : 'Now enter your email address'}</label>

                                                </div>
                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50" space="preserve" className="i-svg i-svg common">
                                                    <path d="M2.58,13.065L25.746,32.02l23.166-18.955V8.853H2.58V13.065z M2.58,38.862 l11.377-12.639L2.58,15.967V38.862z M48.912,39.173L37.214,26.267L48.912,16.12V39.173z M25.746,35.687l-9.477-7.879L2.58,42.55 h46.333L35.203,27.808L25.746,35.687z" fill="#333333">
                                                    </path>
                                                </svg>
                                                {currentStep === 2 && (
                                                <div>
                                                <input   autoComplete="off" placeholder="" type="text" name="email" required
                                                value={formData.email} 
                                                onChange={handleInputChange} 
                                                onFocus={handleInputFocus}
                                                style={{ border: errors.email ? "1px solid red" : null }}/>
                                                
                                                </div>
                                                )}   
                                                </li>
                                            )}{console.log("Email Input Ref:", emailLabelRef.current)}
                                            
                                            {currentStep === 3  && (
                                            <li className={`msg ${isInputFocused ? 'focus active' : ''} ${currentStep === 3 ? ' active' : ''}`}>
                                                <div className="label cf_ msg-focus"
                                                    ref={msgLabelRef}
                                                    style={{transform: `translateY(-50px) scale(0.8) translateX(${translateMsgXValue}px)`, marginLeft:'10px'}}
                                                >
                                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50" space="preserve" className="i-svg i-svg msg">
                                                        <path d="M47.811,7.352l-4.198-4.191 c-0.434-0.433-1.003-0.65-1.571-0.65c-0.569,0-1.139,0.216-1.571,0.649l-3.358,3.348l7.341,7.328l3.358-3.347 C48.678,9.623,48.678,8.217,47.811,7.352z M15.315,28.264l7.342,7.33l20.225-20.187l-7.343-7.33L15.315,28.264z M13.73,29.831 l-1.567,8.892l8.91-1.562L13.73,29.831z M34.026,42.685H6.344V15.003H25.88l4.814-4.805H4.646c-1.709,0-3.107,1.398-3.107,3.107 v31.077c0,1.71,1.398,3.108,3.107,3.108h31.078c1.709,0,3.107-1.398,3.107-3.108V22.164l-4.805,4.797V42.685z" fill="#333333">
                                                        </path>
                                                    </svg>
                                                    <label title="message" data-text="now write your awesome message :)" data-value="">{formData.message ? formData.message : 'Now Write your message'}</label>
                                                </div>
                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50" space="preserve" className="i-svg i-svg common">
                                                    <path d="M47.811,7.352l-4.198-4.191 c-0.434-0.433-1.003-0.65-1.571-0.65c-0.569,0-1.139,0.216-1.571,0.649l-3.358,3.348l7.341,7.328l3.358-3.347 C48.678,9.623,48.678,8.217,47.811,7.352z M15.315,28.264l7.342,7.33l20.225-20.187l-7.343-7.33L15.315,28.264z M13.73,29.831 l-1.567,8.892l8.91-1.562L13.73,29.831z M34.026,42.685H6.344V15.003H25.88l4.814-4.805H4.646c-1.709,0-3.107,1.398-3.107,3.107 v31.077c0,1.71,1.398,3.108,3.107,3.108h31.078c1.709,0,3.107-1.398,3.107-3.108V22.164l-4.805,4.797V42.685z" fill="#333333">
                                                    </path>
                                                </svg>
                                                <textarea name="message"  placeholder="" style={{height: '22px', border: errors.message ? "1px solid red" : null }} value={formData.message} onChange={handleInputChange} onFocus={handleInputFocus} required >

                                                </textarea>
                                                
                                            </li>
                                            )}{console.log("Name in Email:", formData.name)}{console.log("Email Address in Email:", formData.email)}{console.log("Msg in Email:", formData.message)}
                                        </ul>
                                        {errors.name ? (<p className="error-message">Name should be at least 2 characters long</p>) : null}
                                        {errors.email ? (<p className="error-message">Email is in the wrong format</p>) : null}
                                        {errors.message ? (<p className="error">Message should be at least 5 characters long</p> ) : null}
                                        <div className="submit">
                                        {currentStep < 3 && (
                                            <awesome-button color="teal" width="100">
                                                <a  onClick={handleNextStep} className={`${formData.name ? 'aws-btn aws-btn--primary aws-btn--teal aws--disabled aws-btn--visible' : 'aws-btn aws-btn--disabled aws-btn--primary aws-btn--visible '}${isSent ? '' : ''}`}>
                                                    <span className="aws-btn__container">
                                                        <span className="aws-btn__wrapper">
                                                            <span className="aws-btn__content" data-status="Success!" data-loading="Wait for it ..">
                                                                <span>Next</span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </a>
                                            </awesome-button>
                                            )}
                                            {currentStep === 3 && (
                                            <awesome-button color="teal" progress="true" id="contact-submit">
                                                <a  onClick={(e) => handleToggleSent(e)} disabled={loading} 
                                                className={`${formData.message ? 'aws-btn aws-btn--primary aws-btn--teal aws--disabled aws-btn--visible' : 'aws-btn aws-btn--disabled aws-btn--primary '}`}>
                                                    <span className="aws-btn__container">
                                                    
                                                        <span className="aws-btn__wrapper">
                                                            <span className="aws-btn__content aws-btn__progress" data-status="Success!" data-loading="Wait for it ..">
                                                                <span>Submit your message</span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </a>
                                            </awesome-button>
                                            )}
                                        </div>

                                    </form>
                                    <div className="share">
                                        <h4>Let's get social</h4>
                                        <p>Follow my online fan page on Facebook and profiles on Twitter, GitHub and Linkedin.</p>
                                        <awesome-button width="130" type="facebook" target="_blank" href="https://www.facebook.com/warrenpeterson141414@gmail.com">
                                            <a href="/elements/" className="aws-btn aws-btn--facebook aws-btn--visible">
                                                <span className="aws-btn__container">
                                                    <span className="aws-btn__wrapper">
                                                        <span className="aws-btn__content" data-status="Success!" data-loading="Wait for it ..">
                                                            <span>
                                                                <svg className="i-svg" height="50" version="1.1" width="50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50" space="preserve" data-icon="facebook,">
                                                                    <path d="M27.845,47.469V27.81h8.426l1.404-8.425h-9.83v-4.213c0-2.81,1.406-4.213,4.213-4.213h4.213V2.531 c-1.405,0-4.55,0-7.021,0c-7.021,0-9.83,4.213-9.83,11.234v5.618h-8.425v8.424h8.425v19.661H27.845L27.845,47.469z" fill="#ffffff">
                                                                    </path>
                                                                </svg> 
                                                                <span>Facebook</span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </a>
                                        </awesome-button>
                                        <awesome-button type="linkedin" width="130" target="_blank" href="https://www.linkedin.com/in/warrenpetersonbacs">
                                            <a href="/elements/" className="aws-btn aws-btn--linkedin aws-btn--visible">
                                                <span className="aws-btn__container">
                                                    <span className="aws-btn__wrapper">
                                                        <span className="aws-btn__content" data-status="Success!" data-loading="Wait for it ..">
                                                            <span>
                                                                <svg className="i-svg" height="50" version="1.1" width="50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50" space="preserve" data-icon="facebook,">
                                                                    <path d="M13.83,41.668H5.401V13.571h8.429V41.668z M44.737,41.668h-8.429V26.66c0-3.912-1.394-5.857-4.154-5.857 c-2.189,0-3.577,1.086-4.274,3.273c0,3.545,0,17.592,0,17.592h-8.431c0,0,0.115-25.288,0-28.097h6.656l0.514,5.619h0.175 c1.729-2.81,4.489-4.713,8.275-4.713c2.881,0,5.207,0.801,6.985,2.815c1.794,2.014,2.684,4.713,2.684,8.514V41.668z M9.615,2.333 c2.404,0,4.357,1.888,4.357,4.214c0,2.33-1.953,4.214-4.357,4.214c-2.403,0-4.351-1.885-4.351-4.214 C5.264,4.22,7.212,2.333,9.615,2.333z" fill="#ffffff"></path>
                                                                </svg> 
                                                                <span>Linkedin</span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </a>
                                        </awesome-button>
                                        <awesome-button type="github" width="120" target="_blank" href="https://github.com/warrengslice">
                                            <a href="/elements/" className="aws-btn aws-btn--github aws-btn--visible">
                                                <span className="aws-btn__container">
                                                    <span className="aws-btn__wrapper">
                                                        <span className="aws-btn__content" data-status="Success!" data-loading="Wait for it ..">
                                                            <span>
                                                                <svg className="i-svg" height="50" version="1.1" width="50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50" space="preserve" data-icon="facebook,">
                                                                    <path d="M24.999,2.48c-12.75,0-23.087,10.338-23.087,23.09c0,10.199,6.613,18.854,15.791,21.907 c1.154,0.211,1.518-0.474,1.518-1.084c0-0.547,0.011-2.082,0-4.01c-6.422,1.398-7.753-3.038-7.753-3.038 c-1.048-2.671-2.562-3.377-2.562-3.377c-2.095-1.433,0.158-1.407,0.158-1.407c2.317,0.163,3.538,2.383,3.538,2.383 c2.059,3.522,5.403,2.505,6.717,1.916c0.21-1.491,0.808-2.51,1.468-3.087C15.66,35.188,10.27,33.211,10.27,24.361 c0-2.521,0.9-4.581,2.376-6.194c-0.239-0.584-1.031-2.932,0.226-6.112c0,0,1.939-0.62,6.349,2.369 c1.841-0.513,3.817-0.768,5.78-0.777c1.962,0.009,3.938,0.264,5.781,0.777c4.409-2.988,6.346-2.369,6.346-2.369 c1.258,3.18,0.466,5.528,0.229,6.112c1.478,1.613,2.373,3.673,2.373,6.194c0,8.872-5.397,10.823-10.543,11.392 c0.828,0.717,1.582,2.101,1.582,4.255c0,2.887,0,5.632,0,6.392c0,0.617,0.372,1.302,1.544,1.076 c9.167-3.059,15.776-11.708,15.776-21.905C48.089,12.818,37.75,2.48,24.999,2.48z" fill="#ffffff"></path>
                                                                </svg> 
                                                                <span>GitHub</span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </a>
                                        </awesome-button>
                                    </div>
                                </div>
                                
                            </div>
                            {/*</PageTransition>*/}
                        </section>
                        
                        <div id="bottomContact"></div>
                        
                    </div>
                    {children}
                    </LazyMotion>
                </div>
            </section>
            <section className="loader"></section>
        </main>
    );
};


export default Contact;