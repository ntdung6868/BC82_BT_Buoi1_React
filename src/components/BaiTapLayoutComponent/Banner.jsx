import React from "react";

export default function Banner() {
    return (
        <div>
            <div className="container mx-auto p-12 flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold mb-3">A warm welcome!</h1>
                <p className="text-center w-[70%] text-2xl mb-5">
                    Bootstrap utility classes are used to create this jumbotron since the old component has been removed
                    from the framework. Why create custom CSS when you can use utilities?
                </p>
                <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-2.5 px-4.5 rounded cursor-pointer"
                >
                    Call to action
                </button>
            </div>
        </div>
    );
}
