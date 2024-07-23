import { create } from 'zustand';

const useCompanyListStore = create((set) => (
    {
        companyListStore: [],
        setCompanyListStore: (ev) => set({ companyListStore: ev })
    }
));

export default useCompanyListStore;