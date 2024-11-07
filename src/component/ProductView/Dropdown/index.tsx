import React from "react";

export default function DropdownColor() {
    return (
        <div className="relative w-full lg:max-w-sm">
            <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option>Choose an option</option>
                <option>Green</option>
                <option>Blue</option>
                <option>Red</option>
            </select>
        </div>
    );
}