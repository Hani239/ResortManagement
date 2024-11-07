import React from "react";

export default function DropdownSize() {
    return (
        <div className="relative w-full lg:max-w-sm">
            <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option>Choose an option</option>
                <option>0-3M</option>
                <option>0-6M</option>
                <option>12-18M</option>
                <option>18M-24M</option>
                <option>3-6M</option>
                <option>6-9M</option>
                <option>9-12M</option>
                <option>Newborn</option>
            </select>
        </div>
    );
}