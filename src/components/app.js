import React, { useState } from 'react';
import Accordion from './accordion';
import Search from './search';
import Dropdown from './dropdown';
import Translate from './translate';

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
    {label: 'The Color Red', value: 'red'},
    {label: 'The Color Green', value: 'green'},
    {label: 'The Shade of Blue', value: 'blue'},
];


const App = () => {
    // const [selected, setSelected] = useState(options[0]);

    return (
        <React.Fragment>
            {/* <Accordion items={items}/> */}
            {/* <Search /> */}
            {/* <Dropdown 
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
            /> */}

            <Translate />
        </React.Fragment>
    );
};

export default App;