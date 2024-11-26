
import type { Params } from "react-router-dom";
import type { packageDetails } from "../../api/types/packageDetails";
import { getPackage } from "../../api/queries/getPackages";


interface LoaderArgs{
    params: Params;
}
export interface DetailsLoaderResult {
    details: packageDetails;

}

export async function detialsLoader({params} : LoaderArgs): Promise<DetailsLoaderResult> {
    const { name} = params;
    if (!name) {
        throw new Error (`Name must be provided`);
    }
 const details = await getPackage(name);
    return {
        details,
    };
}