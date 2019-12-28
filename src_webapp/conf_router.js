import A from './modules/A/index.vue';
import B from './modules/B/index.vue';
// var B = function(resolve) {
//   return require(['./modules/B/index.vue'], resolve);
// };
import C from './modules/C/index.vue';


export default [
  // -----关联
  {
    path: '/a',
    component: A,
  },
  // 
  {
    path: '/b/:id',
    component: B,
  },
  // 
  {
    path: '/c',
    component: C,
  },
  // ------默认指向
  { path: '/', redirect: '/a' },
  // 
  { path: '/b', redirect: '/b/1' }
];