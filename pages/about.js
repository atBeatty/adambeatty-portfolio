import { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'


export default function About() {
    const [hover, setHover] = useState(false)
    console.log(hover)
    const handleHover = () => setHover(!hover)

    const aboutLong = () => {

        return `My name is Adam Beatty and I am at where I am at because I am trying my absolute hardest to find the one thing in life I love to do. I graduated from Indiana University in the year 2008 with a degree in finance. For those who may need to be reminded, this was the year we as a nation experienced a recession that stemmed from horribly evaluated housing loans. I remember during one of my last classes, an administrator came in to announce an emergency meeting for all students who had set up interviews for Bear Sterns & Co., the notable and long standing investment bank. The meeting was called to announce that is was completely under water and insolvent. Thankfully, my employment prospect was not affected. I would become a floor trader in Chicago for the next 10 years of my life.
        Towards the end of my first job as a trader, I had `
    }


    return <div>
        <NavBar></NavBar>


        {hover && "HELLO"}
        <div onMouseLeave={handleHover} onMouseEnter={handleHover} className="about-wrapper">

            Adam grew up in the Midwest and went to college at Indiana University.  He studied finance and worked in the trading industry for quite some time.  In 2015, Adam moved to Portland, OR to be closer to his sister and to fulfill his appetite for change in his <span className="short">life</span>.  Currently, Adam is at Portland State University studying Graphic Design.  He is on the pursuit of a creative and artistic life path, and intends to one day teach youth students in the concept of meaningful design case work. Rarely do convenience and purpose unite with the same conviction and potency as with the “CallMe!” app’s response to the status quo of the phone call. One of humanity’s most cherished modes of communication, the phone call these days seems to have lost a step against the ever-faster pace of alternative modes of communication in today’s (paradoxically) increasingly connected and increasingly impersonal world. We see the phone call as a tool for people capable of taking responsibility for themselves, for people proud of their presence and reliability in the lives of others they care about. We realize that with the mushrooming of multi-tasking in the modern world, the dedication required by a phone call can be less than convenient. The “CallMe!” mission is thus to allow its users to create a virtual space where the obstacles to a phone call’s taking place are removed, so that its undeniable advantages to communicators in terms of engagement and authenticity, can be tapped as never before.

            Adam grew up in the Midwest and went to college at Indiana University.  He studied finance and worked in the trading industry for quite some time.  In 2015, Adam moved to Portland, OR to be closer to his sister and to fulfill his appetite for change in his life.  Currently, Adam is at Portland State University studying Graphic Design.  He is on the pursuit of a creative and artistic life path, and intends to one day teach youth students in the concept of meaningful design case work. Rarely do convenience and purpose unite with the same conviction and potency as with the “CallMe!” app’s response to the status quo of the phone call. One of humanity’s most cherished modes of communication, the phone call these days seems to have lost a step against the ever-faster pace of alternative modes of communication in today’s (paradoxically) increasingly connected and increasingly impersonal world. We see the phone call as a tool for people capable of taking responsibility for themselves, for people proud of their presence and reliability in the lives of others they care about. We realize that with the mushrooming of multi-tasking in the modern world, the dedication required by a phone call can be less than convenient. The “CallMe!” mission is thus to allow its users to create a virtual space where the obstacles to a phone call’s taking place are removed, so that its undeniable advantages to communicators in terms of engagement and authenticity, can be tapped as never before.

            Adam grew up in the Midwest and went to college at Indiana University.  He studied finance and worked in the trading industry for quite some time.  In 2015, Adam moved to Portland, OR to be closer to his sister and to fulfill his appetite for change in his life.  Currently, Adam is at Portland State University studying Graphic Design.  He is on the pursuit of a creative and artistic life path, and intends to one day teach youth students in the concept of meaningful design case work. Rarely do convenience and purpose unite with the same conviction and potency as with the “CallMe!” app’s response to the status quo of the phone call. One of humanity’s most cherished modes of communication, the phone call these days seems to have lost a step against the ever-faster pace of alternative modes of communication in today’s (paradoxically) increasingly connected and increasingly impersonal world. We see the phone call as a tool for people capable of taking responsibility for themselves, for people proud of their presence and reliability in the lives of others they care about. We realize that with the mushrooming of multi-tasking in the modern world, the dedication required by a phone call can be less than convenient. The “CallMe!” mission is thus to allow its users to create a virtual space where the obstacles to a phone call’s taking place are removed, so that its undeniable advantages to communicators in terms of engagement and authenticity, can be tapped as never before.
    </div>
        <style jsx>
            {`
            .about-wrapper {
                // color: red;
                transition: all .5s ease;
                opacity: ${hover ? '.5' : '1'}
            }
            span.short {
                transition: all 1s ease;
                color:red;
                position:${hover ? 'fixed' : 'absolute'};
                left:${hover ? '0' : 'unset'};
                font-size:${hover ? '50px' : 'unset'};
                opacity: ${hover ? '1' : '0'}

            }
        `}</style></div>

}