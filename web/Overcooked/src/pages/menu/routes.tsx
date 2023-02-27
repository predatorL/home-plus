import React from 'react';

import Layout from './layout';
import List from './list';
import Add from './add';
import Edit from './edit';
import Detail from './detail';


const routes = {
    path: '/menu',
    element: <Layout />,
    children: [
        {
            path: 'list',
            element: <List />,
        },
        {
            path: 'detail',
            element: <Detail />,
        },
        {
            path: 'add',
            element: <Add />,
        },
        {
            path: 'edit',
            element: <Edit />,
        }
    ]
}

export default routes;
