import { Link } from "react-router-dom";

export default function Home() {
    return(
        <main className="h-screen w-full flex justify-center items-center bg-[url('/public/images/hw-bg.webp')] bg-cover bg-center bg-no-repeat">
            <div className="flex flex-col justify-center items-center bg-orange-50 px-6 py-12 shadow sm:rounded-lg sm:px-12 rounded-lg">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-wider text-gray-900 drop-shadow-md">Welcome</h1>
                    <p className="text-xl md:text-2xl lg:text-4xl text-gray-900 tracking-wider mt-2 mb-8 drop-shadow-md">Please Log In</p>
                    <Link to='/login' className="action-button shadow">Login</Link>
                </div>
            </div>
        </main>
    );
}