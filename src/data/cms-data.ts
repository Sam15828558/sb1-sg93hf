import { CMSFootprint } from '../types/cms';

export const cmsData: CMSFootprint[] = [
  {
    name: 'WordPress',
    category: 'blog',
    operator: 'inurl:wp-content OR inurl:wp-includes',
    dofollowFootprints: [
      'wp-comments-post.php',
      '/author/',
      'replytocom=',
      '?p='
    ],
    description: 'Le CMS le plus populaire au monde, utilisé par plus de 40% des sites web.'
  },
  {
    name: 'phpBB',
    category: 'forum',
    operator: 'inurl:phpbb',
    dofollowFootprints: [
      'viewtopic.php?f=',
      'memberlist.php?mode=viewprofile',
      'posting.php?mode=post'
    ],
    description: 'Un système de forum populaire écrit en PHP.'
  },
  {
    name: 'vBulletin',
    category: 'forum',
    operator: 'inurl:vbulletin OR inurl:showthread.php',
    dofollowFootprints: [
      'member.php?u=',
      'showthread.php?t=',
      'forumdisplay.php?f='
    ],
    description: 'Solution de forum commercial très utilisée.'
  },
  {
    name: 'Drupal',
    category: 'blog',
    operator: 'inurl:drupal OR inurl:node/',
    dofollowFootprints: [
      '/user/',
      '/node/add',
      '/comment/reply/'
    ],
    description: 'CMS robuste souvent utilisé pour les sites institutionnels.'
  },
  {
    name: 'Joomla',
    category: 'blog',
    operator: 'inurl:com_content',
    dofollowFootprints: [
      'index.php?option=com_content',
      'index.php?option=com_users',
      '/component/'
    ],
    description: 'CMS polyvalent avec une grande communauté.'
  },
  {
    name: 'PrestaShop',
    category: 'ecommerce',
    operator: 'inurl:prestashop OR inurl:controller=product',
    dofollowFootprints: [
      'controller=product',
      'controller=category',
      '/module/'
    ],
    description: 'Solution e-commerce française très populaire.'
  },
  {
    name: 'Magento',
    category: 'ecommerce',
    operator: 'inurl:magento OR intext:"Magento Commerce"',
    dofollowFootprints: [
      'catalog/product/view',
      'catalog/category/view',
      'review/product/list'
    ],
    description: 'Plateforme e-commerce enterprise.'
  },
  {
    name: 'XenForo',
    category: 'forum',
    operator: 'inurl:xenforo OR inurl:threads',
    dofollowFootprints: [
      'members/',
      'threads/',
      'profile-posts/'
    ],
    description: 'Solution de forum moderne et performante.'
  },
  {
    name: 'Discourse',
    category: 'forum',
    operator: 'inurl:discourse OR site:*.discourse.org',
    dofollowFootprints: [
      '/t/',
      '/u/',
      '/c/'
    ],
    description: 'Plateforme de discussion moderne en Ruby.'
  },
  {
    name: 'MediaWiki',
    category: 'wiki',
    operator: 'inurl:mediawiki OR inurl:Special:',
    dofollowFootprints: [
      'index.php?title=',
      'Special:RecentChanges',
      'action=edit'
    ],
    description: 'Le moteur wiki qui propulse Wikipédia.'
  }
];