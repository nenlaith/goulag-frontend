import HomeRouteComponent from './HomeRouteComponent.vue';

import ListRouteComponent from './ListRouteComponent.vue';

import SessionRouteComponent from './SessionRouteComponent.vue';

import VoteRouteComponent from './VoteRouteComponent.vue';

import LanguageRouteComponent from './LanguageRouteComponent.vue';
import NewLanguageRouteComponent from './NewLanguageRouteComponent';

import DefendantRouteComponent from './DefendantRouteComponent.vue';

const Routes = [
  { path: '/home', name: 'home-route', component: HomeRouteComponent },

  { path: '/list', name: 'list-route', component: ListRouteComponent },

  { path: '/session', name: 'session-route', component: SessionRouteComponent },

  { path: '/vote', name: 'vote-route', component: VoteRouteComponent },

  { path: '/defendant', name: 'defendant-route', component: DefendantRouteComponent },


  { path: '/language', name: 'language-route', component: LanguageRouteComponent },
  { path: '/new-language', name: 'new-language-route', component: NewLanguageRouteComponent },
];

export default Routes;
