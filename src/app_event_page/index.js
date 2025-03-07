import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IoTimerOutline, IoLocationOutline, IoMapOutline } from "react-icons/io5";
import { BsCalendarDate } from 'react-icons/bs';
import axios from 'axios';

const App_Event_Page = () => {
    // Get the full dynamic segment (eventuuid_userid)
    const { attendeeuuid_eventid_userid } = useParams();

    const apiUrl = process.env.REACT_APP_API_URL;

    console.log("The slug is: ", attendeeuuid_eventid_userid);

    // Split the dynamic part by underscore (_)
    const [attendeeuuid, eventid, userid] = attendeeuuid_eventid_userid
        ? attendeeuuid_eventid_userid.split('_')
        : [];

    useEffect(() => {
        if (attendeeuuid_eventid_userid) {
            axios
                .post(`${apiUrl}api/display-event/${eventid}`, {}, {})
                .then(res => console.log(res.data));
        }
    }, [attendeeuuid_eventid_userid, apiUrl, eventid]);

    // if (!attendeeuuid_eventid_userid) {
    //     return <div>Error: params are missing in the URL</div>;
    // }

    return (
        <section className="overflow-hidden bg-light">
            <div className="container py-5">
                <div className="">
                    <div className="mx-auto mb-4 mb-lg-0" style={{ width: "fit-content" }}>
                        <img
                            alt="ecommerce"
                            style={{ maxWidth: "500px" }}
                            className="img-fluid rounded"
                            src="https://dummyimage.com/400x400"
                        />
                    </div>
                    <div className="mt-5 mx-auto" style={{ maxWidth: "800px" }}>
                        <h1 className="display-5 mb-3 text-center">The Catcher in the Rye</h1>

                        <p className="mb-4">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores sequi exercitationem doloremque quae molestiae perspiciatis animi autem at, corporis aperiam quos, doloribus nam, blanditiis voluptate aliquid beatae repellat? Est, labore. Aut assumenda corrupti aliquam deleniti alias, possimus eaque quasi explicabo dolores accusantium cupiditate eligendi cum nulla dicta nostrum dolore adipisci mollitia. Perspiciatis ipsa facere distinctio, adipisci voluptatibus nihil officiis soluta id eveniet odio sequi pariatur eum recusandae quasi placeat. Id quae delectus, accusantium modi excepturi repudiandae amet aperiam alias omnis.
                        </p>
                        <div className="mb-4">
                            <h5 className="mb-1">Date <BsCalendarDate /></h5>
                            <p>
                                2025-01-19 - 2025-01-20
                            </p>
                        </div>
                        <div className="mb-4">
                            <h5 className="mb-1">Time <IoTimerOutline /></h5>
                            <p>06:00 AM - 06:00 AM</p>
                        </div>
                        <div className="mb-4">
                            <h5 className="mb-1">Location <IoLocationOutline /></h5>
                            <p>Taj City Centre Gurugram
                                No. 1, Netaji Subhash Marg, near Fortis Healthcare Limited, Sector 44, Gurugram, Haryana 122004</p>
                        </div>

                        <div className="mb-4">
                            <h5 className="mb-1">Google Map Location <IoMapOutline /></h5>
                            <a href="#" className='text-info'>View Location</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default App_Event_Page;
