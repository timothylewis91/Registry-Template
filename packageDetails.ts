export interface packageDetails{
    name: string;
    readme: string;
    description:string;
    author:{
        email:string;
        name:string;
    }
    maintainers:{
        email: string;
        name: string;
    }[];
    license:string;
}