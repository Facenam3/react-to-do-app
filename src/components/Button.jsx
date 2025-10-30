export default function Button({ children }) {
    return (
        <div>
            <button type="submit" className="px-4 py-2 rounded-sm bg-purple-600 text-gray-50 shadow-xl cursor-pointer">{children}</button>
        </div>
        
    );
}