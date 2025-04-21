import { cn } from "@/lib/utils";

const Title = ({
    children,
    className,
}:{
    children:React.ReactNode;
    className?:string;
}) => {
    return ( 
    <h2 
    className={cn(
        "text-3xl font-bold text-white capitalize tracking-wide font-sans", 
    className
    )}
    >
    {children}
    </h2> 
    );
};

const SubTitle = ({
    children,
    className,
}:{
    children:React.ReactNode;
    className?:string;
}) => {
    return ( 
    <h3 
    className={cn(
        "font-semibold text-gray-600 font-sans", 
    className
    )}
    >
    {children}
    </h3> 
    );
};

const SubText=({
    children,
    className,
}:  {
    children: React.ReactNode;
    className?: string;
})=>{
    return <p className={cn("text-gray-500 text-sm", className)}>{children}</p>
}

export { Title,SubTitle, SubText, };