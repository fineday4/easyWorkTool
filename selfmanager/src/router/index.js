import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/Main'
import DailyManager from '../views/Manager/dailyManager'
import EmailManager from '../views/Manager/emailManager'
import TaskManager from '../views/Manager/taskManager'

Vue.use(Router);
export default new Router({
    mode: 'history',
    routes:[
        {
            path: '/main',
            name: 'Main',
            component: Main,
            children:[
                {
                    path: '/Manager/dailymanager/:id',
                    name: 'DailyManager',
                    component: DailyManager,
                    props: true
                },
                {
                    path: '/Manager/emailmanager/:id',
                    name: 'EmailManager',
                    component: EmailManager,
                    props: true
                },
                {
                    path:'/Manager/taskmanager/:id',
                    name: 'TaskManager',
                    component: TaskManager,
                    props: true
                }
            ]
        }
]
})