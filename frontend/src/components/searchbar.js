import React from "react";
import { Input } from "antd";

const Searchbar = ({ onSearch, onChange }) => {
  const { Search } = Input;

  return (
    <div>
      <Search
        placeholder="Search agencies"
        allowClear
        onSearch={onSearch}
        style={{ width: 200, margin: 10 }}
        onChange={onChange}
      />
    </div>
  );
};
export default Searchbar;
