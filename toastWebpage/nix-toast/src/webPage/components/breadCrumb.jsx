import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ROUTES } from '../../utils/services';

const BreadCrumb = () => {
    const location = useLocation();
    const pathSegments = location.pathname.split('/').filter(segment => segment);

    const formattedSegments = pathSegments.map(segment => {
        return segment.replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase());
    });

    const [resultArray, setResultArray] = useState([])
    useEffect(() => {
        const tempResultArray = [];
        formattedSegments.forEach((segment, index) => {
            if (index === 0 || index === formattedSegments.length - 1) {
                tempResultArray.push(segment);
            } else {
                tempResultArray.push(segment);
            }
        });
        setResultArray(tempResultArray);
    }, [location.pathname]);

    return (
        <React.Fragment>
            <ol className="flex items-center whitespace-nowrap p-2">
                <li className="inline-flex items-center">
                    <Link className="flex items-center text-sm text-gray-500 hover:text-purple-400 focus:outline-none focus:text-purple-400 dark:text-neutral-500 dark:hover:text-purple-400 dark:focus:text-purple-400" to={ROUTES.HOME}>
                        <svg className="flex-shrink-0 me-3 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        Home
                    </Link>
                    {location.pathname !== '/' ?
                        <svg className="flex-shrink-0 mx-2 overflow-visible size-4 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m9 18 6-6-6-6"></path>
                        </svg>
                        : null
                    }
                </li>
                {

                    location.pathname !== '/' ?

                        <React.Fragment>
                            <li className="inline-flex items-center">
                                <div className="flex items-center text-sm text-gray-500" href="#">
                                    <svg className="flex-shrink-0 me-3 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                                        <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"></path>
                                    </svg>
                                    {resultArray[0]}
                                    <svg className="flex-shrink-0 mx-2 overflow-visible size-4 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m9 18 6-6-6-6"></path>
                                    </svg>
                                </div>
                            </li>
                            <li className="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-neutral-200" aria-current="page">
                                {resultArray[1]}
                            </li>
                        </React.Fragment>
                        : null
                }

            </ol>
        </React.Fragment>
    )
}

export default BreadCrumb