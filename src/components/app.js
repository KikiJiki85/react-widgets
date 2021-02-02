import React from 'react';
import Accordion from './accordion';
import Search from './search';

const items = [
    {
        title: 'What is React',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    },
];


const App = () => {
    return (
        <React.Fragment>
            {/* <Accordion items={items}/> */}
            <Search />
        </React.Fragment>
    );
};

export default App;