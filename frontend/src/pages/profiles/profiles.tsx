import { useGetProfiles } from "@/api/profiles/use-get-profiles";
import { AddNewProfile } from "@/components/profiles/add-new-profile";
import { ProfileColumnData } from "@/components/profiles/profiles-data-coloums";
import { ProfileDataTable } from "@/components/profiles/profiles-data-table";

export const ProfilesPage = () => {
    const { data, isLoading } = useGetProfiles()

    if (isLoading) {
        return null
    }

    return (
        <main className="w-full h-full font-urbanist pt-6 flex flex-col gap-y-4">
            <div className="flex justify-between">
                <h2 className="text-black font-semibold text-2xl">Profiles</h2>
                <AddNewProfile />
            </div>
            <div>
                <ProfileDataTable
                    columns={ProfileColumnData}
                    data={data}
                />
            </div>
        </main>
    );
};
