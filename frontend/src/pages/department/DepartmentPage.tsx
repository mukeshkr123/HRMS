import { useGetDepartments } from "@/api/departments/use-get-departments";
import { AddNewDepartment } from "@/components/departments/add-new-model";
import { DepartmentColumnData } from "@/components/departments/department-data-coloums";
import { DepartmentDataTable } from "@/components/departments/department-data-table";

export const DepartmentPage = () => {
    const { data, isLoading } = useGetDepartments()

    if (isLoading) {
        return null
    }

    return (
        <main className="w-full h-full font-urbanist pt-6 flex flex-col gap-y-4">
            <div className="flex justify-between">
                <h2 className="text-black font-semibold text-2xl">Departments</h2>
                <AddNewDepartment />
            </div>
            <div>
                <DepartmentDataTable
                    columns={DepartmentColumnData}
                    data={data}
                />
            </div>
        </main>
    );
};
