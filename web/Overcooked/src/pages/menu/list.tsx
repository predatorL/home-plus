import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './list.scss';

import { getMenuList } from 'services/menu';
import qs from 'qs';

export default function Page() {

    const [list, setList] = useState({pageNum: 1, pageSize: 30, data: []});
    const [searchParam, setSearchParam] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        onFetch();
    }, []);


    const onFetch = (fetchParam: any = {}) => {
        getMenuList({...fetchParam, pageNum: 1, pageSize: 10}).then((res: any) => {
            console.log(res)
            if(res.code === 1)
            setList({
                data: res.data,
                pageNum: res.pageNum,
                pageSize: res.pageSize
            })
        })
    }

    const onSearch = () => {

    }

    const onAdd = () => {
        navigate(`/menu/add`)
    }

    const onEdit = (item: any) => {
        navigate(`/menu/edit?id=${item.id}`)
    }

    const goDetail = (item: any) => {
        navigate(`/menu/detail?${qs.stringify({id: item.id})}`)
    }

    return (
        <section className='menu-container'>
            <header className='query-form'>
                <input type="text" onChange={(e) => {
                    console.log(e, e.target)
                    const { value = '' } = e?.target;

                }} />
                <button onClick={onSearch}>搜索</button>
                <button onClick={onAdd}>添加</button>
            </header>
            <div className='menu-list'>
                {
                    Array.isArray(list.data) && list.data.map((item: any) => {
                        return (
                            <div className='menu-item' key={item.id}>
                                <figure onClick={() => { goDetail(item) }}>
                                    <div className='img-warp'>
                                        <img src={item.coverImg} alt="" />
                                        <div className='edit' onClick={() => { onEdit(item) }}>
                                            编辑
                                        </div>
                                    </div>
                                    <figcaption>{item.title}</figcaption>
                                </figure>
                            </div>
                        )
                    })
                }
            </div>
            <footer>

            </footer>
        </section>
    )
}