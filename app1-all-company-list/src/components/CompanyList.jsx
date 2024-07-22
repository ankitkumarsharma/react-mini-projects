import companyListData from '../utils/companyList.json';

const CompanyList = () => {
    const sortCompanyData = companyListData.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
    const list = sortCompanyData.map((company) => (
        <tr>
            <td className='border p-2 border-slate-300'>
                {company.name}
            </td>
            <td className='border p-2 font-medium hover:text-red-900 border-slate-300'>
                <a target='_blank' href={company.url}>{company.url}</a>
            </td>
        </tr>
    ))
    return (
        <>
            <table className='w-full border-collapse border border-slate-400'>
                <tr>
                    <th className='border p-2 text-left border-slate-300'>
                        Company Name
                    </th>
                    <th className='border p-2 text-left border-slate-300'>
                        Website
                    </th>
                </tr>
                {list}
            </table>
        </>
    );
}

export default CompanyList;