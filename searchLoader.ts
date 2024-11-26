import { searchPackages } from "../../api/queries/searchPackages";
import type { packageSummary } from "../../api/types/packageSummary";

export interface SearchLoaderResult {
searchResults: packageSummary[];
}


export async  function searchLoader ({request} :{request:Request}) : Promise<SearchLoaderResult> {
    const {searchParams} = new URL (request.url);
    const searchTerm =searchParams.get('searchTerm');
  
    if(!searchTerm) {
      throw new Error('search term ust be provided')
    }


    const results =await searchPackages(searchTerm);

    return {
        searchResults: results,
    }
}