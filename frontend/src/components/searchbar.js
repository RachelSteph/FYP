import React from 'react';
import { Input, Space } from 'antd';


const Searchbar = () => {
    const { Search } = Input;
    const onSearch = value => console.log(value);
    return (
        <div>
                <Search placeholder="Search agencies" allowClear onSearch={onSearch} style={{ width: 200, float: 'right', margin: 10}} />

        </div>
    )
}

export default Searchbar


