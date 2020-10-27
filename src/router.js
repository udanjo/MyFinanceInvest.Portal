import Vue from 'vue';
import Router from 'vue-router';
import Bank from './components/Bank/Bank'
import About from './components/About/About'
import Account from './components/Account/Account'

Vue.use(Router);


export default new Router({
    routes: [
        {
            path: '/',
            nome: 'Bank',
            component: Bank
        },
        {
            path: '/bank',
            nome: 'Banco',
            component: Bank
        },
        {
            path: '/about',
            nome: 'Sobre',
            component: About
        },
        {
            path: '/account',
            nome: 'Conta',
            component: Account
        },
        {
            path: '/person',
            nome: 'Pessoa',
            component: About
        }
        // {
        //     path: '/alunoDetalhe/:id',
        //     nome: 'AlunoDetalhe',
        //     component: AlunoDetalhe
        // },
    ]
})