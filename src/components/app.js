import React from 'react';
import Accordion from './accordion';
import Search from './search';
import Dropdown from './dropdown';

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

const options = [
    {label: 'The color Red', value: 'red'},
    {label: 'The color Green', value: 'green'},
    {label: 'The Shade of Blue', value: 'blue'},
];


const App = () => {
    return (
        <React.Fragment>
            {/* <Accordion items={items}/> */}
            {/* <Search /> */}
            <Dropdown options={options}/>
        </React.Fragment>
    );
};

export default App;