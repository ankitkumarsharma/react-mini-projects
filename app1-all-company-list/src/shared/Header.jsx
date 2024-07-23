import SearchCompany from "../components/SearchCompany";

const Header = () => {
    return (
        <>
            <div className="bg-teal-100 h-14 items-center font-medium flex justify-center w-full">
                <p className="mr-5">All Company List</p>
                <SearchCompany/>
            </div>
        </>
    );
}

export default Header;