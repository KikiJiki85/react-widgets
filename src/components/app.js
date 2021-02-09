import React, { useState } from 'react';
import Accordion from './accordion';
import Search from './search';
import Dropdown from './dropdown';
import Translate from './translate';
import Route from './route';
import Header from './header';

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
    const [selected, setSelected] = useState(options[0]);

    return (
        <>
        <Header />
           <Route path="/">
                <Accordion items={items}/>
           </Route>

           <Route path="/list">
                <Search />
           </Route>

           <Route path="/dropdown">
                <Dropdown 
                    label="Select a color" 
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected} />
           </Route>

           <Route path="/translate">
                <Translate />
           </Route>
        </>
    );
};

export default App;