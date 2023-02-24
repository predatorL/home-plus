import React, { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import './detail.scss';

import { getMenuList } from 'services/menu';
import qs from 'qs';

export default function Page() {

    const [list, setList] = useState({pageNum: 1, pageSize: 30, data: []});
    let [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        console.log('searchParams', searchParams)
        
    }, []);


  

    return (
        <section className='menu-container'>
            <header className=''></header>
            <div className='menu-list'>
                detail
            </div>
            <footer>

            </footer>
        </section>
    )
}