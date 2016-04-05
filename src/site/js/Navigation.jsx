import React from 'react';

import NavigationMenu from '~/NavigationMenu';

const menus = [
    {
        title: 'Design',
        items: [
            { title: 'Colors', url: '/design/colors' },
            { title: 'Typography', url: '/design/typography' },
        ],
    }, {
        title: 'Components',
        items: [
            { title: 'Avatars', url: '/components/avatars' },
            { title: 'Buttons', url: '/components/buttons' },
            { title: 'Cards', url: '/components/cards' },
            { title: 'Form elements', url: '/components/form-elements' },
            { title: 'Layout', url: '/components/layout' },
            { title: 'Links', url: '/components/links' },
            { title: 'Lists', url: '/components/lists' },
            { title: 'Modals', url: '/components/modals' },
            { title: 'Popovers', url: '/components/popovers' },
            { title: 'Tables', url: '/components/tables' },
        ],
    }, {
        title: 'Overview',
        items: [
            { title: 'Introduction', url: '/overview/introduction' },
            { title: 'Code Guidelines', url: '/overview/code-guidelines' },
            { title: 'Naming Convention', url: '/overview/naming-convention' },
            { title: 'Rules', url: '/overview/rules' },
        ],
    },
];

export default function Navigation() {
    return (
        <div>
            { menus.map(({ title, items }, i) => <NavigationMenu title={title} items={items} key={i} />) }
        </div>
    );
}
