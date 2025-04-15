import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'sobre',
        loadComponent: () => import('./pages/sobre/sobre.component').then(m => m.SobreComponent)
    },
    {
        path: 'solucoes',
        loadComponent: () => import('./pages/solucoes/solucoes.component').then(m => m.SolucoesComponent)
    },
    {
        path: 'solucoes/cp7-school',
        loadComponent: () => import('./pages/solucoes/cp7-school/cp7-school.component').then(m => m.Cp7SchoolComponent)
    },
    {
        path: 'solucoes/vou-buscar',
        loadComponent: () => import('./pages/solucoes/vou-buscar/vou-buscar.component').then(m => m.VouBuscarComponent)
    },
    {
        path: 'solucoes/equipamentos',
        loadComponent: () => import('./pages/solucoes/equipamentos/equipamentos.component').then(m => m.EquipamentosComponent)
    },
    // {
    //     path: 'solucoes/fabrica',
    //     loadComponent: () => import('./pages/solucoes/fabrica/fabrica.component').then(m => m.FabricaComponent)
    // },
    {
        path: 'contato',
        loadComponent: () => import('./pages/contato/contato.component').then(m => m.ContatoComponent)
    }
];
