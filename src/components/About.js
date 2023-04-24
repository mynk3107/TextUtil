import React from 'react';


function About(props) {
    // const [myStyle, setmyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // });

    // const [btn, setbtn] = useState("Enable Dark Mode");

    // const toggleStyle = () => {
    //     if (myStyle.color === 'white') {
    //         setmyStyle({
    //             color: '#212121 ',
    //             backgroundColor: 'white'
    //         })
    //         setbtn("Enable Dark Mode")
    //     }
    //     else {
    //         setmyStyle({
    //             color: 'white',
    //             backgroundColor: '#212121 '
    //         })
    //         setbtn("Enable Light Mode")
    //     }
    // }
    return (
        <>

            <div className="container my-5" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} >
                <h1>About</h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item" >
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(27 72 108)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} aria-controls="collapseOne" >
                                <strong>Analyze your text</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(27 72 108)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} aria-controls="collapseOne" >
                                TextUtil gives you a way to analyze your text quickly and efficiently. Be it word count or character.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} aria-controls="collapseOne">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(27 72 108)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} >
                                <strong>Free to Use</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(27 72 108)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                                TextUtil is a free character counter tool that provide instant character count & word count statistics for a given text. TextUtil reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(27 72 108)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} >
                                <strong>Browser Compatible</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(27 72 108)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                                This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook,
                                blog, books, excel document, pdf document, essays, etc.
                                </div>
                        </div>
                    </div>
                </div>
                {/* <div className="container my-3">
                    <butoon onClick={toggleStyle} type="button" className="btn btn-primary">{btn}</butoon>
                </div> */}
            </div>
        </>
    )
}
export default About;