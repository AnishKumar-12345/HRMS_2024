const MainRoutes = {
    path: '/main',
    meta: {
        requiresAuth: true
    },
    redirect: '/main',
    component: () => import('@/layouts/full/FullLayout.vue'),
    children: [
        {
            name: 'Dashboard', 
            path: '/dashboard',
            component: () => import('@/views/dashboard/index.vue') 
        },
        {
            name: 'Companyprofile',
            path: '/ui/Companyprofile',
            component: () => import('@/views/ui-components/Companyprofile.vue')
        },
        {
            name: 'Employeeprofile',
            path: '/ui/Employeeprofile',
            component: () => import('@/views/ui-components/Employeeprofile.vue')
        },
        {
            name: 'Cards',
            path: '/ui/cards',
            component: () => import('@/views/ui-components/Cards.vue')
        },
        {
            name: 'Leave',
            path: '/ui/Leavemanagement', 
            component: () => import('@/views/ui-components/Leavemanagement.vue')
        },
        {
            name: 'Icons',
            path: '/icons',
            component: () => import('@/views/pages/Icons.vue')
        },
        {
            name: 'Starter',
            path: '/sample-page',
            component: () => import('@/views/pages/SamplePage.vue')
        },
       
    ]
};

export default MainRoutes;
