import { Button } from "@/components/ui/button";
import { Link, useRouteError } from "react-router";

export default function ErrorPage() {
    const error: any = useRouteError();

    return (
        <div className="flex flex-col justify-center items-center h-screen text-center p-6">
            <h1 className="text-4xl font-bold text-red-500 mb-2"> 404 / Error Occurred</h1>
            <p className="text-gray-600 mb-4">
                {error?.statusText || error?.message || "Something went wrong. Please try again later."}
            </p>
            <Button>
                <Link to={"/"}>Go Back Home</Link>
            </Button>
        </div>
    );
}
