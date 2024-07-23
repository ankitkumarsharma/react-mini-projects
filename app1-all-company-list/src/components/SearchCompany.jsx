import { useState } from "react";
import useCompanyListStore from "../store/useCompanyListStore";
import companyListData from '../utils/companyList.json';

const SearchCompany = () => {
    const sortCompanyData = companyListData.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
    const { companyListStore, setCompanyListStore } = useCompanyListStore();
    const [search, setSearch] = useState("");
    const hanndleSearch = (value) => {
        setSearch(value);
        if (value.length < 2) {
            return setCompanyListStore(sortCompanyData);
        }
        const filteredCompanyList = companyListStore.filter((company) => {
            return company.name.toLowerCase().includes(search.toLowerCase());
        });
        if (filteredCompanyList) {
            setCompanyListStore(filteredCompanyList);
        }
    }
    return (
        <input
            type="text" placeholder="Search Company"
            value={search} onChange={(e) => hanndleSearch(e.target.value)}
            className="p-5 w-48 mt-1 h-9 rounded-full" />
    )
}

export default SearchCompany;