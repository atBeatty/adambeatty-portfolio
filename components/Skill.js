import { useEffect, useState, useRef } from 'react'




const Skill = ({ skill, handleClick }) => {

    const techName = skill[0]



    return <div className="skill-wrapper">
        <button><h3 onClick={() => handleClick(skill)}>{techName}</h3></button>

        {/* <section className="code">{code}</section> */}

        <style jsx>
            {`
                h3 {
                    color: red;
                    text-align: left;
                    
                }
                .skill-wrapper {
                    // transition:all 1s linear;
                    
                    width: 250px;
                    height:250px;
                    border:6px solid red;
                }


                @media screen and (max-width: 600px) {
                           
                        .skill-wrapper {
                            height:unset;
                            width:40vw;
                            border: 2px solid red;
                        }
                            h3 {
                                font-size: 20px;
                                font-weight: 300;

                                margin:unset;
                            }
                            
                        }
             }
             `}
        </style></div>
}

export default Skill