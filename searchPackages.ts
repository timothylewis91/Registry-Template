import type { packageSummary } from "../types/packageSummary";




interface SearchResponse {
    objects:{
        package:{
            name: string;
            version:string;
            keywords: string [];
            description: string;
        }

    }[]
}
export async function searchPackages(searchTerm: string): Promise<packageSummary[]>{ 
    const res =await fetch(
        `https://registry.npmjs.org/-/v1/search?text=${searchTerm}`
      );
      const data: SearchResponse = await res.json();
      
        return  data.objects.map((searchResult) =>{
            return{
                name:searchResult.package.name,
                description:searchResult.package.description,
                version:searchResult.package.version,
                keywords:searchResult.package.keywords,
            }
        });

}